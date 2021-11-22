import { ComponentClass } from 'react';

export interface CButtonProps {
  /**
   * 设置按钮类型
   * @default 'normal'
   * @params primary | dashed | link | text | normal
   */
  type?: string;

  /**
   * 设置按钮大小
   * @default default
   * @params large | default | small
   */
  size?: string;

  /**
   * 将按钮宽度调整为其父宽度的选项
   * @default false
   */

  block?: boolean;

  /**
   * 设置按钮载入状态
   * @default false
   */
  loading?: boolean;

  /**
   * 自定义额外类名
   */
  className?: string;

  /**
   * 按钮失效状态
   * @default false
   */
  disabled?: boolean;

  /**
   * 点击按钮时的回调
   */
  onClick?: CommonEventFunction;

  /**
   * 设置危险按钮
   * @default false
   */
  danger?: boolean;

  /**
   * 设置按钮的图标组件
   */
  icon?: string;

  /**
   * 自定义额外style
   */
  style?: object;
}

export interface CButtonState {}

declare const CButtonProps: ComponentClass<CButtonProps>;

export default CButtonProps;
