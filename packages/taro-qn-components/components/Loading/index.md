---
title: Loading 加载中
nav:
  title: Loading 加载中
  path: /components
group:
  title: 反馈
  path: /callback
---

# Loading 加载中

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 使用指南

```js
import { CLoading } from 'taro-qn-components';
```

## 基础用法

```jsx | pure
<CLoading loading />
```

## 自定义内容

```jsx | pure
<CLoading loading tip="加载中..." />
```

## 内容包裹

```jsx | pure
<CLoading loading tip="加载中..." layer layerColor={'rgba(0,0,0,0.2)'}>
  <View style={{ fontSize: '14px', lineHeight: '20px', padding: '20px' }}>
    北国风光，千里冰封，万里雪飘。 望长城内外，惟余莽莽；大河上下，顿失滔滔。
    山舞银蛇，原驰蜡象，欲与天公试比高。 须晴日，看红装素裹，分外妖娆。
    江山如此多娇，引无数英雄竞折腰。 惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。
    一代天骄，成吉思汗，只识弯弓射大雕。 俱往矣，数风流人物，还看今朝。
  </View>
</CLoading>
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/callback/loading/index"></iframe>

## Loading 参数

| 参数       | 说明                               | 类型    | 可选值 | 默认值 |
| :--------- | :--------------------------------- | :------ | :----- | :----- |
| delay      | 延迟显示加载效果的时间（防止闪烁） | Number  | -      | -      |
| loading    | 是否为加载中状态                   | Boolean | -      | true   |
| layer      | 是否显示加载遮罩                   | Boolean | -      | false  |
| layerColor | 遮罩的背景色                       | String  | -      | #fff   |
| tip        | 可以自定义描述文案                 | String  | -      | -      |
