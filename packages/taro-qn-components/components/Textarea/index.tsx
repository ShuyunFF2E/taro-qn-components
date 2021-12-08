import React from 'react';
import { Textarea, View } from '@tarojs/components';
import PropTypes, { InferProps } from 'prop-types';
import { CommonEvent } from '@tarojs/components/types/common';
import cls from 'classnames';
import { CTextareaProps } from './types/textarea';
import './index.less';

export default class CTextarea extends React.Component<CTextareaProps> {
  public static defaultProps: CTextareaProps;
  public static propTypes: InferProps<CTextareaProps>;

  state = {
    focus: false,
  };

  private onChangeEvent = (event: CommonEvent): void => {
    if (event.type === 'focus') {
      this.setState({
        focus: true,
      });
    }
    if (event.type === 'blur') {
      this.setState({
        focus: false,
      });
    }
    if (event.type === 'input') {
      this.props.onChange(event.detail.value);
    }
  };

  public render(): JSX.Element {
    const { style = {}, maxlength = -1, disabled, value, count, autoHeight, placeholder, className = '' } = this.props;
    const { focus } = this.state;
    const { width = '100%', margin, padding, ...otherStyle } = style;
    const _maxLength = parseInt(maxlength.toString());
    return (
      <View
        className={cls(`cross-textarea ${className}`)}
        style={{
          borderColor: focus ? '#2976ea' : '#d9d9d9',
          backgroundColor: disabled ? '#FAFBFC' : '',
          width,
          margin,
          padding,
          boxShadow: focus ? '0 0 0 2px rgba(24, 144, 255, 0.2)' : '',
        }}
      >
        <Textarea
          className="cross-textarea-content"
          onBlur={this.onChangeEvent}
          onFocus={this.onChangeEvent}
          maxlength={Number(maxlength)}
          autoHeight={autoHeight}
          style={otherStyle}
          onInput={this.onChangeEvent}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
        />
        {count && _maxLength > 0 && (
          <View className="cross-textarea-count">
            {value.length}/{_maxLength}
          </View>
        )}
      </View>
    );
  }
}

CTextarea.defaultProps = {
  style: {},
  className: '',
  value: '',
  maxlength: -1,
  placeholder: '',
  disabled: false,
  count: false,
  autoHeight: { minRows: 4 },
  onChange: (): void => {},
};

CTextarea.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string,
  maxlength: PropTypes.number,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  count: PropTypes.bool,
  autoHeight: PropTypes.oneOf([PropTypes.bool, PropTypes.object]),
  onChange: PropTypes.func,
};
