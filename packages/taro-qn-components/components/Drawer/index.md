---
title: Drawer 抽屉
nav:
  title: Drawer 抽屉
  path: /components
group:
  title: 反馈
  path: /callback
---

# Drawer 抽屉

---

屏幕边缘滑出的浮层面板。

## 何时使用

抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。

- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
- 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。

## 使用指南

```js
import { CDrawer } from 'taro-qn-components';
```

## 基础用法

```jsx | pure
<CDrawer visible={true} title={'this is header'} onClose={close}></CDrawer>
```

## 自定义位置

```jsx | pure
<CDrawer
  visible={true}
  title={'this is header'}
  onClose={close}
  placement={'left|top|right|bottom'}
></CDrawer>
```

## 自定义内容

```jsx | pure
<CDrawer
  visible={true}
  title={'this is header'}
  onClose={close}
  placement={'left|top|right|bottom'}
>
  <View>内容展示 1。。。</View>
  <View>内容展示 2。。。</View>
  <View>内容展示 3。。。</View>
</CDrawer>
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/callback/drawer/index"></iframe>

## Drawer 参数

| 参数           | 说明                                             | 类型             | 可选值              | 默认值  |
| :------------- | :----------------------------------------------- | :--------------- | :------------------ | :------ |
| bodyStyle      | 可用于设置 Drawer 内容部分的样式                 | CSSProperties    | -                   | -       |
| closable       | 是否显示右上角关闭按钮                           | Boolean          | -                   | true    |
| destroyOnClose | 关闭时销毁里面的子元素                           | Boolean          | -                   | false   |
| fixed          | 是否 fixed 定位                                  | Boolean          | -                   | true    |
| height         | 抽屉的高度,placement 设置为 top 或者 bottom 生效 | String \| Number | 合法的 CSS 高度单位 | 300px   |
| headerStyle    | 用于设置 Drawer 头部的样式                       | CSSProperties    | -                   | -       |
| mask           | 是否显示遮罩层                                   | Boolean          | -                   | true    |
| maskClosable   | 点击遮罩层关闭 drawer                            | Boolean          | -                   | true    |
| noHeader       | 是否隐藏 header                                  | Boolean          | -                   | false   |
| placement      | 抽屉弹出的位置                                   | String           | -                   | 'right' |
| title          | 标题                                             | ReactNode        | -                   | -       |
| visible        | 展示或隐藏                                       | Boolean          | -                   | false   |
| width          | 抽屉的宽度,placement 设置为 left 或者 right 生效 | String \| Number | 合法的 CSS 宽度单位 | 300px   |
| zIndex         | 抽屉的层级                                       | Number           | -                   | 100     |

## Drawer 事件

| 事件名称 | 说明                                 | 返回参数 |
| :------- | :----------------------------------- | :------- |
| onClose  | 点击遮罩层或右上角叉或取消按钮的回调 | -        |
