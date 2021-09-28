# taro-qn-components

基于 Taro 的 PC 多端组件库，支持千牛

Taro 的千牛风格组件库，UI 参考蓝湖上千牛小程序的 UI 设计

写在前面：

- 基于 Taro v3.2.5 开发， 3.2.6~3.2.10 在千牛真机环境不能运行。

## 用示例开发组件

1. 安装依赖

```shell
lerna bootstrap
```

2. 初始化依赖

```
cd packages/taro-qn-demo && npm i ../taro-qn-components --save && cd ../../
```

3. 开启组件编译

```
npm run watch
```

4. 开启事例项目

```
npm run dev:qn
```

打开小程序工具 taro-qn-demo/dist 下项目

## 业务调试组件

1. 使用本地组件库

```
npm run watch
```

2. link 本地库

```
cd packages/taro-qn-components && npm link
```

3. 使用本地组件
   在项目中

```
npm link taro-qn-components
```

## 发布

## TODOLIST

- Button ~ 已完成
- Icon ~ 已完成
- Breadcrumb 已完成
- Pagination ~ 已完成
- Steps ~ 已完成
- Checkbox 已完成
- Radio ~ 已完成
- DatePicker
- Input 已完成
- Form 已完成
- InputNumber 已完成
- Textarea 已完成
- Collapse 已完成
- Rate 已完成
- Select ~ 已完成 YW
- Tabs 已完成
- Tag 已完成
- Table ~ 已完成
- Alert 已完成
- Modal 已完成
- Loading ~ 已完成
- UploadImage 已完成
- Divider 已完成 mf
- Drawer 已完成 mf
- CountDown 已完成 YW
