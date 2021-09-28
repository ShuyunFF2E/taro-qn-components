import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import { CSteps, CButton } from 'taro-qn-components';

const StepsDemo = () => {
  const [current, setCurrent] = useState(0);
  const changeSteps = (e) => {
    setCurrent(e);
  };
  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <CSteps current={1}>
          <CSteps.Item title="第一步" desc="分享邀请码给好友" />
          <CSteps.Item title="第二步" desc="订购时输入你的邀请码" />
          <CSteps.Item title="第三步" desc="获取数云积分" />
        </CSteps>
      </View>
      <View className="h1">类型展示</View>
      <View className="box">
        <CSteps current={0} type="dot">
          <CSteps.Item title="第一步" desc="分享邀请码给好友" />
          <CSteps.Item title="第二步" desc="订购时输入你的邀请码" />
          <CSteps.Item title="第三步" desc="获取数云积分" />
        </CSteps>
      </View>
      <View className="h1">步骤切换</View>
      <View className="box">
        <CSteps current={current} direction="inline">
          <CSteps.Item title="互动选择" />
          <CSteps.Item title="皮肤规则" />
          <CSteps.Item title="活动设置" />
          <CSteps.Item title="完成设置" />
        </CSteps>
        <View className="content">
          {['互动选择', '皮肤规则', '活动设置', '完成设置'][current]} 文本
        </View>
        <View className="btn-space" style={{ display: 'inline-block' }}>
          <CButton type="primary" onClick={() => setCurrent(current + 1)}>
            下一步
          </CButton>
        </View>
        {current > 0 && (
          <View className="btn-space" style={{ display: 'inline-block' }}>
            <CButton onClick={() => setCurrent(current - 1)}>上一步</CButton>
          </View>
        )}
      </View>
      <View className="h1">方向展示</View>
      <View className="box" style={{ display: 'flex' }}>
        <View style={{ width: '200px', marginRight: '10px' }}>
          <CSteps current={current} onChange={changeSteps} direction="vertical">
            <CSteps.Item title="互动选择" desc="描述信息展示内容" />
            <CSteps.Item title="皮肤规则" />
            <CSteps.Item title="活动设置" />
            <CSteps.Item title="完成设置" />
          </CSteps>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'space-around',
          }}
        >
          <CSteps current={current} onChange={changeSteps} direction="inline">
            <CSteps.Item title="互动选择" desc="描述信息展示内容" />
            <CSteps.Item title="皮肤规则" />
            <CSteps.Item title="活动设置" />
            <CSteps.Item title="完成设置" />
          </CSteps>
          <CSteps current={current} onChange={changeSteps}>
            <CSteps.Item title="互动选择" desc="描述信息展示内容" />
            <CSteps.Item title="皮肤规则" />
            <CSteps.Item title="活动设置" />
            <CSteps.Item title="完成设置" />
          </CSteps>
        </View>
      </View>
      <View className="h1">步骤运行状态</View>
      <View className="box">
        <CSteps current={current} onChange={changeSteps}>
          <CSteps.Item title="wait" status="wait" />
          <CSteps.Item title="process" status="process" />
          <CSteps.Item title="finish" status="finish" />
        </CSteps>
      </View>
    </View>
  );
};

export default NavBar()(StepsDemo);
