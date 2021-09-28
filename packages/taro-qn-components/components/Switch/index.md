---
title: Switch 开关
nav:
  title: Switch 开关
  path: /components
group:
  title: 数据录入
  path: /record
---

# Switch 开关

---

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和 `checkbox` 的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 使用指南

在 Taro 文件中引入组件

```js
import { CSwitch } from 'taro-qn-components';
```

## 基本用法

说明：

- 该组件为受控组件，开发者能通过 checked 来初始化组件开关状态，切换开关时会触发 onChange 函数

```jsx | pure
import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { CSwitch } from 'taro-qn-components';

export default SwitchDemo = () => {
  const [value, setValue] = useState(false);
  const onChange = (value) => {
    setValue(value);
  };

  return (
    <View className="container">
      <View className="h1">基本用法</View>
      <View className="box">
        <CSwitch checked={value} onChange={onChange} />
      </View>
    </View>
  );
};
```

## 禁止用法

```jsx | pure
<View className="box">
  <CSwitch checked={value1} onChange={onChange1} disabled={disabled} />
  <View className="btn-space">
    <CButton type="primary" onClick={() => onChangeDisabled(!disabled)}>
      切换switch
    </CButton>
  </View>
</View>
```

## size 用法

```jsx | pure
<View className="box">
  <View className="btn-space">
    <CSwitch checked={value} onChange={onChange} size="small" />
    <View className="btn-space">小</View>
  </View>
  <View className="btn-space">
    <CSwitch checked={value} onChange={onChange} size="default" />
    <View className="btn-space">默认大小</View>
  </View>
</View>
```

## 颜色修改

```jsx | pure
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
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/record/switch/index"></iframe>

## Switch 参数

| 参数           | 说明                | 类型             | 可选值           | 默认值  |
| -------------- | ------------------- | ---------------- | ---------------- | ------- |
| checked        | 指定当前是否选中    | Boolean          | -                | false   |
| defaultChecked | 初始是否选中        | Boolean          | -                | false   |
| color          | switch 颜色底色修改 | String(css 色值) | -                | #1890ff |
| disabled       | 是否禁止点击        | Boolean          | -                | false   |
| size           | 开关大小            | String           | default \| small | default |
| className      | Switch 器类名       | String           | -                | -       |

## Switch 事件

| 事件名称 | 说明           | 返回参数                 |
| -------- | -------------- | ------------------------ |
| onChange | 变化时回调函数 | 返回当前 switch 是否选中 |
