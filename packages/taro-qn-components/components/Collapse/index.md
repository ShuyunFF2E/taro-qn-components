---
title: Collapse 折叠面板
nav:
  title: Collapse 折叠面板
  path: /components
group:
  title: 数据展示
  path: /data
---

# Collapse 折叠面板

---

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- `手风琴` 是一种特殊的折叠面板，只允许单个内容区域展开。

## 使用指南

```js
import { CCollapse } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
import React, { useState } from 'react';
import { CCollapse } from 'taro-qn-components';

export default () => {
  return (
    <CCollapse>
      <CCollapse.Item header="这是title文字">隐藏文本</CCollapse.Item>
      <CCollapse.Item header="这是title文字2">隐藏文本2</CCollapse.Item>
    </CCollapse>
  );
};
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/data/collapse/index"></iframe>

## Collapse 参数

| 参数      | 说明                    | 类型                 | 可选值 | 默认值 |
| :-------- | :---------------------- | :------------------- | :----- | :----- |
| accordion | 手风琴模式              | Boolean              | -      | false  |
| value     | 当前激活 tab 面板的 key | String[] \| Number[] | -      | -      |
| onChange  | 切换面板的回调          | Function             | -      | -      |

## Item 参数

| 参数      | 说明                                    | 类型             | 可选值 | 默认值 |
| :-------- | :-------------------------------------- | :--------------- | :----- | :----- |
| bordered  | 是否展示 header 与 content 中间的分割线 | Boolean          | -      | true   |
| extra     | 自定义渲染每个面板右上角的内容          | ReactNode        | -      | -      |
| header    | 面板头内容                              | String           | -      | -      |
| isActive  | 当前的面板是否被激活                    | Boolean          | -      | false  |
| name      | 当前面板的 key                          | String \| Number | -      | -      |
| onClick   | 点击的回调事件                          | Function         | -      | -      |
| showArrow | 是否展示 header 左侧 icon               | Boolean          | -      | true   |
