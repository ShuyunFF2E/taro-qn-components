import React, { ReactElement } from 'react';
import { View, Text } from '@tarojs/components';
import CIcon from '../Icon';
import { ICarouselArrowProps } from './types/carouselArrow';

export default function CarouselArrow(
  props: ICarouselArrowProps,
): ReactElement {
  const { turn } = props;

  const handleArrowClick = (i): void => {
    turn(i);
  };

  return (
    <React.Fragment>
      <View className="carousel-arrow-left">
        <Text className="carousel-arrow" onClick={() => handleArrowClick(-1)}>
          <CIcon type="arrow_left" className="carousel-arrow-icon" />
        </Text>
      </View>
      <View className="carousel-arrow-right">
        <Text className="carousel-arrow" onClick={() => handleArrowClick(1)}>
          <CIcon type="arrow_right" className="carousel-arrow-icon" />
        </Text>
      </View>
    </React.Fragment>
  );
}
