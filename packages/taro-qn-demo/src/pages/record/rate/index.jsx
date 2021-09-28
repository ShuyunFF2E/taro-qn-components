import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import { CRate } from 'taro-qn-components';

const RateDemo = () => {
  const [stars, setStars] = useState(0);

  const changeStars = (e) => {
    setStars(e);
  };

  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <CRate onChange={changeStars} value={stars} />
      </View>
      <View className="h1">数量变化</View>
      <View className="box">
        <CRate count={10} value={2} />
      </View>
      <View className="h1">半星展示</View>
      <View className="box">
        <CRate value={3.5} allowHalf />
      </View>
      <View className="h1">间距调整</View>
      <View className="box">
        <CRate value={3} gap={10} />
      </View>
      <View className="h1">只读展示</View>
      <View className="box">
        <CRate value={2} disabled />
      </View>
    </View>
  );
};

export default NavBar()(RateDemo);
