---
title: Table 表格
nav:
  title: Table 表格
  path: /components
group:
  title: 数据展示
  path: /data
---

# Table 表格

---

展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## 使用指南

```jsx | pure
import { CTable } from 'taro-qn-components';
```

## 空数据

```jsx | pure
import React from 'react';
import { View, Text } from '@tarojs/components';
import { CTable } from 'taro-qn-components';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

<CTable
  colStyle={{ padding: '0 5px' }}
  columns={columns}
  dataSource={[]}
  empty={<Text>数据被外星人带走了</Text>}
  rowKey="user_id"
  loading={false}
/>;
```

## 基本展示

```jsx | pure
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

<CTable columns={columns} dataSource={dataSource} rowKey="key" />;
```

## 列排序

```jsx | pure

const columns = [
    {
      title: '用户名',
      dataIndex: 'username',
      sort: true,
      // 左固定列示例
      fixed: 'left',
      render: (t) => {
        return <Text style={{ color: 'red' }}>{t}</Text>;
      },
    },
    {
      title: '性别',
      dataIndex: 'sex',
      width: '15%',
      render: (t) => {
        switch (String(t)) {
          case '0':
            return '男';
          case '1':
            return '女';
          default:
            return '-';
        }
      },
    },
    {
      title: '手机号',
      dataIndex: 'telephone',
      width: '15%',
      sort: true,
      sorter: true,
      onSort: async (v) => {
        console.log('onSort -', v);
      },
    },
    {
      title: '余额',
      dataIndex: 'price',
      sort: true,
      width: '10%',
      render: (t) => '￥' + t,
    },
    {
      title: '订单金额',
      width: '10%',
      dataIndex: 'orderInfo',
      render: (_, record) => record?.orderInfo?.price,
      // 自定义排序方式示例
      sort: true,
      sorter: (a, b, sortOrder) => {
        return sortOrder === 'ascend' ? a.price - b.price ： b.price - a.price;
      },
    },
    {
      title: '创建时间',
      width: '20%',
      dataIndex: 'createTime',
    },
    {
      title: '操作',
      dataIndex: 'status',
      sort: true,
      // 右固定列示例
      fixed: 'right',
      width: '20%',
      align: 'center',
      render: (t) => {
        return (
          <CButton type={t ? 'normal' : 'primary'}>
            {t ? '启用' : '禁用'}
          </CButton>
        );
      },
    },
  ];

const dataSource = [{
   user_id: 1,
   username: '努尔哈赤1',
   telephone: 18688883210,
   price: 156,
   sex: 1,
   createTime: '2021/8/16 下午1:38:21',
   status: true,
 }];

<CTable
  colStyle={{ padding: '0 5px' }}
  columns={columns}
  dataSource={dataSource}
  rowKey="user_id"
/>

```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/data/table/index"></iframe>

## Table 参数

| 参数           | 说明                           | 类型      | 可选值 | 默认值                  |
| :------------- | :----------------------------- | :-------- | :----- | :---------------------- |
| columns        | 表格列的配置描述，具体项见下表 | Object[]  | -      | []                      |
| dataSource     | 数据数组                       | Object[]  | -      | -                       |
| rowKey         | 表格行 key 的取值              | String    | -      | -                       |
| loading        | 组件是否加载中                 | Boolean   | -      | -                       |
| className      | 表格拓展类名                   | String    | -      | -                       |
| style          | 表格扩展样式                   | Object    | -      | {}                      |
| titleClassName | 标题拓展类名                   | String    | -      | -                       |
| titleStyle     | 标题拓展样式                   | Object    | -      | {}                      |
| rowClassName   | 表格行的拓展类名               | String    | -      | -                       |
| rowStyle       | 表格行的拓展样式               | Object    | -      | {}                      |
| colClassName   | 表格列拓展类名                 | String    | -      | -                       |
| colStyle       | 表格列拓展样式                 | Object    | -      | {}                      |
| onChange       | 分页、排序、筛选变化时触发     | Function  | -      | -                       |
| empty          | 无数据时展示节点               | ReactNode | -      | `<Text>暂无数据</Text>` |
| multipleSort   | 启用多列排序                   | Boolean   | -      | false                   |
| scroll         | 可滚动区域                     | Object    | -      | { x: '100vw', y: 420 }  |

## columns 参数

| 参数      | 说明                       | 类型           | 可选值     | 默认值 |
| :-------- | :------------------------- | :------------- | :--------- | :----- |
| align     | 设置列的对齐方式           | Boolean        | -          | -      |
| title     | 列头显示文字               | String         | -          | -      |
| dataIndex | 列数据在数据项中对应的 key | String         | -          | -      |
| sort      | 排序的受控属性             | Boolean        | -          | false  |
| sorter    | 排序函数                   | Function       | -          | -      |
| onSort    | 点击排序时的回调函数       | Function       | -          | -      |
| fixed     | 列是否固定                 | Boolean/String | left/right | false  |
| width     | 列宽度                     | Number/String  | -          | -      |
| render    | 自定义渲染函数             | Function       | -          | -      |
