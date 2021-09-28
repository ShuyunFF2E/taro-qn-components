import { ComponentClass, CSSProperties } from 'react';

export interface CIconProps {
  /**
   * 字体图标尺寸
   * @default 14
   */
  size?: number;

  /**
   * 字体图标颜色
   */
  color?: string;

  /**
   * 字体图标类型
   */
  type?: string;

  /**
   * 字体禁用
   */
  disabled?: boolean;

  onClick?: CommonEventFunction;

  style?: object | CSSProperties;

  className?: string;
}

export interface CIconState {}

declare const CIconProps: ComponentClass<CIconProps>;
