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

共有四种样式 `success`、`info`、`warning`、`error`

```jsx | pure
<CAlert message="样式用法" type="success" />
<CAlert message="样式用法" type="info" />
<CAlert message="样式用法" type="warning" />
<CAlert message="样式用法" type="error" />
```

## 图标及自定义用法

```jsx | pure
<CAlert message="图标用法" showIcon />
<CAlert message="图标用法" showIcon icon="help" />
```

## 标题+内容 用法

```jsx | pure
<CAlert title="我是标题" message="图标用法" showIcon />
<CAlert title="我是标题" message={["1、段落1", "2、段落2"]} showIcon />
<CAlert title="我是标题" message={["1、段落1", "2、段落2"]} showIcon />
```

## 拓展样式 用法

```jsx | pure
<CAlert title="我是标题" message="图标用法" style={{border:'none'}} showIcon />
<CAlert title="我是标题" message={["1、段落1", "2、段落2"]} titleStyle={{color: '#000'}} showIcon />
<CAlert title="我是标题" message={["1、段落1", "2、段落2"]} titleStyle={{color: '#000'}} messageStyle={{ textDecoration: 'underline' }} showIcon />
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/callback/alert/index"></iframe>

## Alert 参数

| 参数         | 说明           | 类型    | 可选值                                                  | 默认值 |
| :----------- | :------------- | :------ | :------------------------------------------------------ | :----- |
| type         | 文本展示类型   | String  | 'info' &#124; 'success' &#124; 'warning' &#124; 'error' | 'info' |
| title        | 标题文本       | String  | -                                                       | -      |
| message      | 展示信息       | String  | -                                                       | -      |
| showIcon     | 是否显示图标   | Boolean | -                                                       | false  |
| icon         | 自定义图标类型 | String  | -                                                       | -      |
| style        | 自定义样式     | Object  | -                                                       | -      |
| titleStyle   | 标题自定义样式 | Object  | -                                                       | -      |
| messageStyle | 标题自定义样式 | Object  | -                                                       | -      |
