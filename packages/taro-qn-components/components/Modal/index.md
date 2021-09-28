---
title: Modal 对话框
nav:
  title: Modal 对话框
  path: /components
group:
  title: 反馈
  path: /callback
---

# Modal 对话框

---

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

## 使用指南

在 Taro 文件中引入组件

```js
import { CModal } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
<CModal visible={visible} onClose={onClose}>
  <View>modal弹出的内容</View>
</CModal>
```

## 对话框用法

`hasFooter` 属性，将 modal 弹窗展示为带按钮的 dialog 对话框。

```jsx | pure
<CModal visible={visible} onClose={onClose} onCancel={onCancel} hasFooter>
  <View>modal弹出的内容</View>
</CModal>
```

## 自定义页脚

自定义了页脚的按钮,需要配合`hasFooter`一起使用,当不需要默认确定取消按钮时，你可以把 footer 设为 null

```jsx | pure
<CModal
  visible={visible}
  title="显示title"
  onClose={this.onClose}
  hasFooter
  footer={[
    <CButton key="back" onClick={this.handleCancel}>
      返回
    </CButton>,
    <CButton type="primary">提交</CButton>,
  ]}
>
  <View>Some contents...</View>
  <View>Some contents...</View>
  <View>Some contents...</View>
  <View>Some contents...</View>
</CModal>
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/callback/modal/index"></iframe>

## Modal 参数

| 参数        | 说明                                                     | 类型      | 可选值 | 默认值         |
| ----------- | -------------------------------------------------------- | --------- | ------ | -------------- |
| cancelText  | 取消按钮的文本                                           | ReactNode | -      | '取消'         |
| confirmText | 确认按钮的文本                                           | String    | -      | -              |
| footer      | 底部内容，当不需要默认底部按钮时，可以设为 footer={null} | ReactNode | -      | (确定取消按钮) |
| hasFooter   | 是否渲染底部按钮                                         | Boolean   | -      | false          |
| okText      | 确认按钮文字                                             | ReactNode | -      | '确认'         |
| showMask    | 是否展示遮罩                                             | Boolean   | -      | true           |
| title       | 元素的标题                                               | String    | -      | -              |
| visible     | 是否显示模态框                                           | Boolean   | -      | false          |

## Modal 事件

| 事件名称 | 说明                   | 返回参数 |
| -------- | ---------------------- | -------- |
| onClose  | 触发关闭时的事件       | -        |
| onCancel | 点击取消按钮触发的事件 | -        |
| onOk     | 点击确认按钮触发的事件 | -        |
