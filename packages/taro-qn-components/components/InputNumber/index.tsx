import React from 'react';
import cls from 'classnames';
import { Input, View } from '@tarojs/components';
import PropTypes, { InferProps } from 'prop-types';
import { CommonEvent } from '@tarojs/components/types/common';

import { CInputNumberProps } from './types/input-number';
import { prefixCls } from '../const';
import CIcon from '../Icon';
import './index.less';

const classSelector = `${prefixCls}-input-number`;

function addNum(num1: number, num2: number): number {
  let sq1: number, sq2: number;
  try {
    sq1 = _toString(num1).split('.')[1].length;
  } catch (e) {
    sq1 = 0;
  }
  try {
    sq2 = _toString(num2).split('.')[1].length;
  } catch (e) {
    sq2 = 0;
  }
  const m = Math.pow(10, Math.max(sq1, sq2));
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
}

// 格式化数字，处理01变成1,并且不处理1. 这种情况
function parseValue(num: string): string {
  if (num === '') return '0';

  const numStr = _toString(num);
  if (numStr.indexOf('0') === 0 && numStr.indexOf('.') === -1) {
    // 处理01变成1,并且不处理1.
    return _toString(parseFloat(num));
  }
  return _toString(num);
}

function _toString(value) {
  if (value == null) {
    return '';
  }
  if (typeof value === 'string') {
    return value;
  }
  if (Array.isArray(value)) {
    return `${value.map((other) =>
      other == null ? other : _toString(other),
    )}`;
  }
  const result = `${value}`;
  return result == '0' && 1 / value == -(1 / 0) ? '-0' : result;
}

type ExtendEvent = {
  target: {
    value: string | number;
  };
};

export default class CInputNumber extends React.Component<CInputNumberProps> {
  public static defaultProps: CInputNumberProps;
  public static propTypes: InferProps<CInputNumberProps>;

  state = {
    focus: false,
  };

  private onChangeEvent = (event: CommonEvent): void => {
    if (event.type === 'focus') {
      this.setState({
        focus: true,
      });
    } else {
      this.setState({
        focus: false,
      });
    }
  };

  private handleClick(clickType: 'minus' | 'plus', event: CommonEvent): void {
    const { disabled, value, min = 0, max = 100, step = 1 } = this.props;
    const lowThanMin = clickType === 'minus' && value <= min;
    const overThanMax = clickType === 'plus' && value >= max;
    if (lowThanMin || overThanMax || disabled) return;
    const deltaValue = clickType === 'minus' ? -step : step;
    let newValue = addNum(Number(value), deltaValue);
    newValue = Number(this.handleValue(newValue));
    this.props.onChange(newValue, event);
  }

  private handleValue = (value: string | number): string => {
    const { max = 100, min = 0 } = this.props;
    let resultValue = value === '' ? min : value;
    if (resultValue > max) {
      resultValue = max;
    }
    if (resultValue < min) {
      resultValue = min;
    }
    if (resultValue && !Number(resultValue)) {
      resultValue = parseFloat(String(resultValue)) || min;
    }

    resultValue = parseValue(String(resultValue));
    return resultValue;
  };

  private handleInput = (e: CommonEvent & ExtendEvent): string => {
    const { value } = e.target;
    const { disabled } = this.props;
    if (disabled) return '';

    const newValue = this.handleValue(value);
    this.props.onChange(Number(newValue), e);
    return newValue;
  };

  render() {
    const { focus } = this.state;
    const {
      style = {},
      className,
      value,
      min = 0,
      max = 100,
      disabled,
      disabledInput,
    } = this.props;
    const rootCls = cls(`${classSelector}`, className);
    const inputValue = Number(this.handleValue(value));
    const minusBtnCls = cls(`${classSelector}__icon`, {
      [`${classSelector}--disabled`]: inputValue <= min || disabled,
    });
    const plusBtnCls = cls(`${classSelector}__icon`, {
      [`${classSelector}--disabled`]: inputValue >= max || disabled,
    });

    const minusBtnIconCls = cls({
      [`${classSelector}_icon`]: !(inputValue <= min || disabled),
      [`${classSelector}_icon-disabled`]: inputValue <= min || disabled,
    });
    const plusBtnIconCls = cls({
      [`${classSelector}_icon`]: !(inputValue >= max || disabled),
      [`${classSelector}_icon-disabled`]: inputValue >= max || disabled,
    });

    return (
      <View
        className={rootCls}
        style={{
          borderColor: focus ? '#2976ea' : '#ddd',
          ...style,
        }}
      >
        <View
          className={minusBtnCls}
          onClick={this.handleClick.bind(this, 'minus')}
        >
          <CIcon type="minus" className={minusBtnIconCls} />
        </View>
        <Input
          onBlur={this.onChangeEvent}
          onFocus={this.onChangeEvent}
          value={String(inputValue)}
          disabled={disabledInput || disabled}
          onInput={this.handleInput}
          type="number"
          className="cross-input-number__input"
        />
        <View
          className={plusBtnCls}
          onClick={this.handleClick.bind(this, 'plus')}
        >
          <CIcon type="plus" className={plusBtnIconCls} />
        </View>
      </View>
    );
  }
}

CInputNumber.defaultProps = {
  style: {},
  className: '',
  value: 1,
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  disabledInput: false,
  onChange: () => {},
};

CInputNumber.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  disabledInput: PropTypes.bool,
  onChange: PropTypes.func,
};
