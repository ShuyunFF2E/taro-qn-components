import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import { CSelect } from 'taro-qn-components';

const selectDs = [
  {
    key: 'sx',
    value: '陕西',
  },
  {
    key: 'sd',
    value: '山东',
    disabled: true,
  },
  {
    key: 'bj',
    value: '北京',
  },
  {
    key: 'hn',
    value: '河南',
  },
  {
    key: 'gz',
    value: '贵州',
  },
];

const SelectDemo = () => {
  const [value, setValue] = useState();
  const onSelectChange = (item) => {
    console.log('🚀 ~ file: index.jsx ~ line 10 ~ onSelectChange ~ item', item);
    setValue(item);
  };

  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <CSelect
          options={selectDs}
          onChange={onSelectChange}
          defaultValue={selectDs[0].value}
        />
      </View>
      <View className="h1">禁用状态</View>
      <View className="box">
        <CSelect options={selectDs} onChange={onSelectChange} disabled />
      </View>
      <View className="h1">清除功能</View>
      <View className="box">
        <CSelect options={selectDs} onChange={onSelectChange} allowClear />
      </View>
      <View className="h1">默认选中值</View>
      <View className="box">
        <CSelect
          options={selectDs}
          onChange={onSelectChange}
          defaultValue={selectDs[1].key}
        />
      </View>
      <View className="h1">搜索模式</View>
      <View className="box">
        <CSelect options={selectDs} onChange={onSelectChange} showSearch />
      </View>
      <View className="h1">大小设置</View>
      <View className="box">
        <View style={{ margin: '20px 0' }}>
          <CSelect options={selectDs} showSearch size="large" />
        </View>
        <View style={{ margin: '20px 0' }}>
          <CSelect options={selectDs} showSearch size="small" />
        </View>
        <View style={{ margin: '20px 0' }}>
          <CSelect options={selectDs} showSearch size="default" />
        </View>
        <View style={{ margin: '20px 0' }}>
          <CSelect options={selectDs} size="large" />
        </View>
        <View style={{ margin: '20px 0' }}>
          <CSelect options={selectDs} size="small" />
        </View>
        <View style={{ margin: '20px 0' }}>
          <CSelect options={selectDs} size="default" />
        </View>
      </View>
    </View>
  );
};

export default NavBar()(SelectDemo);
