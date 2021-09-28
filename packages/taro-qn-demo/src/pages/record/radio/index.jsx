import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import { CRadio } from 'taro-qn-components';

@NavBar()
export default class RadioDemo extends React.Component {
  state = {
    radioGroupValue: 'noon',
    list: [
      {
        value: 'morning',
        label: '上午',
      },
      {
        value: 'noon',
        label: '中午',
      },
      {
        value: 'afternoon',
        label: '下午',
      },
    ],
  };

  onRadioChange = (v) => {
    this.setState({
      radioGroupValue: v,
    });
  };

  render() {
    const options = [
      {
        value: 'morning',
        label: '上午',
      },
      {
        value: 'noon',
        label: '中午',
      },
      {
        value: 'afternoon',
        label: '下午',
      },
      {
        value: 'ws',
        label: '晚上',
        disabled: true,
      },
    ];
    const { radioGroupValue, list } = this.state;
    return (
      <View className="container">
        <View className="h1">基本展示</View>
        <View className="box">
          <CRadio>Radio</CRadio>
          <CRadio checked>Radio Checked</CRadio>
        </View>
        <View className="h1">禁止用法</View>
        <View className="box">
          <CRadio disabled>Radio disabled</CRadio>
        </View>
        <View className="h1">组合用法</View>
        <View className="box">
          <CRadio.Group onChange={this.onRadioChange} value={radioGroupValue}>
            {list.map((item, i) => (
              <CRadio key={i} value={item.value}>
                {item.label}
              </CRadio>
            ))}
          </CRadio.Group>
        </View>
        <View className="h1">组合用法 options</View>
        <View className="box">
          <CRadio.Group
            onChange={this.onRadioChange}
            value={radioGroupValue}
            options={options}
          />
        </View>
        <View className="h1">组合用法 options 垂直布局</View>
        <View className="box">
          <CRadio.Group
            layout="vertical"
            onChange={this.onRadioChange}
            value={radioGroupValue}
            options={options}
          />
        </View>
      </View>
    );
  }
}
