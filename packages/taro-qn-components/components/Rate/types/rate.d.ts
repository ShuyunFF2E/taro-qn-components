import { ComponentClass } from 'react';
import { CommonEventFunction } from '@tarojs/components/types/common';

export interface CRateProps {
  /**
   * 是否允许半选
   * @default false
   */
  allowHalf?: boolean;

  /**
   * star 总数
   * @default 5
   */
  count?: number;

  /**
   * 只读, 无法进行交互
   * @default false
   */
  disabled?: boolean;

  /**
   * 当前数，受控值
   * @default 0
   */
  value?: number;

  /**
   * star之间的距离
   * @default 2(px) 所有大小最终展示为像素大小
   */
  gap?: number;

  /**
   * 图标展示大小
   * @default 24(px) 所有大小最终展示为像素大小
   */
  size?: number;

  /**
   * 选择时的回调函数
   */
  onChange?: CommonEventFunction;
}

declare const CRate: ComponentClass<CRateProps>;

export default CRate;
