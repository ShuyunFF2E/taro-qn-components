import React from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { NavBar } from '@/common/navbar/index';
import { CLoading } from 'taro-qn-components';

const LoadingDemo = () => {
  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <CLoading loading />
      </View>
      <View className="h1">自定义内容</View>
      <View className="box">
        <CLoading loading tip="加载中..." />
      </View>
      <View className="h1">内容包裹</View>
      <View className="box">
        <CLoading loading tip="加载中..." layer layerColor={'rgba(0,0,0,0.2)'}>
          <View
            style={{ fontSize: '14px', lineHeight: '20px', padding: '20px' }}
          >
            北国风光，千里冰封，万里雪飘。
            望长城内外，惟余莽莽；大河上下，顿失滔滔。
            山舞银蛇，原驰蜡象，欲与天公试比高。 须晴日，看红装素裹，分外妖娆。
            江山如此多娇，引无数英雄竞折腰。
            惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。
            一代天骄，成吉思汗，只识弯弓射大雕。 俱往矣，数风流人物，还看今朝。
          </View>
        </CLoading>
      </View>
    </View>
  );
};

export default NavBar()(LoadingDemo);
