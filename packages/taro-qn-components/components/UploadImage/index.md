---
title: UploadImage 图片选择器
nav:
  title: UploadImage 图片选择器
  path: /components
group:
  title: 数据录入
  path: /record
---

# UploadImage 图片选择器

---

图片选择器，一般用于上传图片前的文件选择操作，但不包括图片上传的功能

## 何时使用

需要选取本地需要上传的图片或者图库。

## 使用指南

```jsx | pure
import { CUploadImage } from 'taroqn-components';
```

## 基本用法

说明

- 该组件为受控组件，开发者需要通过 onChange 事件来更新 files，files 与 onChange 函数必填
- 该组件使用 Taro.chooseImage 实现选取图片，会受到 Taro 能力的制约，具体请参考 Taro 文档
- 开发者可以获取 files 数据并通过 Taro.uploadFile 上传图片

```jsx | pure
import React, { useState } from 'react';
import { CUploadImage } from 'taro-qn-components';

export default () => {
  const [files, setFiles] = useState([
    {
      url: 'https://brand-guide.shuyun.com/IAM/4eaee9ab1e63.png',
    },
    {
      url: 'https://brand-guide.shuyun.com/IAM/54c7fbd59ef1.png',
    },
    {
      url: 'https://brand-guide.shuyun.com/IAM/623c35dd3c73.png',
    },
  ]);

  const onChangeImage = (files) => {
    setFiles(files);
  };

  return <CUploadImage files={files} onChange={onChangeImage} />;
};
```

## 多选图片

```jsx | pure
<CUploadImage files={files} onChange={onChangeImage} multiple />
```

## 自定义数量

```jsx | pure
<CUploadImage files={files} onChange={onChangeImage} count={10} />
```

## 多预览模式

```jsx | pure
<CUploadImage files={files} onChange={onChangeImage} mode="top" />
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/record/upload-image/index"></iframe>

## UploadImage 参数

| 参数       | 说明                                          | 类型    | 可选值                                                                                                                                                                           | 默认值                                                                              |
| ---------- | --------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| files      | 图片文件数组, 元素为对象, 包含属性 url（必选) | Array   | -                                                                                                                                                                                | []                                                                                  |
| mode       | 图片预览模式                                  | String  | 'scaleToFill' \| 'aspectFit' \| 'aspectFill' \| 'widthFix' \| 'top' \| 'bottom' \| 'center' \| 'left' \| 'right' \| 'top left' \| 'top right' \| 'bottom left' \| 'bottom right' | aspectFill                                                                          |
| showAddBtn | 是否显示添加图片按钮                          | Boolean | -                                                                                                                                                                                | true                                                                                |
| multiple   | 是否支持多选                                  | Boolean | -                                                                                                                                                                                | false                                                                               |
| count      | 最多可以选择的图片张数                        | Number  | 0 ～ 99                                                                                                                                                                          | 默认为 1，当 multiple 为 true 时候，为 99，此选项设置和 multiple 冲突时，以该项优先 |

## UploadImage 事件

| 事件名称 | 说明                           | 返回参数               |
| -------- | ------------------------------ | ---------------------- |
| onChange | files 值发生变化触发的回调函数 | (files: Array) => void |
