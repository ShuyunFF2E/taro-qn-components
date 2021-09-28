---
title: Pagination 分页器
nav:
  title: Pagination 分页器
  path: /components
group:
  title: 导航
  path: /nav
---

# Pagination 分页器

---

采用分页的形式分隔长列表，每次只加载一个页面。

## 何时使用

- 当加载/渲染所有数据将花费很多时间时；
- 可切换页码浏览数据。

## 使用指南

在 Taro 文件中引入组件

```js
import { CPagination } from 'taro-qn-components';
```

## 基本用法

```jsx | pure
<CPagination
  total={50}
  current={params.current}
  pageSize={params.pageSize}
  onChange={changePage}
/>
```

## 更多分页

```jsx | pure
<CPagination
  total={500}
  current={params.current}
  pageSize={params.pageSize}
  onChange={changePage}
/>
```

## 修改条数

```jsx | pure
<CPagination
  total={500}
  current={params.current}
  pageSize={params.pageSize}
  onChange={changePage}
  showPageSizeOptions
/>
<CPagination
  total={500}
  current={params.current}
  pageSize={params.pageSize}
  onChange={changePage}
  showPageSizeOptions
  pageSizeOptions={[30, 60]}
/>
```

## 快速跳转

```jsx | pure
<CPagination
  total={500}
  current={params.current}
  pageSize={params.pageSize}
  onChange={changePage}
  showQuickJumper
/>
```

## 多功能展示

```jsx | pure
<CPagination
  total={500}
  current={params.current}
  pageSize={params.pageSize}
  onChange={changePage}
  showQuickJumper
  showPageSizeOptions
/>
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/nav/pagination/index"></iframe>

## Pagination 参数

| 参数                | 说明                           | 类型     | 可选值 | 默认值           |
| :------------------ | :----------------------------- | :------- | :----- | :--------------- |
| current             | 当前页                         | Number   | -      | 1                |
| total               | 数据总量                       | Number   | -      | 0                |
| pageSize            | 每页数据量                     | Number   | -      | 10               |
| pageSizeOptions     | 指定每页可以显示多少条         | number[] | -      | [10, 20, 30, 40] |
| showPageSizeOptions | 是否展示每页显示多少条下拉选项 | Boolean  | -      | false            |
| showQuickJumper     | 是否可以快速跳转至某页         | boolean  | -      | false            |

## Pagination 事件

| 事件名称 | 说明               | 返回参数          |
| :------- | :----------------- | :---------------- |
| onChange | 点击页码按钮时触发 | current, pageSize |
