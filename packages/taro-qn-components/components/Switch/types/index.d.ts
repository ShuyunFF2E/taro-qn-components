import { ComponentClass } from 'react';

export interface CSwitchProps {
  /**
   * 指定当前是否选中
   * @default false
   */
  checked?: boolean;

  /**
   * 初始是否选中
   * @default false
   */
  defaultChecked?: boolean;

  /**
   * switch颜色底色修改
   * @default #1890ff
   */
  color?: string;

  /**
   * 是否禁止点击
   * @default false
   */
  disabled?: boolean;

  /**
   * 开关大小
   * @default default
   * @params default | small
   */
  size?: string;

  /**
   * Switch 器类名
   */
  className?: string;

  /**
   * 变化时回调函数
   */
  onChange?: (value: boolean) => void;
}

export interface CSwitchState {
  innerChecked: boolean;
}

declare const CSwitchProps: ComponentClass<CSwitchProps>;

export default CSwitchProps;
