import React from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { CDatePicker } from 'taro-qn-components';
import { NavBar } from '@/common/navbar/index';

const DatePickerDemo = () => {
  return (
    <View className="container">
      <View style={{ marginBottom: 30 + 'px' }}>
        <CDatePicker />
      </View>
      <View style={{ marginBottom: 30 + 'px' }}>
        <CDatePicker type="YearPicker" />
      </View>
      <View style={{ marginBottom: 30 + 'px' }}>
        <CDatePicker type="MonthPicker" />
      </View>
      <View style={{ marginBottom: 30 + 'px' }}>
        <CDatePicker type="RangePicker" />
      </View>
    </View>
  );
};

export default NavBar()(DatePickerDemo);
