---
title: 快速上手
order: 2
nav:
  title: 快速上手
  path: /components
group:
  title: 指南
  path: /guide
  order: -1
---

# 快速上手

taro-qn-components 是一个 千牛端小程序的类 React 组件库，致力提供常用且高质量的 UI 组件。

> 在开始之前，你需要掌握 React 及 千牛端小程序的 基础用法。访问[链接](https://miniapp.open.taobao.com/docV3.htm?docId=117038&docType=1&tag=dev)学习 淘宝千牛小程序 官方文档。

## 使用

### 1. 安装依赖

```shell
$ npm i taro-qn-components --save

# or

$ yarn add taro-qn-components

```

### 2. 引入样式

修改 `src/app.jsx` , 在文件顶部引入 `taro-qn-components/dist/index.css`

```js
import 'taro-qn-components/dist/index.css';
```

### 3. 引入组件

修改 `src/pages/index.jsx`，引入 taro-qn-components 的按钮组件

```js
import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { CButton } from 'taro-qn-components';

const Index = () => (
  <View className="App">
    <CButton type="primary">Button</CButton>
  </View>
);

export default Index;
```

好了，现在你应该能看到页面上已经有了 taro-qn-components 的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。
