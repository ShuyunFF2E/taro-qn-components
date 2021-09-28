import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import { CTextarea } from 'taro-qn-components';

const TextareaDemo = () => {
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const onChange = (value) => {
    setValue(value);
  };
  const onChange1 = (value) => {
    setValue1(value);
  };

  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <CTextarea value={value} placeholder="基本展示" onChange={onChange} />
      </View>
      <View className="h1">计数展示</View>
      <View className="box">
        <CTextarea
          placeholder="计数用法"
          maxlength={100}
          count
          onChange={onChange1}
          value={value1}
        />
      </View>
      <View className="h1">禁止展示</View>
      <View className="box">
        <CTextarea disabled maxlength={100} value="我被禁用了～" count />
      </View>
    </View>
  );
};

export default NavBar()(TextareaDemo);
