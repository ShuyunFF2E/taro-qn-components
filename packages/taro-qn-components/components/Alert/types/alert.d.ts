import { ComponentClass } from 'react';

export interface CAlertProps {
  /**
   * 是否显示图标
   * @default false
   */
  showIcon?: boolean;

  /**
   * 展示信息
   * @default ''
   */
  message?: string;

  /**
   * 文本展示类型
   * @default 'info'
   */
  type?: 'info' | 'success' | 'warning';

  /**
   * 元素的额外信息自定义样式
   * @default {}
   */
  style?: object;
}

export interface CAlertState {}

declare const CAlertProps: ComponentClass<CAlertProps>;
