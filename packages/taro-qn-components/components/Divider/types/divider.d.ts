import React from "react"

export type IDividerTypes = 'horizontal' | 'vertical'

export type IOrientationTypes = 'left' | 'center' | 'right'

export interface IDividerProps {
  /**
   * 水平还是垂直
   * @default horizontal
   */
  type?: IDividerTypes

  /**
   * 是否虚线
   * @default false
   */
  dashed?: boolean

  /**
   * 分割线标题的位置
   * @default center
   */
  orientation?: IOrientationTypes

  className?: string

  /**
   * 文案样式
   */
  textStyle?: React.CSSProperties

  style?: React.CSSProperties

  children?: string
}
