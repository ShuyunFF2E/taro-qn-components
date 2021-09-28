---
title: Checkbox 多选框
nav:
  title: Checkbox 多选框
  path: /components
group:
  title: 数据录入
  path: /record
  order: 3
---

# Checkbox 多选框

---

多选框。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 使用指南

在 Taro 文件中引入组件

```js
import { CCheckbox } from 'taro-qn-components';
```

## 基本用法

代码仅供参考

```jsx | pure
import React, { useState } from 'react';
import { CCheckbox } from 'taro-qn-components';

const checkboxOption = [
  {
    value: 'app1',
    label: 'iPhone X',
  },
  {
    value: 'app2',
    label: 'HUAWEI P20',
  },
];

export default () => {
  const [checkedList, setCheckLists] = useState(['app1']);

  const onChange = (list) => {
    setCheckLists(list);
  };

  return (
    <CCheckbox.Group
      options={checkboxOption}
      value={checkList}
      onChange={onChange}
    />
  );
};
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/record/checkbox/index"></iframe>

## Checkbox 参数

| 参数          | 说明                                                                | 类型    | 可选值                     | 默认值     |
| ------------- | ------------------------------------------------------------------- | ------- | -------------------------- | ---------- |
| options       | object 选项列表，object 字段详细看下表                              | Array   | -                          | -          |
| value         | 被选中的选项列表，开发者需要通过 onChange 事件来更新 value 值，必填 | string  | -                          | -          |
| defaultValue  | 指定当前是否选中                                                    | boolean | -                          | false      |
| indeterminate | 设置 indeterminate 状态                                             | boolean | -                          | false      |
| layout        | 布局                                                                | String  | horizontal &#124; vertical | horizontal |

## options object 字段详解

| 参数     | 说明                     | 类型    | 可选值 | 默认值 | 可选或必填 |
| -------- | ------------------------ | ------- | ------ | ------ | ---------- |
| disabled | 是否禁止点击             | Boolean | -      | false  | 可选       |
| label    | 选项标题                 | String  | -      | -      | 必填       |
| value    | 选项标识符，必须保证唯一 | String  | -      | -      | 必填       |

## Checkbox 事件

| 事件名称 | 说明                                                            | 返回参数          |
| -------- | --------------------------------------------------------------- | ----------------- |
| onChange | 必填，需要通过该事件来改变 state 的值，输入框值改变时触发的事件 | 选中的 value 列表 |
