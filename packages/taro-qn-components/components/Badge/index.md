---
title: Badge 徽标数
nav:
  title: Badge 徽标数
  path: /components
group:
  title: 数据展示
  path: /data
  order: 5
---

# Badge 徽标数

---

用于显示用户的消息或者提示

## 使用指南

在 Taro 文件中引入组件

```js
import { CBadge } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
import React, { useState } from 'react';
import { CBadge, CButton } from 'taro-qn-components';

export default () => {
  return (
    <View className="box">
      <CBadge value={10} maxValue={99}>
        <CButton type="primary">按钮</CButton>
      </CBadge>
    </View>
  );
};
```

## 小红点展示

```jsx | pure
<CBadge dot>
  <CButton type="primary">按钮</CButton>
</CBadge>
```

## 文本展示

```jsx | pure
<CBadge value="NEW">
  <CButton type="primary">按钮</CButton>
</CBadge>
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/data/badge/index"></iframe>

## CBadge 参数

| 参数        | 说明       | 类型             | 可选值 | 默认值 |
| ----------- | ---------- | ---------------- | ------ | ------ |
| dot         | 角标红点   | boolean          | -      | -      |
| value       | 角标内容   | string \| number | -      | -      |
| maxValue    | 角标最大值 | number           | -      | 99     |
| customStyle | 自定义样式 | string \| object | -      | -      |
| className   | 自定义类   | string \| array  | -      | -      |
