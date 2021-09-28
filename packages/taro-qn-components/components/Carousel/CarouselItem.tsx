import React, { ReactElement } from 'react';
import { View, Image } from '@tarojs/components'

import { ICarouselItemProps } from './types/carouselItem'

export default function CarouselItem (props: ICarouselItemProps): ReactElement {
  const { count, item } = props
  const width: string = 100 / count + '%'
  return (
    <View className="carousel-item" style={{ width }}>
      <Image className="img" src={item.src} />
    </View>
  )
}
