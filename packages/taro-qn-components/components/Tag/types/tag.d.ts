import { ComponentClass } from 'react';
import { CommonEventFunction } from '@tarojs/components/types/common';

export interface CTagProps {
  /**
   * 标签颜色
   */
  color?: string;

  /**
   * 是否为实心按钮
   * @default false
   */
  solid?: boolean;

  /**
   * 是否为圆角按钮
   * @default false
   */
  circle?: boolean;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 设置图标
   */
  icon?: string;

  /**
   * 选择时的回调函数
   */
  onClick?: CommonEventFunction;
}

declare const CTag: ComponentClass<CTagProps>;

export default CTag;
