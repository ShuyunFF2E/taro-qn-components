import React from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { NavBar } from '@/common/navbar/index';
import { CAlert } from 'taro-qn-components';

const AlertDemo = () => {
  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <CAlert message="基本展示" />
      </View>
      <View className="h1">样式用法</View>
      <View className="box">
        <CAlert message="样式用法 success" type="success" />
      </View>
      <View className="box">
        <CAlert message="样式用法 warning" type="warning" />
      </View>
      <View className="box">
        <CAlert message="样式用法 info" type="info" />
      </View>
      <View className="h1">图标用法</View>
      <View className="box">
        <CAlert message="图标用法" showIcon />
      </View>
    </View>
  );
};

export default NavBar()(AlertDemo);
