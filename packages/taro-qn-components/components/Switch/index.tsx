import React, { Component } from 'react';
import { Checkbox, Label, View } from '@tarojs/components';
import cls from 'classnames';
import { CSwitchProps, CSwitchState } from './types';

import './index.less';

export default class CSwitch extends Component<CSwitchProps, CSwitchState> {
  static defaultProps = {
    checked: false,
    disabled: false,
    color: '#2976ea',
    size: 'default',
    className: '',
  };

  private handleOnChange = (event): void => {
    const { disabled } = this.props;
    if (disabled) return;
    if (process.env.TARO_ENV === 'h5') {
      const { checked } = event.target;
      const { checked: initChecked } = this.props;
      const state = typeof checked === 'undefined' ? initChecked : checked;
      this.props.onChange && this.props.onChange(state);
    } else {
      const { value } = event.detail;
      const { checked } = this.props;
      const state = typeof value === 'undefined' ? checked : value;
      this.props.onChange && this.props.onChange(state);
    }
  };

  public render(): JSX.Element {
    const randomId = Math.random().toString(36).substr(2);
    const { checked, color, disabled, className, size } = this.props;
    return (
      <Label
        className={cls({
          ['cross-switch']: true,
          ['cross-switch-checked']: checked,
          ['cross-switch-disabled']: disabled,
          ['cross-switch-small']: size === 'small',
          className,
        })}
        for={`switch-class-${randomId}`}
        style={{ color }}
      >
        {process.env.TARO_ENV === 'h5' && (
          <Checkbox
            className="cross-switch-checkbox"
            value={`switch-class-${randomId}`}
            checked={checked}
            disabled={disabled}
            id={`switch-class-${randomId}`}
            onClick={this.handleOnChange}
          />
        )}
        {process.env.TARO_ENV !== 'h5' && (
          <Checkbox
            className="cross-switch-checkbox"
            value={`switch-class-${randomId}`}
            checked={checked}
            disabled={disabled}
            id={`switch-class-${randomId}`}
            onChange={this.handleOnChange}
          />
        )}
        <View className="cross-switch-handle"></View>
      </Label>
    );
  }
}
