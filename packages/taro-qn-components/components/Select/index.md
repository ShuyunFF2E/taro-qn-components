---
title: Select 选择器
nav:
  title: Select 选择器
  path: /components
group:
  title: 数据录入
  path: /record
---

# Select 选择器

---

下拉选择器

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## 使用指南

在 Taro 文件中引入组件

```js
import { CSelect } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
import React, { useState } from 'react';
import { CSelect } from 'taro-qn-components';

const options = [
  {
    key: 'sx',
    value: '陕西',
  },
  {
    key: 'sd',
    value: '山东',
  },
  {
    key: 'bj',
    value: '北京',
  },
];

export default () => {
  const [value, setValue] = useState();
  const onSelectChange = (item) => {
    setValue(item.key);
  };

  return <CSelect options={options} onChange={onSelectChange} />;
};
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/record/select/index"></iframe>

## Select 参数

| 参数         | 说明                                                                                                                 | 类型                       | 默认值  | 可选值 |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------- | ------ |
| options      | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能，key 必须保证是唯一值，value 为显示文本，disabled 为单项的禁用 | { key, value, disabled }[] | -       | -      |
| placeholder  | 选择框默认文本                                                                                                       | String                     | 请选择  | -      |
| disabled     | 禁用 select 组件                                                                                                     | Boolean                    | false   | -      |
| className    | 自定义 class                                                                                                         | String                     | -       | -      |
| style        | 自定义行内样式                                                                                                       | React.CSSProperties        | -       | -      |
| showSearch   | 搜索模式                                                                                                             | Boolean                    | false   | -      |
| defaultValue | 默认选中值，这个输入的是 options 里的唯一值 key                                                                      | options[key]               | -       | -      |
| allowClear   | 清除可选值按钮                                                                                                       | Boolean                    | false   | -      |
| size         | 大小设置                                                                                                             | large \| small \| default  | default | -      |

## Select 事件

| 事件名称 | 说明                                              | 返回参数               |
| -------- | ------------------------------------------------- | ---------------------- |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | (files: Array) => void |
