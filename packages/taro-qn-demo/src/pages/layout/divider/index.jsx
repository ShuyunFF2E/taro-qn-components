import React from 'react';
import { View, Text } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import { CDivider, CButton } from 'taro-qn-components';

const DividerDemo = () => {
  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
        <CDivider />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
        <CDivider dashed>虚线分割</CDivider>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </View>
      <View className="h1">文字分割展示</View>
      <View className="box">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
        <CDivider>文字</CDivider>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
        <CDivider orientation="left">文字 left</CDivider>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
        <CDivider orientation="right">文字 right</CDivider>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </View>
      <View className="h1">竖线分割</View>
      <View className="box">
        <CButton type="link">选项一</CButton>
        <CDivider type="vertical" />
        <CButton type="link">选项二</CButton>
        <CDivider type="vertical" />
        <CButton type="text">选项三</CButton>
      </View>
    </View>
  );
};

export default NavBar()(DividerDemo);
