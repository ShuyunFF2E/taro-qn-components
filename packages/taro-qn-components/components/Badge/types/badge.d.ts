import { ComponentClass } from 'react';

export interface CBadgeProps {
  /**
   * 角标红点
   * @default false
   */
  dot?: boolean;
  /**
   * 角标内容
   */
  value?: string | number;
  /**
   * 角标最大值
   * @default 99
   */
  maxValue?: number;
  customStyle?: object | string;
  className?: string | array;
}

declare const CBadge: ComponentClass<CBadgeProps>;

export default CBadge;
