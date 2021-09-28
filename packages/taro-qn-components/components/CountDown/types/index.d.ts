/*
 * @Author: sevenFlow
 * @Date: 2021-07-01 13:47:02
 * @LastEditors: sevenFlow
 * @LastEditTime: 2021-07-08 13:49:57
 * @Description:
 */

export interface CountDownPropsType {
  /**
   * 倒计时毫秒数
   * @requires 必填
   */
  time: number;
  /**
   * 倒计时结束执行事件
   */
  onEnd?: () => void;
}

export interface FormattedRes {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface UseCountDownReturnType {
  /**
   * 倒计时秒数
   */
  secondTime: number;
  /**
   * 暂停倒计时函数
   */
  pauseTimer: () => void;
  /**
   * 开始暂停状态的倒计时函数
   */
  startTimer: () => void;
  /**
   * 重启倒计时函数
   */
  restartTimer: () => void;
  /**
   * 倒计时天/时/分/秒时间格式
   */
  formattedRes: FormattedRes;
}

export type TDate = NodeJS.Timeout | undefined;

export declare type UseCountDownFn = (
  CountDownPropsType,
) => UseCountDownReturnType;
