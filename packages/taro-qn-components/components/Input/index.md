---
title: Input 输入框
nav:
  title: Input 输入框
  path: /components
group:
  title: 数据录入
  path: /record
---

# Input 输入框

---

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 使用指南

在 Taro 文件中引入组件

```js
import { CInput } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
import React, { useState } from 'react';
import { CInput } from 'taro-qn-components';

export default () => {
  const [value, setValue] = useState('');

  const onChange = (value) => {
    setValue(value);
  };

  return <CInput value={value} maxlength="10" onChange={onChange} />;
};
```

## 大小/清除/计数用法

```jsx | pure
<CInput mode="large" placeholder="大尺寸" />

<CInput clear placeholder="清除" />

<CInput placeholder="计数" count maxlength='100'/>
```

## 后置标签用法

```jsx | pure
<CInput placeholder="后置标签" addonAfter="个" />
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/record/input/index"></iframe>

## Input 参数

| 参数             | 说明                                                            | 类型             | 可选值          | 默认值 |
| :--------------- | :-------------------------------------------------------------- | :--------------- | :-------------- | :----- |
| addonAfter       | 带标签的 input，设置后置标签                                    | String           | -               | -      |
| clear            | 可以点击清除图标删除内容                                        | Boolean          | -               | false  |
| count            | 是否输入框有计数功能                                            | Boolean          | -               | false  |
| disabled         | 是否禁止输入框输入                                              | Boolean          | -               | false  |
| maxlength        | 最大长度                                                        | String \| Number | -               | 140    |
| mode             | 控件大小。注：标准表单内的输入框大小限制为 normal               | String           | normal \| large | -      |
| name             | 输入框的唯一标识                                                | String           | -               | -      |
| placeholder      | 占位符                                                          | String           | -               | -      |
| type             | 输入框类型                                                      | String           | -               | text   |
| value            | 输入框当前值，开发者需要通过 onChange 事件来更新 value 值，必填 | String           | -               | -      |
| isAutoFocus      | 是否自动获取焦点                                                | Boolean          | -               | false  |
| placeholderStyle | placeholder 的样式                                              | String           | -               | -      |
| placeholderClass | placeholder 的 class                                            | String           | -               | -      |

## Input 事件

| 事件名称 | 说明                                                                                                                                                                    | 返回参数 |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| onChange | 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，onChange 函数必填。小程序中，如果想改变 value 的值，需要 return value 从而改变输入框的当前值 | -        |
| onBlur   | 失去焦点事件                                                                                                                                                            | event    |
| onFocus  | 获取焦点事件                                                                                                                                                            | event    |
