import { ComponentClass, ReactNode } from 'react';

export interface CFormProps {
  /**
   * 自定义额外类名
   */
  className?: string;

  /**
   * 配置 Form.Item 的 colon 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效)
   * @default true
   */
  colon?: boolean;

  /**
   * 标签的对齐位置，可设置 left right
   * @default right
   */
  labelAlign?: string;

  /**
   * label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12}
   */
  labelCol?: object;

  /**
   * 表单展示方向，默认水平，可设置 horizontal vertical
   * @default horizontal
   */
  layout?: string;

  /**
   * 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol
   */
  wrapperCol?: object;

  /**
   * form 内有 htmlType="submit"的元素的时候会触发
   */
  onSubmit?: CommonEventFunction;

  children: ReactNode;

  field: object;
}

export interface ItemProps {
  /**
   * 自定义额外类名
   */
  className?: string;

  /**
   * label 标签的文本
   */
  label?: string;

  /**
   * 标签的对齐位置，可设置 left right
   * @default right
   */
  labelAlign?: string;

  /**
   * 提示信息，如不设置，则会根据校验规则自动生成
   */
  help?: string;

  /**
   * 是否必填，如不设置，则会根据校验规则自动生成
   * @default false
   */
  required?: boolean;

  /**
   * label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12}
   */
  labelCol?: object;

  /**
   * 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol
   */
  wrapperCol?: object;
}

export interface FormContextTypes {
  /**
   * 配置 Form.Item 的 colon 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效)
   * @default true
   */
  colon?: boolean;

  /**
   * 标签的对齐位置，可设置 left right
   * @default right
   */
  labelAlign?: string;

  /**
   * label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12}
   */
  labelCol?: object;

  /**
   * 表单展示方向，默认水平，可设置 horizontal vertical
   * @default horizontal
   */
  layout?: string;

  /**
   * 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol
   */
  wrapperCol?: object;

  field: object;
}

declare const CFormProps: ComponentClass<CFormProps>;
