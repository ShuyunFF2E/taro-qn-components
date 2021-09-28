---
title: Grid 栅格布局
nav:
  title: Grid 栅格布局
  path: /components
group:
  title: 布局
  path: /layout
  order: 1
---

# Grid 栅格布局

---

用于开发者布局

## 概念

布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。

- 通过 row 在水平方向建立一组 column（简写 col）。
- 你的内容应当放置于 col 内，并且，只有 col 可以作为 row 的直接元素。
- 栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 `<Col span={8} />` 来创建。

## 使用指南

在 Taro 文件中引入组件

```js
import { Row, Col } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
import React, { useState } from 'react';
import { Row, Col } from 'taro-qn-components';

export default () => {
  return (
    <View className="box">
      <Row>
        <Col span="24">
          <View className="grid-content bg-purple-dark"></View>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <View className="grid-content bg-purple"></View>
        </Col>
        <Col span="12">
          <View className="grid-content bg-purple-light"></View>
        </Col>
      </Row>
      <Row>
        <Col span="8">
          <View className="grid-content bg-purple"></View>
        </Col>
        <Col span="8">
          <View className="grid-content bg-purple-light"></View>
        </Col>
        <Col span="8">
          <View className="grid-content bg-purple"></View>
        </Col>
      </Row>
      <Row>
        <Col span="6">
          <View className="grid-content bg-purple"></View>
        </Col>
        <Col span="6">
          <View className="grid-content bg-purple-light"></View>
        </Col>
        <Col span="6">
          <View className="grid-content bg-purple"></View>
        </Col>
        <Col span="6">
          <View className="grid-content bg-purple-light"></View>
        </Col>
      </Row>
      <Row>
        <Col span="4">
          <View className="grid-content bg-purple"></View>
        </Col>
        <Col span="4">
          <View className="grid-content bg-purple-light"></View>
        </Col>
        <Col span="4">
          <View className="grid-content bg-purple"></View>
        </Col>
        <Col span="4">
          <View className="grid-content bg-purple-light"></View>
        </Col>
        <Col span="4">
          <View className="grid-content bg-purple"></View>
        </Col>
        <Col span="4">
          <View className="grid-content bg-purple-light"></View>
        </Col>
      </Row>
    </View>
  );
};
```

## 分栏间隔

```jsx | pure
<Row gutter="8">
  <Col span="6">
    <View className="grid-content bg-purple"></View>
  </Col>
  <Col span="6">
    <View className="grid-content bg-purple"></View>
  </Col>
  <Col span="6">
    <View className="grid-content bg-purple"></View>
  </Col>
  <Col span="6">
    <View className="grid-content bg-purple"></View>
  </Col>
</Row>
```

## 混合布局

```jsx | pure
<Row gutter="20">
  <Col span="16">
    <View className="grid-content bg-purple"></View>
  </Col>
  <Col span="8">
    <View className="grid-content bg-purple"></View>
  </Col>
</Row>
<Row gutter="20">
  <Col span="8">
    <View className="grid-content bg-purple"></View>
  </Col>
  <Col span="8">
    <View className="grid-content bg-purple"></View>
  </Col>
  <Col span="4">
    <View className="grid-content bg-purple"></View>
  </Col>
  <Col span="4">
    <View className="grid-content bg-purple"></View>
  </Col>
</Row>
<Row gutter="20">
  <Col span="4">
    <View className="grid-content bg-purple"></View>
  </Col>
  <Col span="16">
    <View className="grid-content bg-purple"></View>
  </Col>
  <Col span="4">
    <View className="grid-content bg-purple"></View>
  </Col>
</Row>
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/layout/grid/index"></iframe>

## Row 参数

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| gutter | 栅格间隔 | number | -      | -      |

## Col 参数

| 参数        | 说明                     | 类型             | 可选值 | 默认值 |
| ----------- | ------------------------ | ---------------- | ------ | ------ |
| span        | 栅格占据的列数，必选参数 | number           | -      | -      |
| offset      | 栅格左侧的间隔格数       | number           | -      | -      |
| customStyle | 自定义样式               | string \| object | -      | -      |
| className   | 自定义类                 | string \| array  | -      | -      |
