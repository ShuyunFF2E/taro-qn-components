import { ComponentClass, CSSProperties } from 'react';
import { CommonEvent, CommonEventFunction } from './types/common';

export interface CTextareaProps {
  className?: string;

  style?: CSSProperties;

  /**
   * 输入框当前值，用户需要通过 onChange 事件的来更新 value 值，必填
   */
  value: string;

  /**
   * 最大长度 -1不限制
   * @default -1
   */
  maxlength?: number;

  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否显示字数
   * @default false
   */
  count?: boolean;
  /**
   * 输入框值改变时触发的事件，
   * 开发者需要通过 onChange 事件来更新 value 值变化，
   * onChange 函数必填
   */
  onChange: (value: string, event?: CommonEvent) => void;
}

declare const CTextarea: ComponentClass<CTextareaProps>;

export default CTextarea;
