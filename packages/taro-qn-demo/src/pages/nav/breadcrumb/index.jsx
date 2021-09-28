import React from 'react';
import { View } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import { CBreadcrumb } from 'taro-qn-components';

const BreadcrumbDemo = () => {
  const breads = [
    { title: '首页', href: '/pages/index/index' },
    { title: '菜单', href: '/pages/index/index' },
    { title: '面包屑' },
  ];
  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <CBreadcrumb breads={breads} />
      </View>
      <View className="h1">Item 展示</View>
      <View className="box">
        <CBreadcrumb>
          <CBreadcrumb.Item title="首页" href="/pages/index/index" />
          <CBreadcrumb.Item title="菜单" />
          <CBreadcrumb.Item title="导航" />
        </CBreadcrumb>
      </View>
    </View>
  );
};

export default NavBar()(BreadcrumbDemo);
