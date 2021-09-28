import React from "react"

export interface ICarouselDotsProps {
  /**
   * item数量
   */
  count: number

  /**
   * 当前激活的index
   */
  nowLocal: number

  /**
   * 切换的回调函数
   */
  turn: (index: number) => void
}
