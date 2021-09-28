---
title: Radio 单选按钮
nav:
  title: Radio 单选按钮
  path: /components
group:
  title: 数据录入
  path: /record
---

# Radio 单选按钮

---

单选框。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 使用指南

```js
import { CRadio } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
import React from 'react';
import { CRadio } from 'taro-qn-components';

export default () => {
  return <CRadio>Radio</CRadio>;
};
```

## 禁止用法

```jsx | pure
import React from 'react';
import { CRadio } from 'taro-qn-components';

export default () => {
  return <CRadio disabled>Radio</CRadio>;
};
```

## 组合用法

```jsx | pure
import React, { useState } from 'react';
import { CRadio } from 'taro-qn-components';

export default () => {
  const [value, setValue] = useState();
  const onRadioChange = (v) => {
    setValue(v);
  };

  return (
    <CRadio.Group onChange={onRadioChange} value={value}>
      <CRadio value={1}>A</CRadio>
      <CRadio value={2}>B</CRadio>
      <CRadio value={3}>C</CRadio>
      <CRadio value={4}>D</CRadio>
    </CRadio.Group>
  );
};
```

## 组合用法 options

```jsx | pure
import React, { useState } from 'react';
import { CRadio } from 'taro-qn-components';

export default () => {
  const [value, setValue] = useState();
  const onRadioChange = (v) => {
    setValue(v);
  };

  const options = [
    {
      value: 'morning',
      label: '上午',
    },
    {
      value: 'noon',
      label: '中午',
    },
    {
      value: 'afternoon',
      label: '下午',
    },
    {
      value: 'ws',
      label: '晚上',
      disabled: true,
    },
  ];

  return (
    <CRadio.Group onChange={onRadioChange} options={options} value={value} />
  );
};
```

## 组合用法 options 垂直布局

```jsx | pure
import React, { useState } from 'react';
import { CRadio } from 'taro-qn-components';

export default () => {
  const [value, setValue] = useState();
  const onRadioChange = (v) => {
    setValue(v);
  };

  const options = [
    {
      value: 'morning',
      label: '上午',
    },
    {
      value: 'noon',
      label: '中午',
    },
    {
      value: 'afternoon',
      label: '下午',
    },
    {
      value: 'ws',
      label: '晚上',
      disabled: true,
    },
  ];

  return (
    <CRadio.Group
      onChange={onRadioChange}
      options={options}
      value={value}
      layout="vertical"
    />
  );
};
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/record/radio/index"></iframe>

## Radio 参数

| 参数     | 说明                              | 类型    | 可选值 | 默认值 |
| :------- | :-------------------------------- | :------ | :----- | :----- |
| value    | 根据 value 进行比较，判断是否选中 | any     | -      | -      |
| disabled | 禁用 Radio                        | Boolean | -      | false  |
| checked  | 指定当前是否选中                  | Boolean | -      | false  |

## Radio.Group 参数

单选框组合，用于包裹一组 Radio。

| 参数         | 说明                 | 类型                                                        | 可选值                     | 默认值     |
| :----------- | :------------------- | :---------------------------------------------------------- | :------------------------- | :--------- |
| defaultValue | 默认选中的值         | any                                                         | -                          | -          |
| value        | 用于设置当前选中的值 | any                                                         | -                          | -          |
| options      | 以配置形式设置子元素 | Array<{ label: string, value: string, disabled?: boolean }> | -                          | -          |
| disabled     | 禁选所有子单选器     | Boolean                                                     | -                          | false      |
| layout       | 布局                 | String                                                      | horizontal &#124; vertical | horizontal |
| onChange     | 选项变化时的回调函数 | -                                                           | -                          | -          |
