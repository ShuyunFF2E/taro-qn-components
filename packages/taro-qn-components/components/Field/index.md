---
title: Field 表单辅助工具
nav:
  title: Field 表单辅助工具
  path: /components
group:
  title: 数据录入
  path: /record
---

# Field 表单辅助工具

---

表单数据管理组件。

## 何时使用

涉及到表单数据操作、校验的地方都可以用 Field 来管理数据。和组件关联后可以自动对表单数据进行回写、读取、校验。

## 注意事项

使用了 Field `init` 过的组件，请勿在组件上面直接定义 `ref` `value` `onChange` 事件。

## 如何使用

- 使用`Field`组件的 init 方法, `value` `onChange` 必须放在 options 参数, 否则有可能被 init 覆盖。
- `Form`已经和`Field` 在`数据获取`和`自动校验`提示方面做了深度优化，建议在`Form`中使用`Field`, 请查看 Form demo。
- `initValue` 类似组件的 defaultValue 只有在组件第一次 render 的时候才生效(ajax 异步调用设置 initValue 可能已经错过了第一次 render)。
- 可以通过 `getValues` 获取到结构化的数据, 但是 `getValue` 还是必须传完整 key 值。

## Field 参数

| 参数    | 说明                   | 类型            | 可选值   | 默认值 |
| :------ | :--------------------- | :-------------- | :------- | :----- |
| this    | 传入调用 class 的 this | React.Component | 必须设置 | -      |
| options | 事件配置, 详细参数如下 | React.Component | -        | -      |

### `options` 配置项

| 参数     | 说明                                                    | 类型                 | 可选值 | 默认值 |
| :------- | :------------------------------------------------------ | :------------------- | :----- | :----- |
| onChange | 所有组件的 change 都会到达这里[setValue 不会触发该函数] | Function(name,value) | -      | -      |

### API 接口

`new`之后的对象提供的 api 接口 （例：`myfield.getValues()`）(`set` 开头的 api 函数不要在 render 里面操作)

| 参数      | 说明                                                                     | 类型                                                                               | 可选值 | 默认值 |
| :-------- | :----------------------------------------------------------------------- | :--------------------------------------------------------------------------------- | :----- | :----- |
| clear     | 清空一组输入控件的值、清空校验                                           | Function([names: string[]])                                                        | -      | -      |
| init      | 初始化每个组件，详细参数如下                                             | Function(name:string, option:object)                                               | -      | -      |
| getError  | 获取单个输入控件的 Error                                                 | Function(name: string)                                                             | -      | -      |
| getErrors | 获取一组输入控件的 Error                                                 | Function([names: string[]])                                                        | -      | -      |
| getValue  | 获取单个输入控件的值                                                     | Function(name: string)                                                             | -      | -      |
| getValues | 获取一组输入控件的值，如不传入参数，则获取全部组件的值                   | Function([names: string[]])                                                        | -      | -      |
| remove    | 删除某一个或者一组控件的数据，删除后与之相关的 validate/value 都会被清空 | Function(name: string/string[])                                                    | -      | -      |
| reset     | 重置一组输入控件的值、清空校验                                           | Function([names: string[]])                                                        | -      | -      |
| setError  | 设置单个输入控件的 Error                                                 | Function(name: string, errors:string/array[string])                                | -      | -      |
| setErrors | 设置一组输入控件的 Error                                                 | Function(obj: object)                                                              | -      | -      |
| setValue  | 设置单个输入控件的值 （会触发 render，请遵循 react 时机使用)             | Function(name: string, value)                                                      | -      | -      |
| setValues | 设置一组输入控件的值（会触发 render，请遵循 react 时机使用)              | Function(obj: object)                                                              | -      | -      |
| validate  | 校验并获取一组输入域的值与 Error                                         | Function([names: string[]], [options: object], callback: Function(errors, values)) | -      | -      |

### init

```jsx | pure
init(name, options);

// 返回值 {id,value,onChange}
```

| 参数              | 说明                                                       | 类型         | 可选值 | 默认值     |
| :---------------- | :--------------------------------------------------------- | :----------- | :----- | :--------- |
| name              | 必填输入控件唯一标志                                       | string       | -      | -          |
| options.valueName | 组件值的属性名称，如 Checkbox 的是 checked，Input 是 value | string       | -      | 'value'    |
| options.initValue | 组件初始值，如果不填会自动读取组件的 defaultValue          | any          | -      | -          |
| options.trigger   | 触发取数据的方法                                           | string       | -      | 'onChange' |
| options.rules     | 校验规则                                                   | array/object | -      | -          |

### rules

```jsx | pure
{
  rules: [
    { required: true, message: '内容不允许为空' },
    { len: 20, message: '最长只能输入20个字符' },
  ];
}
```

| 参数      | 说明                                                                | 类型                            | 可选值 | 默认值 |
| :-------- | :------------------------------------------------------------------ | :------------------------------ | :----- | :----- |
| required  | 是否必选（如 Form.Item 组件的 required 不设置则会调用此字段的值）   | boolean                         | -      | false  |
| message   | 出错时候信息                                                        | string                          | -      | -      |
| pattern   | 正则表达式校验，不会自动加上前后规则`^\|$`，如有需要自行添加        | RegExp                          | -      | -      |
| len       | 长度校验，如果 max、mix 混合配置，len 的优先级最高                  | number                          | -      | -      |
| min       | 最小值                                                              | number                          | -      | -      |
| max       | 最大值                                                              | number                          | -      | -      |
| validator | 自定义校验，必须调用 callback，参数是错误信息，没有错误则什么也不传 | function(name, value, callback) | -      | -      |
