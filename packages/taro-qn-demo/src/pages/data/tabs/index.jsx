import React, { useState } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { NavBar } from '@/common/navbar';
import { CTabs } from 'taro-qn-components';

const TabDemo = () => {
  const [current, setCurrent] = useState(1);
  const changeTab = (e) => {
    setCurrent(e);
  };
  return (
    <View className="container" style={{ background: '#fefefe' }}>
      <View className="h1">基本展示</View>
      <View className="box" style={{ padding: '20px' }}>
        <CTabs activeId={current} onChange={changeTab}>
          <CTabs.Item tab="Home" tabId="1">
            <View>Home Content</View>
          </CTabs.Item>
          <CTabs.Item tab="Documentation" tabId="2">
            <View>doc content</View>
          </CTabs.Item>
          <CTabs.Item tab="Help" tabId="3">
            <View>help content</View>
          </CTabs.Item>
        </CTabs>
      </View>
      <View className="h1">卡片类型</View>
      <View className="box" style={{ padding: '20px' }}>
        <CTabs activeId={current} onChange={changeTab} type="card">
          <CTabs.Item tab="Home" tabId="1">
            <View>Home Content</View>
          </CTabs.Item>
          <CTabs.Item tab="Documentation" tabId="2">
            <View>doc content</View>
          </CTabs.Item>
          <CTabs.Item tab="Help" tabId="3">
            <View>help content</View>
          </CTabs.Item>
        </CTabs>
      </View>
      <View className="h1">禁用tab</View>
      <View className="box" style={{ padding: '20px' }}>
        <CTabs activeId={current} onChange={changeTab}>
          <CTabs.Item tab="Home" tabId="1" disabled>
            <View>Home Content</View>
          </CTabs.Item>
          <CTabs.Item tab="Documentation" tabId="2">
            <View>doc content</View>
          </CTabs.Item>
          <CTabs.Item tab="Help" tabId="3">
            <View>help content</View>
          </CTabs.Item>
        </CTabs>
      </View>
      <View className="box" style={{ padding: '20px' }}>
        <CTabs activeId={current} onChange={changeTab} type="card">
          <CTabs.Item tab="Home" tabId="1" disabled>
            <View>Home Content</View>
          </CTabs.Item>
          <CTabs.Item tab="Documentation" tabId="2">
            <View>doc content</View>
          </CTabs.Item>
          <CTabs.Item tab="Help" tabId="3">
            <View>help content</View>
          </CTabs.Item>
        </CTabs>
      </View>
    </View>
  );
};

export default NavBar()(TabDemo);
