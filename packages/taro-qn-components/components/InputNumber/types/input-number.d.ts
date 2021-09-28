import { MouseEvent, ComponentClass, CSSProperties } from "react";
import {
  CommonEventFunction,
  CommonEvent
} from "@tarojs/components/types/common";

export interface CInputNumberProps {
  className?: string;

  style?: CSSProperties;

  /**
   * 输入框当前值
   * @type {number | string}
   * @description 必填，输入框当前值，开发者需要通过 onChange 事件来更新 value 值
   */
  value: number | string;

  /**
   * 最小值
   * @type {number}
   * @default 0
   */
  min?: number;
  /**
   * 最大值
   * @type {number}
   * @default 100
   */
  max?: number;
  /**
   * 每次点击改变的间隔大小
   * @type {number}
   * @default 1
   */
  step?: number;

  /**
   * 是否禁止输入，禁止点击按钮
   * @type {boolean}
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否禁止输入，但不禁止点击按钮
   * @type {boolean}
   * @default false
   */
  disabledInput?: boolean;
  /**
   * 输入框值改变时触发的事件
   * @param {number} value 输入框当前值
   * @description 开发者需要通过 onChange 事件来更新 value 值变化，onChange 函数必填
   */
  onChange: (value: number, e: CommonEvent) => void;
}

declare const CInputNumber: ComponentClass<CInputNumberProps>;

export default CInputNumber;
