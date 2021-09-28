import React from "react"

import { ICarouselItem } from './carousel'

export interface ICarouselItemProps {
  /**
   * 图片数量
   */
  count: number

  item: ICarouselItem
}
