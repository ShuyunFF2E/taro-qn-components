---
title: Form 表单组件
nav:
  title: Form 表单组件
  path: /components
group:
  title: 数据录入
  path: /record
---

# Form 表单组件

---

Form 表单包含了布局、数据获取、校验功能等功能， 其中 `数据获取`、`校验功能` 需要配合 `Field` 使用才能发挥。

Field 是通过 init 函数为组件提供 `value` `onChange` 自动实现组件受控， 在`onChange` 里面一般通过获取第一个参数给到 value 实现数据的自动获取与赋值。

## 注意事项

使用了 Field `init` 过的组件，请勿在组件上面直接定义 `ref` `value` `onChange` 事件。

## 何时使用

- 用于创建一个实体或收集信息。
- 需要对输入的数据类型进行校验时。

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/record/form/index"></iframe>

## Form 参数

| 参数       | 说明                                                                                                     | 类型                | 可选值                 | 默认值     |
| :--------- | :------------------------------------------------------------------------------------------------------- | :------------------ | :--------------------- | :--------- |
| colon      | 配置 Form.Item 的 colon 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效) | Boolean             | -                      | true       |
| className  | Form 的 className 属性                                                                                   | String              | -                      | -          |
| field      | new Field(this)之后的实例，用到表单校验则时此项必填                                                      | object              | -                      | -          |
| labelAlign | 标签的对齐位置，可设置 left right                                                                        | String              | left \| right          | right      |
| labelCol   | label 标签布局，同 `<Col>` 组件，设置 span offset 值，如 {span: 3, offset: 12}                           | Object              | -                      | -          |
| layout     | 表单展示方向，可设置 horizontal vertical                                                                 | String              | horizontal \| vertical | horizontal |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol                                                | Object              | -                      | -          |
| onSubmit   | form 内有 htmlType="submit"的元素的时候会触发                                                            | Function(evt:Event) | -                      | -          |

如果 Form 和 Form.Item 相同的属性，Form.Item 的优先级更高，如果 Form 上设置了就不用每一个 Form.Item 上都进行设置，更加方便

## Form.Item 参数

| 参数       | 说明                                                                           | 类型    | 可选值        | 默认值 |
| :--------- | :----------------------------------------------------------------------------- | :------ | :------------ | :----- |
| label      | label 标签的文本                                                               | String  | -             | -      |
| labelAlign | 标签的对齐位置，可设置 left right                                              | String  | left \| right | right  |
| help       | 提示信息，如不设置，则会根据校验规则自动生成                                   | String  | -             | -      |
| required   | 是否必填，如不设置，则会根据校验规则自动生成                                   | Boolean | -             | false  |
| labelCol   | label 标签布局，同 `<Col>` 组件，设置 span offset 值，如 {span: 3, offset: 12} | Object  | -             | -      |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol                      | Object  | -             | -      |
| className  | Form.Item 的 className 属性                                                    | String  | -             | -      |
