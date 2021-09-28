import React from 'react'

export type IPlacementType = 'top' | 'left' | 'bottom' | 'right'

export interface IDrawerProps {

  /**
   * 是否可见
   * @default false
   */
  visible: boolean

  /**
   * 标题
   * @default ''
   */
  title?: string | React.ReactNode

  /**
   * 是否显示右上角关闭按钮
   * @default true
   */
  closable?: boolean

  /**
   * 关闭时销毁里面的子元素
   * @default false
   */
  destroyOnClose?: boolean

  /**
   * 点击遮罩层关闭drawer
   * @default true
   */
  maskClosable?: boolean

  /**
   * 是否显示遮罩层
   * @default true
   */
  mask?: boolean

  /**
   * 是否fixed定位
   * @default true
   */
  fixed?: boolean

  /**
   * 是否隐藏header
   * @default false
   */
  noHeader?: boolean

  /**
   * 抽屉的宽度,placement设置为left或者right生效
   * @default '300px'
   */
  width?: string | number

  /**
   * 抽屉的高度,placement设置为top或者bottom生效
   * @default '300px'
   */
  height?: string | number

  /**
   * 抽屉的层级
   * @default 100
   */
  zIndex?: number

  /**
   * 抽屉弹出的位置
   * @default 'right'
   */
  placement?: IPlacementType

  /**
   * header样式
   */
  headerStyle?: React.CSSProperties

  /**
   * body样式
   */
  bodyStyle?: React.CSSProperties

  /**
   * 关闭抽屉的回调
   * @default () => {}
   */
  onClose?: () => void,

  children?: React.ReactNode
}
