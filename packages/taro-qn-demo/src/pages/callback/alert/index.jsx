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
        <CAlert message="样式用法 info" type="info" />
      </View>
      <View className="box">
        <CAlert message="样式用法 warning" type="warning" />
      </View>
      <View className="box">
        <CAlert message="样式用法 error" type="error" />
      </View>
      <View className="h1">图标用法</View>
      <View className="box">
        <CAlert message="图标用法" type="success" showIcon />
      </View>
      <View className="box">
        <CAlert message="图标用法" type="info" showIcon />
      </View>
      <View className="box">
        <CAlert message="图标用法" type="warning" showIcon />
      </View>
      <View className="box">
        <CAlert message="图标用法" type="error" showIcon />
      </View>
      <View className="h1">复杂图标用法</View>
      <View className="box">
        <CAlert message="图标用法" title="测试标题" type="success" showIcon />
      </View>
      <View className="box">
        <CAlert
          message={['1、图标用法', '2、图标用法段落2', '3、图标用法段落2']}
          title="测试标题"
          type="info"
          showIcon
        />
      </View>
      <View className="box">
        <CAlert
          message={['1、图标用法', '2、图标用法段落2', '3、图标用法段落2']}
          title="测试标题"
          type="warning"
          showIcon
        />
      </View>
      <View className="box">
        <CAlert
          message={[
            '1、自定义文本段落样式',
            '2、自定义文本段落样式2',
            '3、自定义文本段落样式3',
          ]}
          titleStyle={{ color: '#000' }}
          messageStyle={{ textDecoration: 'underline' }}
          title="自定义标题样式"
          type="error"
          showIcon
        />
      </View>
    </View>
  );
};

export default NavBar()(AlertDemo);
