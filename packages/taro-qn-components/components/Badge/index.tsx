import React, { Component } from 'react';
import { View } from '@tarojs/components';
import cls from 'classnames';
import PropTypes, { InferProps } from 'prop-types';
import { CBadgeProps } from './types/badge';
import './index.less';

export default class Badge extends Component<CBadgeProps> {
  public static defaultProps: CBadgeProps;
  public static propTypes: InferProps<CBadgeProps>;

  public constructor(props: CBadgeProps) {
    super(props);
    this.state = {};
  }

  private formatValue(
    value: string | number | undefined,
    maxValue: number,
  ): string | number {
    if (value === '' || value === null || typeof value === 'undefined')
      return '';
    const numValue = +value;
    if (Number.isNaN(numValue)) {
      return value;
    }
    return numValue > maxValue ? `${maxValue}+` : numValue;
  }

  public render(): JSX.Element {
    const { dot, value, maxValue = 99 } = this.props;
    const rootClassName = ['badge'];

    const val = this.formatValue(value, maxValue);

    return (
      <View className={cls(rootClassName, this.props.className)}>
        {this.props.children}
        {dot ? (
          <View className="badge__dot"></View>
        ) : (
          val !== '' && <View className="badge__num">{val}</View>
        )}
      </View>
    );
  }
}

Badge.defaultProps = {
  dot: false,
  value: '',
  maxValue: 99,
  customStyle: {},
  className: '',
};

Badge.propTypes = {
  dot: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxValue: PropTypes.number,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};
