import React from 'react';
import { View } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import { CButton } from 'taro-qn-components';

const ButtonDemo = () => {
  return (
    <View className="container">
      <View className="h1"> 基本用法 </View>
      <View className="box">
        <CButton className="btn-space"> 默认按钮 </CButton>
        <CButton className="btn-space" type="primary">
          主按钮
        </CButton>
        <CButton className="btn-space" type="dashed">
          虚线按钮
        </CButton>
        <CButton className="btn-space" type="text">
          文本按钮
        </CButton>
        <CButton className="btn-space" type="link">
          链接按钮
        </CButton>
      </View>
      <View className="h1"> 图标按钮 </View>
      <View className="box">
        <CButton className="btn-space" icon="search">
          搜索默认按钮
        </CButton>
        <CButton className="btn-space" type="primary" icon="search">
          搜索主按钮
        </CButton>
        <CButton className="btn-space" type="dashed" icon="search">
          搜索虚线按钮
        </CButton>
      </View>
      <View className="h1"> 按钮尺寸 </View>
      <View className="box">
        <CButton className="btn-space" size="large">
          large 按钮
        </CButton>
        <CButton className="btn-space" type="primary">
          默认大小
        </CButton>
        <CButton className="btn-space" type="dashed" size="small">
          small 按钮
        </CButton>
      </View>
      <View className="h1"> 带 loading 按钮 </View>
      <View className="box">
        <CButton className="btn-space" loading type="primary">
          loading 按钮
        </CButton>
      </View>
      <View className="h1"> 不可用状态 </View>
      <View className="box">
        <CButton className="btn-space" type="primary" disabled>
          Primary(disabled)
        </CButton>
        <CButton className="btn-space" disabled>
          Default(disabled)
        </CButton>
        <CButton className="btn-space" type="dashed" disabled>
          Dashed(disabled)
        </CButton>
        <CButton className="btn-space" type="text" disabled>
          Text(disabled)
        </CButton>
        <CButton className="btn-space" type="link" disabled>
          Link(disabled)
        </CButton>
        <CButton className="btn-space" danger disabled>
          Danger Default(disabled)
        </CButton>
        <CButton className="btn-space" danger type="text" disabled>
          Danger Text(disabled)
        </CButton>
        <CButton className="btn-space" type="link" danger disabled>
          Danger Link(disabled)
        </CButton>
      </View>
      <View className="h1"> Block 按钮 </View>
      <View className="box">
        <CButton className="btn-space" type="primary" block>
          Primary
        </CButton>
        <CButton className="btn-space" block>
          Default
        </CButton>
        <CButton className="btn-space" type="dashed" block>
          Dashed
        </CButton>
        <CButton className="btn-space" type="link" block>
          Link
        </CButton>
      </View>
      <View className="h1"> 危险按钮 </View>
      <View className="box">
        <CButton className="btn-space" type="primary" danger>
          Primary
        </CButton>
        <CButton className="btn-space" danger>
          Default
        </CButton>
        <CButton className="btn-space" type="dashed" danger>
          Dashed
        </CButton>
        <CButton className="btn-space" type="text" danger>
          Text
        </CButton>
        <CButton className="btn-space" type="link" danger>
          Link
        </CButton>
      </View>
    </View>
  );
};

export default NavBar()(ButtonDemo);
