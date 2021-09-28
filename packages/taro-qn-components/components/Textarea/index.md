---
title: Textarea 多行输入框
nav:
  title: Textarea 多行输入框
  path: /components
group:
  title: 数据录入
  path: /record
---

# Textarea 多行输入框

---

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时。
- 提供多行输入计数功能。

## 使用指南

在 Taro 文件中引入组件

```js
import { CTextarea } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
import React, { useState } from 'react';
import { CTextarea } from 'taro-qn-components';

export default () => {
  const [value, setValue] = useState('');

  const onChange = (value) => {
    setValue(value);
  };

  return <CTextarea value={value} maxlength="100" onChange={onChange} />;
};
```

## 计数用法

```jsx | pure
<CTextarea placeholder="计数用法" maxlength={100} count />
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/record/textarea/index"></iframe>

## Textarea 参数

| 参数        | 说明                                                            | 类型             | 可选值 | 默认值       |
| :---------- | :-------------------------------------------------------------- | :--------------- | :----- | :----------- |
| count       | 是否输入框有计数功能                                            | Boolean          | -      | false        |
| disabled    | 是否禁止输入框输入                                              | Boolean          | -      | false        |
| maxlength   | 最大长度                                                        | String \| Number | -      | -1 (不限制 ) |
| placeholder | 占位符                                                          | String           | -      | -            |
| value       | 输入框当前值，开发者需要通过 onChange 事件来更新 value 值，必填 | String           | -      | -            |

## Textarea 事件

| 事件名称 | 说明                                                                                         | 返回参数 |
| :------- | :------------------------------------------------------------------------------------------- | :------- |
| onChange | 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，onChange 函数必填 | -        |
