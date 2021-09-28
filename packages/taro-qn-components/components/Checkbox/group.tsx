import React, { useState, useEffect, useMemo } from 'react';
import cls from 'classnames';
import { View } from '@tarojs/components';
import CheckboxGroupContext from './context';
import { prefixCls } from '../const';
import CCheckbox from './index';

const classSelector = `${prefixCls}-checkbox`;

export default function Group(props) {
  const { children, defaultValue, value, options, onChange, disabled, layout } =
    props;

  const [currentValue, setCurrentValue] = useState(
    value === undefined ? defaultValue : value,
  );

  useEffect(() => {
    setCurrentValue(value === undefined ? defaultValue : value);
  }, [value]);

  function checkboxChange({ value, checked }) {
    let _value = currentValue === undefined ? [] : currentValue;
    const index = _value.indexOf(value);
    if (index > -1 && !checked) {
      _value.splice(index, 1);
    }
    if (index === -1 && checked) {
      _value.push(value);
    }
    setCurrentValue([..._value]);
    onChange && onChange([..._value]);
  }

  const getOptions = () =>
    options.map((option) => {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option,
        };
      }
      return option;
    });

  const context = {
    value: currentValue,
    disabled,
    toggleOption: checkboxChange,
  };
  function renderChild(_children) {
    if (typeof options !== 'undefined') {
      return getOptions().map((option) => {
        return (
          <CCheckbox
            disabled={option.disabled}
            checked={currentValue.indexOf(option.value) !== -1}
            value={option.value}
            key={option.value}
            onChange={checkboxChange}
          >
            {option.label}
          </CCheckbox>
        );
      });
    }
    return _children;
  }

  const checkboxes = useMemo(
    () => renderChild(children),
    [options, currentValue, disabled, children],
  );

  const classes = cls(`${classSelector}-group`, {
    [`${classSelector}-vertical`]: layout === 'vertical',
    [`${classSelector}-horizontal`]: layout === 'horizontal',
  });

  return (
    <CheckboxGroupContext.Provider value={context}>
      <View className={classes}>{checkboxes}</View>
    </CheckboxGroupContext.Provider>
  );
}

Group.defaultProps = {
  value: undefined,
  defaultValue: [],
  options: undefined,
  disabled: undefined,
  layout: 'horizontal',
  onChange: () => {},
};
