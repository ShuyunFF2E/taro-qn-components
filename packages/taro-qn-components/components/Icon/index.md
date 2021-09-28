---
title: Icon 图标
nav:
  title: Icon 图标
  path: /components
group:
  title: 通用
  path: /base
---

# Icon 图标

---

用于展示 ICON。该组件的 ICON 图形基于 Webfont，因此可任意放大、改变颜色。

## 使用指南

在 Taro 文件中引入组件

```js
import { CIcon } from 'taro-qn-components';
```

## 基本用法

```html
<CIcon type="list" />
```

## 不同用法

```jsx | pure
<CIcon type="list" size={16} color="red" />
```

## 禁止用法

```jsx | pure
<CIcon type="list" disabled />
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/base/icon/index"></iframe>

## Icon 参数

| 参数     | 说明     | 类型    | 可选值   | 默认值 |
| :------- | :------- | :------ | :------- | :----- |
| type     | 图标图案 | String  | 参考下表 | list   |
| size     | 图标尺寸 | Number  | -        | 14     |
| color    | 图标颜色 | String  | -        | #333   |
| disabled | 禁用     | Boolean | -        | false  |
