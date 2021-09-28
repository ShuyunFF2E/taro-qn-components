import React, { cloneElement, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { View } from '@tarojs/components';
import { prefixCls } from '../const';
/* eslint-disable-next-line */
import Radio from './index';

const classSelector = `${prefixCls}-radio`;

export default function Group(props) {
  const {
    children,
    defaultValue,
    value,
    options,
    onChange,
    disabled,
    layout,
    style = {},
  } = props;
  const [currentValue, setCurrentValue] = useState(defaultValue);

  useEffect(() => {
    setCurrentValue(value === undefined ? defaultValue : value);
  }, [value]);

  function radioChange(val, evt) {
    setCurrentValue(val);
    onChange(val, evt);
  }

  function renderChild(_children) {
    if (typeof options !== 'undefined') {
      return options.map((item) => {
        return (
          <Radio
            disabled={item.disabled}
            checked={item.value === currentValue}
            value={item.value}
            onChange={radioChange}
            key={item.value}
          >
            {item.label}
          </Radio>
        );
      });
    }
    return _children.map((child) => {
      // 子元素有可能为一个表达式，直接返回了false或者null
      if (child && child.type && child.type.prototype === Radio.prototype) {
        return cloneElement(child, {
          disabled,
          checked: child.props.value === currentValue,
          onChange(val, evt) {
            radioChange(val, evt);
          },
          key: child.props.value,
        });
      }

      if (child && child.props && child.props.children) {
        return cloneElement(child, {
          ...child.props,
          children: renderChild(child.props.children),
        });
      }
      return child;
    });
  }

  const radios = useMemo(
    () => renderChild(children),
    [options, currentValue, disabled, children],
  );

  return (
    <View
      className={classnames(`${classSelector}-group`, {
        horizontal: layout === 'horizontal',
        vertical: layout === 'vertical',
      })}
      style={style}
    >
      {radios}
    </View>
  );
}

Group.propTypes = {
  defaultValue: PropTypes.node,
  value: PropTypes.node,
  options: PropTypes.array,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  layout: PropTypes.string,
};

Group.defaultProps = {
  defaultValue: undefined,
  value: undefined,
  options: undefined,
  onChange: () => {},
  disabled: false,
  layout: 'horizontal',
};
