---
title: Breadcrumb 面包屑
nav:
  title: Breadcrumb 面包屑
  path: /components
group:
  title: 导航
  path: /nav
  order: 2
---

# Breadcrumb 面包屑

---

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## 使用指南

```js
import { CBreadcrumb } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
import React, { useState } from 'react';
import { CBreadcrumb } from 'taro-qn-components';

export default () => {
  const breads = [
    { title: '首页', herf: '/pages/index/index' },
    { title: '菜单', herf: '/pages/index/index' },
    { title: '面包屑' },
  ];
  return <CBreadcrumb breads={breads} />;
};
```

## Item 用法

```jsx | pure
import React, { useState } from 'react';
import { CBreadcrumb } from 'taro-qn-components';

export default () => {
  return (
    <CBreadcrumb>
      <CBreadcrumb.Item title="首页" herf="/pages/index/index" />
      <CBreadcrumb.Item title="菜单" />
      <CBreadcrumb.Item title="导航" />
    </CBreadcrumb>
  );
};
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/nav/breadcrumb/index"></iframe>

## Breadcrumb 事件

| 参数      | 说明           | 类型   | 默认值 |
| --------- | -------------- | ------ | ------ |
| breads    | items 数据     | Array  | []     |
| className | 自定义额外类名 | String | -      |

## Item 参数

| 参数      | 说明                                                      | 类型                | 可选值 | 默认值 |
| --------- | --------------------------------------------------------- | ------------------- | ------ | ------ |
| className | 自定义额外类名                                            | String              | -      | -      |
| href      | 跳转的链接，千牛端为 navigate 跳转的路径，h5 端可使用外链 | String              | -      | -      |
| title     | 显示内容                                                  | String \| ReactNode | -      | -      |
