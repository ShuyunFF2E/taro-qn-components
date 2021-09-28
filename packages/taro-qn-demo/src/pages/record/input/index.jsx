import React, { useState } from 'react';
import { View, Input } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import { CInput } from 'taro-qn-components';

const InputDemo = () => {
  const [value, setValue] = useState('');
  const onChange = (value) => {
    setValue(value);
  };
  const [value1, setValue1] = useState('');
  const onChange1 = (value) => {
    setValue1(value);
  };
  const [value2, setValue2] = useState('');
  const onChange2 = (value) => {
    setValue2(value);
  };
  const [value3, setValue3] = useState('');
  const onChange3 = (value) => {
    setValue3(value);
  };

  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <CInput placeholder="搜索" value={value} onChange={onChange} />
      </View>
      <View className="h1">大小展示</View>
      <View className="box">
        <CInput mode="large" placeholder="大尺寸" />
      </View>
      <View className="h1">清除展示</View>
      <View className="box">
        <CInput clear placeholder="清除" value={value1} onChange={onChange1} />
      </View>
      <View className="h1">计数展示</View>
      <View className="box">
        <CInput
          placeholder="计数（10）"
          count
          maxlength="10"
          value={value2}
          onChange={onChange2}
        />
      </View>
      <View className="h1">后置标签用法</View>
      <View className="box">
        <CInput
          placeholder="后置标签"
          addonAfter="个"
          value={value3}
          onChange={onChange3}
        />
      </View>
      <View className="h1">自动获取焦点</View>
      <View className="box">
        <CInput isAutoFocus={true} />
      </View>
    </View>
  );
};

export default NavBar()(InputDemo);
