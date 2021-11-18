import React, { Component } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { View } from '@tarojs/components';
import cls from 'classnames';
import { CommonEvent } from '@tarojs/components/types/common';
import { CTagProps } from './types/tag';
import CIcon from '../Icon';
import { prefixCls } from '../const';
import './index.less';

const classSelector = `${prefixCls}-tag`;

export default class CTag extends Component<CTagProps> {
  public static defaultProps: CTagProps;
  public static propTypes: InferProps<CTagProps>;

  private onClick(event: CommonEvent): void {
    const { disabled, onClick } = this.props;
    if (!disabled) {
      typeof onClick === 'function' && onClick(event);
    }
  }

  public render(): JSX.Element {
    const { color, solid, circle, icon, disabled, children } = this.props;
    const rootClass = cls(classSelector, {
      [`${classSelector}-circle`]: !!circle,
      [`${classSelector}-disabled`]: !!disabled,
    });

    let tagStyle = {};

    if (solid && color) {
      tagStyle = {
        backgroundColor: color,
        color: '#fff',
        borderColor: color,
      };
    } else if (solid) {
      tagStyle = {
        backgroundColor: '#d9d9d9',
      };
    } else if (color) {
      tagStyle = {
        color: color,
        borderColor: color,
      };
    }

    return (
      <View
        className={rootClass}
        style={tagStyle}
        onClick={this.onClick.bind(this)}
      >
        {children}
        {icon && (
          <CIcon
            type={icon}
            size={10}
            className={`${classSelector}-close`}
            style={{ marginLeft: '5px' }}
          />
        )}
      </View>
    );
  }
}

CTag.defaultProps = {
  color: '',
  solid: false,
  circle: false,
  disabled: false,
  icon: '',
};

CTag.propTypes = {
  color: PropTypes.string,
  solid: PropTypes.bool,
  circle: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};
