import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import { CInputNumber } from 'taro-qn-components';

const InputNumberDemo = () => {
  const [value, setValue] = useState(0);
  const onChange = (value) => {
    setValue(value);
  };

  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <CInputNumber value={value} onChange={onChange} />
      </View>
      <View className="h1">小数用法</View>
      <View className="box">
        <CInputNumber
          min={0}
          max={10}
          step={0.1}
          value={value}
          onChange={onChange}
        />
      </View>
      <View className="h1">禁止状态</View>
      <View className="box">
        <CInputNumber
          disabled
          min={0}
          max={10}
          step={1}
          value={value}
          onChange={onChange}
        />
      </View>
      <View className="h1">禁止输入状态</View>
      <View className="box">
        <CInputNumber
          disabledInput
          min={0}
          max={10}
          step={1}
          value={value}
          onChange={onChange}
        />
      </View>
    </View>
  );
};

export default NavBar()(InputNumberDemo);
