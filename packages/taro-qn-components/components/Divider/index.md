---
title: Divider 分割线
nav:
  title: Divider 分割线
  path: /components
group:
  title: 布局
  path: /layout
  order: 1
---

# Divider 分割线

---

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## 使用指南

在 Taro 文件中引入组件

```js
import { CDivider } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
<View className="box">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
  <CDivider />
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
  <CDivider dashed>虚线分割</CDivider>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
</View>
```

## 文字分割展示

```jsx | pure
<View className="box">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
  <CDivider>文字</CDivider>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
  <CDivider orientation="left">文字 left</CDivider>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
  <CDivider orientation="right">文字 right</CDivider>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
</View>
```

## 竖线分割

```jsx | pure
<View className="box">
  <CButton type="link">选项一</CButton>
  <CDivider type="vertical" />
  <CButton type="link">选项二</CButton>
  <CDivider type="vertical" />
  <CButton type="text">选项三</CButton>
</View>
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/layout/divider/index"></iframe>

## Divider 参数

| 参数        | 说明             | 类型          | 可选值                       | 默认值     |
| ----------- | ---------------- | ------------- | ---------------------------- | ---------- |
| type        | 水平还是垂直     | String        | 'horizontal' \| 'vertical'   | horizontal |
| dashed      | 是否虚线         | Boolean       | -                            | false      |
| orientation | 分割线标题的位置 | String        | 'left' \| 'center'\| 'right' | center     |
| textStyle   | 文案样式         | CSSProperties | -                            | --         |
