import { ComponentClass } from 'react';

export interface CBackTopProps {
  /**
   * 是否显示图标
   * @default false
   */
  visible?: boolean;

  /**
   * 回到顶部所需时间（ms）
   * @default 450
   */
  duration?: number;

  /**
   * 点击按钮回调函数
   */
  onClick?: CommonEventFunction;
}

export interface CBackTopState {}

declare const CBackTopProps: ComponentClass<CBackTopProps>;
