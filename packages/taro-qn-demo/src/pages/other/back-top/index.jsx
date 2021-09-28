import React from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { CBackTop } from 'taro-qn-components';
import { NavBar } from '@/common/navbar/index';

const BackTopDemo = () => {
  return (
    <View>
      <CBackTop />
    </View>
  );
};

export default NavBar()(BackTopDemo);
