---
title: Carousel 走马灯
nav:
  title: Carousel 走马灯
  path: /components
group:
  title: 数据展示
  path: /data
  order: 5
---

# Carousel 走马灯

---

旋转木马，一组轮播的区域。

## 何时使用

- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## 使用指南

```js
import { CCarousel } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
import React, { useState } from 'react';
import { CCarousel } from 'taro-qn-components';

const imgs = [
  {
    src: 'https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png',
  },
  {
    src: 'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg',
  },
  {
    src: 'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg',
  },
];
export default () => <CCarousel height={360} items={imgs} />;
```

## 设置高度

```jsx | pure
<CCarousel items={imgs} height={100} />
```

## 参数配置

```jsx | pure
1. 不显示下方圆点
<CCarousel items={imgs} dots={false} />

2. 不显示左右箭头
<CCarousel items={imgs} arrows={false} />

3. 停止自动播放
<CCarousel items={imgs} autoplay={false} />
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/data/carousel/index"></iframe>

## Carousel 参数

| 参数     | 说明               | 类型           | 可选值 | 默认值 |
| :------- | :----------------- | :------------- | :----- | :----- |
| height   | 轮播高度           | Number\|String | -      | 300    |
| speed    | 动画过渡的时间     | Number         | -      | 1.5    |
| delay    | 动画停留的时间     | Number         | -      | 4      |
| autoplay | 是否自动播放       | Boolean        | -      | true   |
| dots     | 是否显示下方小圆点 | Boolean        | -      | true   |
| arrows   | 是否显示左右箭头   | Boolean        | -      | true   |
| items    | 图片数组           | string[]       | -      | -      |

## items 参数

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| :--- | :------- | :----- | :----- | :----- |
| src  | 图片地址 | String | -      | -      |
