import { ComponentClass } from 'react';

export interface CProgressProps {
  /**
   * 百分比
   * @default 0
   */
  percent?: number;

  /**
   * 是否显示进度数值或状态图标
   * @default true
   */
  showInfo?: boolean;

  /**
   * 元素的颜色
   */
  color?: string;

  /**
   * 元素的状态
   */
  status?: 'progress' | 'error' | 'success';

  /**
   * 元素的规格,进度条宽度
   */
  strokeWidth?: number;
}
