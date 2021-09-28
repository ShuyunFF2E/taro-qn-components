---
title: Steps 步骤条
nav:
  title: Steps 步骤条
  path: /components
group:
  title: 导航
  path: /nav
---

# Steps 步骤条

---

引导用户按照流程完成任务的导航条。

## 何时使用

当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## 使用指南

```js
import { CSteps } from 'taro-qn-components';
```

## 基本用法

说明:

- 该组件为受控组件，开发者需要通过 onChange 事件来更新 current 值变化，current 与 onChange 函数必填

```jsx | pure
import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import { CSteps, CButton } from 'taro-qn-components';

const StepsDemo = () => {
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
    </View>
  );
};

export default NavBar()(StepsDemo);
```

## 类型展示

```jsx | pure
<CSteps current={0} type="dot">
  <CSteps.Item title="第一步" desc="分享邀请码给好友" />
  <CSteps.Item title="第二步" desc="订购时输入你的邀请码" />
  <CSteps.Item title="第三步" desc="获取数云积分" />
</CSteps>
```

## 步骤切换

```jsx | pure
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
```

## 方向展示

```jsx | pure
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
```

## 步骤运行状态

```jsx | pure
<CSteps current={current} onChange={changeSteps}>
  <CSteps.Item title="wait" status="wait" />
  <CSteps.Item title="process" status="process" />
  <CSteps.Item title="finish" status="finish" />
</CSteps>
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/nav/steps/index"></iframe>

## Steps 参数

| 参数      | 说明                                                                                 | 类型   | 可选值                           | 默认值     |
| --------- | ------------------------------------------------------------------------------------ | ------ | -------------------------------- | ---------- |
| current   | 必填，当前步骤索引值，开发者需要通过 onChange 事件来更新 current 值                  | Number | -                                | 0          |
| direction | 指定步骤条方向。目前支持水平（horizontal）、内联（inline）和竖直（vertical）两种方向 | String | horizontal \| vertical \| inline | horizontal |
| type      | 步骤条类型，有 circle 和 dot 两种                                                    | String | circle \| dot                    | circle     |
| className | 自定义样式名，提供给外部覆盖样式用                                                   | String | -                                | -          |

## Steps 事件

| 事件名称 | 说明                                                                        | 返回参数           |
| -------- | --------------------------------------------------------------------------- | ------------------ |
| onChange | 点击触发事件，开发者需要通过 onChange 事件来更新 current，onChange 函数必填 | current,步骤索引值 |

## Steps.Item

| 参数      | 说明                                 | 类型   | 可选值                    | 默认值 |
| --------- | ------------------------------------ | ------ | ------------------------- | ------ |
| title     | 步骤标题                             | String | -                         | -      |
| desc      | 步骤说明文字                         | String | -                         | -      |
| status    | 步骤的状态，允许 wait process finish | String | wait \| process \| finish | -      |
| className | 自定义样式名，提供给外部覆盖样式用   | String | -                         | -      |
