import React from 'react';
import { NavBar } from '@/common/navbar/index';
import { View } from '@tarojs/components';
import { CBadge, CButton } from 'taro-qn-components';

const CBadgeDemo = () => {
  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <CBadge value={10} maxValue={99}>
          <CButton type="primary">按钮</CButton>
        </CBadge>
      </View>
      <View className="h1">小红点</View>
      <CBadge dot>
        <CButton type="primary">按钮</CButton>
      </CBadge>
      <View className="h1">文本</View>
      <CBadge value="NEW">
        <CButton type="primary">按钮</CButton>
      </CBadge>
    </View>
  );
};

export default NavBar()(CBadgeDemo);
