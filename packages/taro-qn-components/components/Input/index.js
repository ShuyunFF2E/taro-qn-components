import React from 'react';
import PropTypes from 'prop-types';
import { View, Input } from '@tarojs/components';
import cls from 'classnames';
import './index.less';
export default class CInput extends React.Component {
  state = {
    focus: false,
  };

  onChangeEvent = (e) => {
    if (e.type === 'focus') {
      this.setState({
        focus: true,
      });
      this.props.onFocus(e);
    }
    if (e.type === 'blur') {
      this.setState({
        focus: false,
      });
      this.props.onBlur(e);
    }
    if (e.type === 'input') {
      this.props.onChange(e.detail.value);
    }
  };

  clearInput = () => {
    this.props.onChange('');
  };

  render() {
    const {
      className,
      style,
      clear,
      placeholder,
      value,
      disabled,
      type,
      count,
      addonAfter,
      mode = 'normal',
      maxlength,
      isAutoFocus,
      placeholderStyle,
      placeholderClass,
    } = this.props;

    const { focus } = this.state;

    const rootCls = cls(
      'cross-input',
      {
        'cross-input__normal': mode === 'normal',
        'cross-input__large': mode === 'large',
        'cross-input__focus': focus,
      },
      className,
    );
    const containerCls = cls('cross-input__container', {
      'cross-input--disabled': disabled,
    });
    const _maxLength = parseInt(maxlength.toString());

    return (
      <View className={rootCls} style={style}>
        <View className={containerCls}>
          <Input
            className="cross-input__content"
            type={type}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            maxlength={maxlength}
            onBlur={this.onChangeEvent}
            onFocus={this.onChangeEvent}
            onInput={this.onChangeEvent}
            focus={isAutoFocus}
            placeholderStyle={placeholderStyle}
            placeholderClass={placeholderClass}
          />
          {count && (
            <View className="cross-input__count">
              {value.length}/{_maxLength}
            </View>
          )}
          {clear && (
            <View
              className="cross-input__clear"
              onClick={this.clearInput}
            ></View>
          )}
        </View>
        {addonAfter && (
          <View
            className={cls({
              'cross-input__addon': true,
              normal_line: mode === 'normal',
              large_line: mode === 'large',
            })}
          >
            {addonAfter}
          </View>
        )}
      </View>
    );
  }
}

CInput.defaultProps = {
  className: '',
  style: '',
  value: '',
  name: '',
  mode: 'normal', // normal large
  placeholder: '',
  maxlength: 140,
  type: 'text',
  disabled: false,
  clear: false,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  count: false,
  addonAfter: '',
  isAutoFocus: false,
  placeholderStyle: '',
  placeholderClass: '',
};

CInput.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  mode: PropTypes.string,
  placeholder: PropTypes.string,
  maxlength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  count: PropTypes.bool,
  clear: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  addonAfter: PropTypes.string,
  isAutoFocus: PropTypes.bool,
  placeholderStyle: PropTypes.string,
  placeholderClass: PropTypes.string,
};
