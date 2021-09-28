---
title: BackTop 回到顶部
nav:
  title: BackTop 回到顶部
  path: /components
group:
  title: 其他
  path: /other
  order: 6
---

# BackTop 回到顶部

---

返回页面顶部的操作按钮。

## 何时使用

- 当页面内容区域比较长时；
- 当用户需要频繁返回顶部查看相关内容时。

## 使用指南

```js
import { CBackTop } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
<CBackTop visible={scrolltop} onClick={() => {}} duration={450}>
  XXXX content
</CBackTop>
```

<!-- ## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/other/backtop/index"></iframe> -->

## BackTop 参数

| 参数     | 说明                   | 类型     | 可选值 | 默认值 |
| :------- | :--------------------- | :------- | :----- | :----- |
| duration | 回到顶部所需时间（ms） | Number   | -      | 450    |
| visible  | 是否显示图标           | Boolean  | -      | false  |
| onClick  | 点击按钮的回调函数     | Function | -      | -      |
