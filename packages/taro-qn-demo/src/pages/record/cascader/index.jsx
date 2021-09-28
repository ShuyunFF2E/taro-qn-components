import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import { CCascader } from 'taro-qn-components';

const data = [
  {
    key: 'wh',
    value: '武汉',
    children: [
      {
        key: 'nj',
        value: '南京',
        children: [
          {
            key: 'njq',
            value: '南京去',
          },
        ],
      },
      {
        key: 'bt',
        value: '包头',
        children: [
          {
            key: 'bts',
            value: '包头市',
          },
        ],
      },
    ],
  },
  {
    key: 'zj',
    value: '浙江',
    children: [
      {
        key: 'hz',
        value: '杭州',
        children: [
          {
            key: 'xh',
            value: '西湖',
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    key: 'sx',
    value: '陕西',
    children: [
      {
        key: 'xa',
        value: '西安',
        disabled: true,
        children: [
          {
            key: 'lh',
            value: '莲湖',
          },
        ],
      },
    ],
  },
  {
    key: 'gd',
    value: '广东',
    disabled: true,
    children: [
      {
        key: 'sz',
        value: '深圳',
        children: [
          {
            key: 'dq',
            value: '到期',
          },
        ],
      },
    ],
  },
  {
    key: 'bj',
    value: '北京',
  },
];

const CascaderDemo = () => {
  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <CCascader options={data} />
      </View>
      <View className="h1">禁用展示</View>
      <View className="box">
        <CCascader options={data} disabled />
      </View>
      <View className="h1">默认全量数据</View>
      <View className="box">
        <CCascader options={data} defaultValue={['wh', 'nj', 'njq']} />
      </View>
      <View className="h1">默认部分数据</View>
      <View className="box">
        <View className="btn-space">
          <CCascader options={data} defaultValue={['wh', 'nj', '123']} />
        </View>
        <View className="btn-space">
          <CCascader options={data} defaultValue={['wh', 'nj']} />
        </View>
        <View className="btn-space">
          <CCascader options={data} defaultValue={['wh']} />
        </View>
      </View>
      <View className="h1">搜索展示</View>
      <View className="box">
        <CCascader
          options={data}
          defaultValue={['sx', 'xa', 'lh']}
          showSearch
        />
      </View>
      <View className="h1">大小设置</View>
      <View className="box">
        <View style={{ margin: '20px 0' }}>
          <CCascader options={data} size="large" />
        </View>
        <View style={{ margin: '20px 0' }}>
          <CCascader options={data} size="small" />
        </View>
        <View style={{ margin: '20px 0' }}>
          <CCascader options={data} size="default" />
        </View>
      </View>
    </View>
  );
};

export default NavBar()(CascaderDemo);
