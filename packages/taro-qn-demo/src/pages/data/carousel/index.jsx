import React from 'react';
import { NavBar } from '@/common/navbar/index';
import { View } from '@tarojs/components';
import { CCarousel } from 'taro-qn-components';

const imgs = [
  {
    src: 'https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png',
  },
  {
    src: 'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg',
  },
  {
    src: 'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg',
  },
  {
    src: 'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg',
  },
];

const CarouselDemo = () => {
  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <CCarousel items={imgs} />
      </View>
      <View className="h1">设置高度</View>
      <View className="box">
        <CCarousel items={imgs} height={200} />
      </View>
      <View className="h1">参数配置</View>
      <View className="box">
        <View className="btn-space">1. 不显示下方圆点</View>
        <CCarousel items={imgs} dots={false} />
        <View className="btn-space">2. 不显示左右箭头</View>
        <CCarousel items={imgs} arrows={false} />
        <View className="btn-space">3. 停止自动播放</View>
        <CCarousel items={imgs} autoplay={false} />
      </View>
    </View>
  );
};

export default NavBar()(CarouselDemo);
