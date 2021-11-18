import { ComponentClass } from 'react';

export interface CAlertProps {
  /**
   * 是否显示图标
   * @default false
   */
  showIcon?: boolean;

  /**
   * 图标类型
   * @default 'help'
   */
  icon?: string;

  /**
   * 展示标题
   * @default ''
   */
  title?: string;

  /**
   * 展示信息
   * @default ''
   */
  message?: any;

  /**
   * 文本展示类型
   * @default 'info'
   */
  type?: 'info' | 'success' | 'warning' | 'error';

  /**
   * 元素的额外信息自定义样式
   * @default {}
   */
  style?: object;

  /**
   * 自定义标题元素的自定义样式
   * @default {}
   */
  titleStyle?: object;

  /**
   * 自定义message元素的自定义样式
   * @default {}
   */
  messageStyle?: object;
}

export interface CAlertState {}

declare const CAlertProps: ComponentClass<CAlertProps>;
