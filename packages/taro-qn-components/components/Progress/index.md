---
title: Progress 进度条
nav:
  title: Progress 进度条
  path: /components
group:
  title: 反馈
  path: /callback
  order: 4
---

# Progress 进度条

---

展示操作的当前进度。

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；
- 当需要显示一个操作完成的百分比时。

## 使用指南

```js
import { CProgress } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
<CProgress percent={30} />
<CProgress percent={50} />
<CProgress percent={80} />
```

## 隐藏信息

```jsx | pure
<CProgress percent={30} showInfo={false} />
<CProgress percent={50} showInfo={false} />

```

## 自定义宽度

```jsx | pure
<CProgress percent={30} strokeWidth={4} />
<CProgress percent={50} strokeWidth={20} />
```

## 自定义宽度

```jsx | pure
<CProgress percent={30} color="pink" />
<CProgress percent={50} color="#287" />
```

## 状态显示

共有三种样式 `progress`、`error`、`success`

```jsx | pure
<CProgress percent={30} status="progress" />
<CProgress percent={50} status="error" />
<CProgress percent={100} status="success" />
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/callback/progress/index"></iframe>

## Progress 参数

| 参数        | 说明                       | 类型    | 可选值                             | 默认值 |
| :---------- | :------------------------- | :------ | :--------------------------------- | :----- |
| color       | 元素的颜色                 | String  | -                                  | -      |
| showInfo    | 是否显示进度数值或状态图标 | Boolean | -                                  | true   |
| status      | 元素的状态                 | String  | 'progress' \| 'success' \| 'error' | -      |
| percent     | 百分比                     | Number  | -                                  | 0      |
| strokeWidth | 元素的规格,进度条宽度      | Number  | -                                  | -      |
