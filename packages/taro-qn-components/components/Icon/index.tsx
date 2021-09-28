import React, { Component } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Text } from '@tarojs/components';
import cls from 'classnames';
import { CIconProps } from './types/icon';

import './index.less';

export default class CIcon extends Component<CIconProps> {
  public static defaultProps: CIconProps;
  public static propTypes: InferProps<CIconProps>;

  private handleClick(): void {
    if (this.props.disabled) return;
    this.props.onClick && this.props.onClick(arguments as any);
  }

  public render(): JSX.Element {
    const { type, color, style, className, disabled, size } = this.props;
    const styleSheet = {
      ...style,
      color: disabled ? '#00000040' : color,
      cursor: disabled ? 'not-allowed' : '',
      fontSize: `${size}px`,
    };
    return (
      <Text
        onClick={this.handleClick.bind(this)}
        className={cls(`iconfont icon-${type} ${className}`)}
        style={styleSheet}
      />
    );
  }
}

CIcon.defaultProps = {
  type: '',
  color: '',
  style: {},
  className: '',
  size: 14,
  disabled: false,
};

CIcon.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};
