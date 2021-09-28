import React from "react"

export interface ICarouselState {
  nowLocal: number
}

export interface ICarouselItem {
  /**
   * 图片地址
   */
  src: string
}

export interface ICarouselProps {
  /**
   * 高度
   * @default 300
   */
  height?: number | string

  /**
   * 动画过渡的时间
   * @default 1.5
   */
  speed?: number

  /**
   * 动画停留的时间
   * @default 4
   */
  delay?: number

  /**
   * 是否自动播放
   * @default true
   */
  autoplay?: boolean

  /**
   * 是否显示下方小圆点
   * @default true
   */
  dots?: boolean

  /**
   * 是否显示左右箭头
   * @default true
   */
  arrows?: boolean

  /**
   * 图片数组
   * @default []
   */
  items: ICarouselItem[]
}
