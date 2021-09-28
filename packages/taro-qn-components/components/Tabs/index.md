---
title: Tabs 标签页
nav:
  title: Tabs 标签页
  path: /components
group:
  title: 数据展示
  path: /data
---

# Tabs 标签页

---

选项卡切换组件。

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

## 使用指南

在 Taro 文件中引入组件

```js
import { CTabs } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
<CTabs activeId={current} onChange={changeTab}>
  <CTabs.Item tab="Home" tabId="1">
    <View>Home Content</View>
  </CTabs.Item>
  <CTabs.Item tab="Documentation" tabId="2">
    <View>doc content</View>
  </CTabs.Item>
  <CTabs.Item tab="Help" tabId="3">
    <View>help content</View>
  </CTabs.Item>
</CTabs>
```

## 卡片类型

```jsx | pure
<CTabs activeId={current} onChange={changeTab} type="card">
  <CTabs.Item tab="Home" tabId="1">
    <View>Home Content</View>
  </CTabs.Item>
  <CTabs.Item tab="Documentation" tabId="2">
    <View>doc content</View>
  </CTabs.Item>
  <CTabs.Item tab="Help" tabId="3">
    <View>help content</View>
  </CTabs.Item>
</CTabs>
```

## 禁用 tab

```jsx | pure
<CTabs activeId={current} onChange={changeTab}>
  <CTabs.Item tab="Home" tabId="1" disabled>
    <View>Home Content</View>
  </CTabs.Item>
  <CTabs.Item tab="Documentation" tabId="2">
    <View>doc content</View>
  </CTabs.Item>
  <CTabs.Item tab="Help" tabId="3">
    <View>help content</View>
  </CTabs.Item>
</CTabs>

//卡片类型
<CTabs activeId={current} onChange={changeTab} type="card">
  <CTabs.Item tab="Home" tabId="1" disabled>
    <View>Home Content</View>
  </CTabs.Item>
  <CTabs.Item tab="Documentation" tabId="2">
    <View>doc content</View>
  </CTabs.Item>
  <CTabs.Item tab="Help" tabId="3">
    <View>help content</View>
  </CTabs.Item>
</CTabs>
```

<!-- ## tab 位置

```jsx | pure
<CTabs activeId={current} onChange={changeTab} tabPosition="left">
  <CTabs.Item tab="Home" tabId="1" disabled>
    <View>Home Content</View>
  </CTabs.Item>
  <CTabs.Item tab="Documentation" tabId="2">
    <View>doc content</View>
  </CTabs.Item>
  <CTabs.Item tab="Help" tabId="3">
    <View>help content</View>
  </CTabs.Item>
</CTabs>
``` -->

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/data/tabs/index"></iframe>

## Tab 参数

| 参数     | 说明               | 类型             | 可选值           | 默认值 |
| :------- | :----------------- | :--------------- | :--------------- | :----- |
| activeId | 当前激活面板的 key | String \| Number | -                | -      |
| type     | tabs 组件类型      | String           | 'line' \| 'card' | 'line' |

## Tab 事件

| 事件名称 | 说明            | 返回参数                           |
| :------- | :-------------- | :--------------------------------- |
| onChange | 切换 tab 时触发 | 返回选中的 tabId(string \| number) |

## TabItem 参数

| 参数        | 说明                      | 类型             | 可选值 | 默认值 |
| :---------- | :------------------------ | :--------------- | :----- | :----- |
| tab         | 该 TabItem 所对应的内容   | ReactNode        | -      | -      |
| tabId       | 该 TabItem 的 id          | String \| Number | -      | -      |
| disabled    | 该 TabItem 是否被禁用     | Boolean          | -      | false  |
| forceRender | 被隐藏时是否渲染 DOM 结构 | Boolean          | -      | true   |
