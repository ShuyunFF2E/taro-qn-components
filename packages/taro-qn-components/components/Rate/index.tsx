import React, { Component } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { View, Text } from '@tarojs/components';
import { CRateProps } from './types/rate';
import { prefixCls } from '../const';
import './index.less';

const classSelector = `${prefixCls}-rate`;

export default class CRate extends Component<CRateProps> {
  public static defaultProps: CRateProps;
  public static propTypes: InferProps<CRateProps>;

  private handleClick(value): void {
    if (this.props.disabled) return;
    this.props.onChange && this.props.onChange(value);
  }

  public render(): JSX.Element {
    const { allowHalf, count = 5, value = 0, gap = 2, size = 24 } = this.props;
    const starsArr: string[] = [];
    const floorStar = Math.floor(value);
    const ceilStar = Math.ceil(value);

    for (let i = 0; i < count; i++) {
      if (floorStar > i) {
        starsArr.push(`${classSelector}_icon ${classSelector}_icon-bling`);
      } else if (ceilStar - 1 === i && allowHalf) {
        starsArr.push(`${classSelector}_icon ${classSelector}_icon-half`);
      } else {
        starsArr.push(`${classSelector}_icon ${classSelector}_icon-dim`);
      }
    }
    return (
      <View className={classSelector}>
        {starsArr.map((cls, i) => (
          <View
            className={cls}
            key={`${classSelector}-star_${i}`}
            style={{ marginRight: `${gap}px` }}
            onClick={() => this.handleClick(i + 1)}
          >
            <Text
              className="iconfont icon-star"
              style={{ fontSize: `${size}px` }}
            ></Text>
            <View className={`${classSelector}__left`}>
              <Text
                className="iconfont icon-star"
                style={{ fontSize: `${size}px` }}
              ></Text>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

CRate.defaultProps = {
  allowHalf: false,
  count: 5,
  gap: 2,
  disabled: false,
  value: 0,
  size: 24,
  onChange: () => {},
};

CRate.propTypes = {
  allowHalf: PropTypes.bool,
  count: PropTypes.number,
  gap: PropTypes.number,
  disabled: PropTypes.bool,
  value: PropTypes.number,
  size: PropTypes.number,
  onChange: PropTypes.func,
};
