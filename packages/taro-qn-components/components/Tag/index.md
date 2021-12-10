---
title: Tag 标签
nav:
  title: Tag 标签
  path: /components
group:
  title: 数据展示
  path: /data
---

# Tag 标签

---

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 使用指南

在 Taro 文件中引入组件

```js
import { CTag } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
<CTag>基本展示</CTag>
```

## 彩色标签

```jsx | pure
<CTag color="#F50">#F50</CTag>
<CTag color="#2976ea">#2976ea</CTag>
<CTag color="#87d068">#87d068</CTag>
<CTag color="magenta">magenta</CTag>
<CTag color="gold">gold</CTag>
<CTag color="purple">purple</CTag>
```

## 填充标签

```jsx | pure
<CTag solid>填充标签</CTag>

<CTag solid color="#2976ea">色彩填充标签</CTag>

<CTag solid color="magenta">magenta 色彩填充标签</CTag>
```

## 圆角标签

```jsx | pure
<CTag circle>圆角标签</CTag>

<CTag solid circle>圆角色彩填充标签</CTag>

<CTag solid color="#2976ea" circle>magenta 圆角色彩填充标签</CTag>

<CTag solid color="magenta" circle>magenta 色彩填充标签</CTag>
```

## 禁用标签

```jsx | pure
<CTag circle disabled>禁用标签</CTag>

<CTag solid disabled>禁用圆角色彩填充标签</CTag>

<CTag solid color="#2976ea" circle disabled>magenta 禁用圆角色彩填充标签</CTag>

<CTag solid color="magenta" circle disabled>magenta 禁用色彩填充标签</CTag>
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/data/tag/index"></iframe>

## Tag 参数

| 参数      | 说明           | 类型    | 可选值 | 默认值 |
| :-------- | :------------- | :------ | :----- | :----- |
| color     | 标签颜色       | String  | -      | -      |
| circle    | 是否为圆角按钮 | Boolean | -      | false  |
| disabled  | 是否禁用       | Boolean | -      | false  |
| icon      | 设置图标       | String  | -      | -      |
| className | 父元素类名     | String  | -      | -      |
| solid     | 是否为实心按钮 | Boolean | -      | false  |

## Tag 事件

| 事件名称 | 说明           | 返回参数 |
| :------- | :------------- | :------- |
| onClick  | 点击标签时触发 | -        |
