---
title: Button 按钮
nav:
  title: Button 按钮
  path: /components
group:
  title: 通用
  path: /base
  order: 0
---

# Button 按钮

---

按钮用于传递用户触摸时会触发的操作

## 何时使用

标记的操作命令，响应用户点击行为，触发相应的业务逻辑。

在 taro-qn-components 中, 我们提供了五种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：用于作为文本类的主按钮使用。

以上五种按钮和下面四种状态配合使用，显示不同的按钮样式。

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
- 禁用：行动点不可用的时候，一般需要文案解释。
- 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

## 使用指南

在 Taro 文件中引入组件

```js
import { CButton } from 'taro-qn-components';
```

## 基本用法

```html
<CButton>默认按钮</CButton>
<CButton type="primary">主按钮</CButton>
<CButton type="dashed">虚线按钮</CButton>
<CButton type="text">文本按钮</CButton>
<CButton type="link">链接按钮</CButton>
```

## 图标按钮

```html
<CButton icon="search">搜索默认按钮</CButton>
<CButton type="primary" icon="search">搜索主按钮</CButton>
<CButton type="dashed" icon="search">搜索虚线按钮</CButton>
```

## 按钮尺寸

```html
<CButton size="large">large 按钮</CButton>
<CButton type="primary">默认大小</CButton>
<CButton type="dashed" size="small">small 按钮</CButton>
```

## 带 loading 按钮

```html
<CButton loading type="primary">loading 按钮</CButton>
```

## 不可用状态

```html
<CButton type="primary" disabled> Primary(disabled) </CButton>
<CButton disabled>Default(disabled)</CButton>
<CButton type="dashed" disabled> Dashed(disabled) </CButton>
<CButton type="text" disabled> Text(disabled) </CButton>
<CButton type="link" disabled> Link(disabled) </CButton>
<CButton danger disabled> Danger Default(disabled) </CButton>
<CButton danger type="text" disabled> Danger Text(disabled) </CButton>
<CButton type="link" danger disabled> Danger Link(disabled) </CButton>
```

## Block 按钮

```html
<CButton type="primary" block>Primary</CButton>
<CButton block>Default</CButton>
<CButton type="dashed" block>Dashed</CButton>
<CButton type="link" block>Link</CButton>
```

## 危险按钮

```html
<CButton type="primary" danger>Primary</CButton>
<CButton danger>Default</CButton>
<CButton type="dashed" danger>Dashed</CButton>
<CButton type="text" danger>Text</CButton>
<CButton type="link" danger>Link</CButton>
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/base/button/index"></iframe>

## Button 参数

| 参数      | 说明                         | 类型    | 可选值                                      | 默认值  |
| :-------- | :--------------------------- | :------ | :------------------------------------------ | :------ |
| block     | 是否通栏样式                 | Boolean | -                                           | false   |
| className | 自定义额外类名               | String  | -                                           | -       |
| danger    | 设置危险按钮                 | Boolean | -                                           | false   |
| disabled  | 设置按钮为禁用态（不可点击） | Boolean | -                                           | false   |
| loading   | 设置按钮的载入状态           | Boolean | -                                           | false   |
| icon      | 设置按钮的图标组件           | String  | -                                           | -       |
| size      | 设置按钮大小                 | String  | large \| default \| small                   | default |
| type      | 设置按钮类型                 | String  | primary \| dashed \| link \| text \| normal | normal  |

## Button 事件

| 事件名称 | 说明             | 返回参数 |
| :------- | :--------------- | :------- |
| onClick  | 点击按钮时的回调 | -        |
