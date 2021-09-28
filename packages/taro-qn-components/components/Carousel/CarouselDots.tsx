import React, { ReactElement } from 'react'
import cn from 'classnames'
import { View, Text } from '@tarojs/components'

import { ICarouselDotsProps } from './types/carouselDots'

export default function CarouselDots (props: ICarouselDotsProps): ReactElement {
  const { count, nowLocal, turn } = props

  const handleDotClick = (i): void => {
    turn(i - nowLocal)
  }

  let dotNodes: ReactElement[] = []
  for(let i = 0; i < count; i++) {
    dotNodes[i] = (
      <Text
        key={`dot-${i}`}
        className={cn('carousel-dot', { 'carousel-dot-selected': i === nowLocal })}
        onClick={() => handleDotClick(i)}>
      </Text>
    );
  }
  return (
    <View className="carousel-dots-wrap">
      {dotNodes}
    </View>
  )
}
