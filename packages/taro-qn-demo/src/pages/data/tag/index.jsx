import React from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { NavBar } from '@/common/navbar/index';
import { CTag } from 'taro-qn-components';

const TagDemo = () => {
  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <CTag>基本展示</CTag>
      </View>
      <View className="h1">彩色标签</View>
      <View className="box">
        <CTag color="#F50">#F50</CTag>
        <CTag color="#2976ea">#2976ea</CTag>
        <CTag color="#87d068">#87d068</CTag>
        <CTag color="magenta">magenta</CTag>
        <CTag color="gold">gold</CTag>
        <CTag color="purple">purple</CTag>
      </View>
      <View className="h1">填充标签</View>
      <View className="box">
        <CTag solid>填充标签</CTag>
        <CTag solid color="#2976ea">
          色彩填充标签
        </CTag>
        <CTag solid color="magenta">
          magenta 色彩填充标签
        </CTag>
      </View>
      <View className="h1">圆角标签</View>
      <View className="box">
        <CTag circle>圆角标签</CTag>
        <CTag solid circle>
          圆角色彩填充标签
        </CTag>
        <CTag solid color="#2976ea" circle>
          magenta 圆角色彩填充标签
        </CTag>
        <CTag solid color="magenta" circle>
          magenta 色彩填充标签
        </CTag>
      </View>
      <View className="h1">禁用标签</View>
      <View className="box">
        <CTag circle disabled>
          禁用标签
        </CTag>
        <CTag solid disabled>
          禁用圆角色彩填充标签
        </CTag>
        <CTag solid color="#2976ea" circle disabled>
          magenta 禁用圆角色彩填充标签
        </CTag>
        <CTag solid color="magenta" circle disabled>
          magenta 禁用色彩填充标签
        </CTag>
      </View>
    </View>
  );
};

export default NavBar()(TagDemo);
