---
title: Cascader 级联选择器
nav:
  title: Cascader 级联选择器
  path: /components
group:
  title: 数据录入
  path: /record
order: 3
---

# Cascader 级联选择器

---

级联选择框

## 何时使用

- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
- 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。

## 使用指南

在 Taro 文件中引入组件

```js
import { CCascader } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
import React from 'react';
import { CCascader } from 'taro-qn-components';

const data = [
  {
    key: 'wh',
    value: '武汉',
    children: [
      {
        key: 'nj',
        value: '南京',
        children: [
          {
            key: 'njq',
            value: '南京去',
          },
        ],
      },
    ],
  },
  {
    key: 'hn',
    value: '海南',
    children: [
      {
        key: 'hk',
        value: '海口',
        children: [
          {
            key: 'sy',
            value: '三亚',
          },
        ],
      },
    ],
  },
  {
    key: 'zj',
    value: '浙江',
    children: [
      {
        key: 'hz',
        value: '杭州',
        children: [
          {
            key: 'xh',
            value: '西湖',
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    key: 'sx',
    value: '陕西',
    children: [
      {
        key: 'xa',
        value: '西安',
        disabled: true,
        children: [
          {
            key: 'lh',
            value: '莲湖',
          },
        ],
      },
    ],
  },
  {
    key: 'gd',
    value: '广东',
    disabled: true,
    children: [
      {
        key: 'sz',
        value: '深圳',
        children: [
          {
            key: 'dq',
            value: '到期',
          },
        ],
      },
    ],
  },
];

export default () => {
  const onChange = (selectVal, selectItemVal) => {
    console.log(selectVal, selectItemVal);
  };

  return <CCascader options={options} onChange={onChange} />;
};
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/record/cascader/index"></iframe>

## Select 参数

| 参数         | 说明                                                                                                                 | 类型                                | 默认值  | 可选值 |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------- | ------ |
| options      | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能，key 必须保证是唯一值，value 为显示文本，disabled 为单项的禁用 | { key, value, disabled, children}[] | -       | -      |
| placeholder  | 选择框默认文本                                                                                                       | String                              | 请选择  | -      |
| disabled     | 禁用 select 组                                                                                                       | Boolean                             | false   | -      |
| className    | 自定义 class                                                                                                         | String                              | -       | -      |
| style        | 自定义行内样式                                                                                                       | React.CSSProperties                 | -       | -      |
| defaultValue | 默认选中值，这个输入的是 options 里的唯一值 key                                                                      | options[key]                        | -       | -      |
| allowClear   | 清除可选值按钮                                                                                                       | Boolean                             | true    | -      |
| size         | 大小选择                                                                                                             | default \| small \| large           | default | -      |

## Select 事件

| 事件名称 | 说明                                              | 返回参数                                       |
| -------- | ------------------------------------------------- | ---------------------------------------------- |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | (SelectVal: key[], SelectItem: item[]) => void |
