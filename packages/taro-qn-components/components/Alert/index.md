---
title: Alert 警告提示
nav:
  title: Alert 警告提示
  path: /components
group:
  title: 反馈
  path: /callback
  order: 4
---

# Alert 警告提示

---

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 使用指南

```js
import { CAlert } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
<CAlert message="基本展示" />
```

## 样式用法

共有三种样式 `success`、`info`、`warning`

```jsx | pure
<CAlert message="样式用法" type="warning" />
```

## 图标用法

```jsx | pure
<CAlert message="图标用法" showIcon />
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/callback/alert/index"></iframe>

## Alert 参数

| 参数     | 说明         | 类型    | 可选值                           | 默认值 |
| :------- | :----------- | :------ | :------------------------------- | :----- |
| message  | 展示信息     | String  | -                                | -      |
| showIcon | 是否显示图标 | Boolean | -                                | false  |
| type     | 文本展示类型 | String  | 'info' \| 'success' \| 'warning' | 'info' |
