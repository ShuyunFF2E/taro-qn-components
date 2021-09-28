import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import { CSwitch, CButton } from 'taro-qn-components';

const SwitchDemo = () => {
  const [value, setValue] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const onChange = (value) => {
    setValue(value);
  };
  const [value1, setValue1] = useState(false);
  const onChange1 = (value) => {
    setValue1(value);
  };

  const onChangeDisabled = (value) => {
    setDisabled(value);
  };

  return (
    <View className="container">
      <View className="h1">基本用法</View>
      <View className="box">
        <CSwitch checked={value} onChange={onChange} />
      </View>
      <View className="h1">禁止用法</View>
      <View className="box">
        <View className="btn-space">
          <CSwitch checked={value1} onChange={onChange1} disabled={disabled} />
        </View>

        <View className="btn-space">
          <CButton type="primary" onClick={() => onChangeDisabled(!disabled)}>
            切换switch
          </CButton>
        </View>
      </View>
      <View className="h1">size用法</View>
      <View className="box">
        <View className="btn-space">
          <View className="btn-space">
            <CSwitch checked={value} onChange={onChange} size="small" />
          </View>
          <View className="btn-space">小</View>
        </View>
        <View className="btn-space">
          <View className="btn-space">
            <CSwitch checked={value} onChange={onChange} size="default" />
          </View>
          <View className="btn-space">默认大小</View>
        </View>
      </View>
      <View className="h1">颜色修改</View>
      <View
        className="box"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <View className="btn-space">
          <CSwitch checked={value} onChange={onChange} color="#f50" />
          <View className="btn-space">#f50</View>
        </View>
        <View className="btn-space">
          <CSwitch checked={value} onChange={onChange} color="#2976ea" />
          <View className="btn-space">#2976ea</View>
        </View>
        <View className="btn-space">
          <CSwitch checked={value} onChange={onChange} color="magenta" />
          <View className="btn-space">magenta</View>
        </View>
        <View className="btn-space">
          <CSwitch checked={value} onChange={onChange} color="#87d068" />
          <View className="btn-space">#87d068</View>
        </View>
        <View className="btn-space">
          <CSwitch checked={value} onChange={onChange} color="purple" />
          <View className="btn-space">purple</View>
        </View>
      </View>
    </View>
  );
};

export default NavBar()(SwitchDemo);
