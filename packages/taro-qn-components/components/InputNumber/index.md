---
title: InputNumber 数字输入框
nav:
  title: InputNumber 数字输入框
  path: /components
group:
  title: 数据录入
  path: /record
---

# InputNumber 数字输入框

---

通过鼠标或键盘，输入范围内的数值。

## 何时使用

当需要获取标准数值时。

## 使用指南

在 Taro 文件中引入组件

```js
import { CInputNumber } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
import React, { useState } from 'react';
import { CInputNumber } from 'taro-qn-components';

export default () => {
  const [value, setValue] = useState(0);

  const onChange = (num) => {
    setValue(num);
  };

  return <CInputNumber value={value} onChange={onChange} />;
};
```

## 小数用法

```jsx | pure
<CInputNumber min={0} max={10} step={0.1} value={value} onChange={onChange} />
```

## 禁止状态

```jsx | pure
<CInputNumber
  disabled
  min={0}
  max={10}
  step={1}
  value={value}
  onChange={onChange}
/>
```

## 禁止输入状态

```jsx | pure
<CInputNumber
  disabledInput
  min={0}
  max={10}
  step={1}
  value={value}
  onChange={onChange}
/>
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/record/input-number/index"></iframe>

## InputNumber 参数

| 参数          | 说明                                                            | 类型    | 可选值 | 默认值 |
| :------------ | :-------------------------------------------------------------- | :------ | :----- | :----- |
| max           | 最大值                                                          | Number  | -      | 100    |
| min           | 最小值                                                          | Number  | -      | 0      |
| disabled      | 是否禁止输入，禁止点击按钮                                      | Boolean | -      | false  |
| disabledInput | 是否禁止输入，但不禁止点击按钮                                  | Boolean | -      | false  |
| step          | 每次点击改变的间隔大小                                          | Number  | -      | 1      |
| value         | 输入框当前值，开发者需要通过 onChange 事件来更新 value 值，必填 | String  | -      | 1      |

## InputNumber 事件

| 事件名称 | 说明                                                                                         | 返回参数           |
| :------- | :------------------------------------------------------------------------------------------- | :----------------- |
| onChange | 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，onChange 函数必填 | 输入框当前值 value |
