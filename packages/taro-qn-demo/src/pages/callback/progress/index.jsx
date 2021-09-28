import React, { useState } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { NavBar } from '@/common/navbar/index';
import { CProgress, CButton } from 'taro-qn-components';

const ProgressDemo = () => {
  const [percent, setPercent] = useState(10);
  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <View style={{ marginBottom: '20px' }}>
          <CProgress percent={30} />
        </View>
        <View style={{ marginBottom: '20px' }}>
          <CProgress percent={50} />
        </View>
        <View style={{ marginBottom: '20px' }}>
          <CProgress percent={80} />
        </View>
      </View>
      <View className="h1">隐藏信息</View>
      <View className="box">
        <View style={{ marginBottom: '20px' }}>
          <CProgress percent={30} showInfo={false} />
        </View>
        <View style={{ marginBottom: '20px' }}>
          <CProgress percent={50} showInfo={false} />
        </View>
      </View>
      <View className="h1">自定义宽度</View>
      <View className="box">
        <View style={{ marginBottom: '20px' }}>
          <CProgress percent={30} strokeWidth={4} />
        </View>
        <View style={{ marginBottom: '20px' }}>
          <CProgress percent={50} strokeWidth={20} />
        </View>
      </View>
      <View className="h1">自定义颜色</View>
      <View className="box">
        <View style={{ marginBottom: '20px' }}>
          <CProgress percent={30} color="pink" />
        </View>
        <View style={{ marginBottom: '20px' }}>
          <CProgress percent={50} color="#287" />
        </View>
      </View>
      <View className="h1">状态显示</View>
      <View className="box">
        <View style={{ marginBottom: '20px' }}>
          <CProgress percent={30} status="progress" />
        </View>
        <View style={{ marginBottom: '20px' }}>
          <CProgress percent={50} status="error" />
        </View>
        <View style={{ marginBottom: '20px' }}>
          <CProgress percent={100} status="success" />
        </View>
      </View>
      <View className="h1">案例</View>
      <View className="box">
        <View style={{ marginBottom: '20px' }}>
          <CProgress percent={percent} />
        </View>
        <CButton
          type="primary"
          style={{ marginRight: '10px' }}
          onClick={() => setPercent(percent + 10)}
        >
          增加
        </CButton>
        <CButton onClick={() => setPercent(percent - 10)}>减少</CButton>
      </View>
    </View>
  );
};

export default NavBar()(ProgressDemo);
