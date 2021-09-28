---
title: Rate 评分
nav:
  title: Rate 评分
  path: /components
group:
  title: 数据录入
  path: /record
---

# Rate 评分

---

评分组件。

## 何时使用

- 对评价进行展示
- 对事物进行快速的评级操作

## 使用指南

在 Taro 文件中引入组件

```js
import { CRate } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
import React, { useState } from 'react';
import { CInput } from 'taro-qn-components';

export default () => {
  const [stars, setStars] = useState(0);

  const changeStars = (e) => {
    setStars(e);
  };

  return (
    <View className="box">
      <CRate onChange={changeStars} value={stars} />
    </View>
  );
};
```

## 数量变化

```jsx | pure
<CRate count={10} value={2} />
```

## 半星展示

```jsx | pure
<CRate value={3.5} allowHalf />
```

## 间距调整

```jsx | pure
<CRate value={3} gap={10} />
```

## 只读展示

```jsx | pure
<CRate value={2} disabled />
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/record/rate/index"></iframe>

## Rate 参数

| 参数      | 说明                                                              | 类型    | 可选值 | 默认值 |
| :-------- | :---------------------------------------------------------------- | :------ | :----- | :----- |
| allowHalf | 是否允许半选                                                      | Boolean | -      | false  |
| count     | star 总数                                                         | Number  | -      | 5      |
| disabled  | 只读，无法进行交互                                                | Boolean | -      | false  |
| gap       | star 之间的距离                                                   | Number  | -      | 2      |
| size      | 图标展示大小                                                      | Number  | -      | 24     |
| value     | 点击选中当前值，开发者需要通过 onChange 事件来更新 value 值，必填 | String  | -      | -      |

## Rate 事件

| 事件名称 | 说明             | 返回参数 |
| :------- | :--------------- | :------- |
| onChange | 选择时的回调函数 | -        |
