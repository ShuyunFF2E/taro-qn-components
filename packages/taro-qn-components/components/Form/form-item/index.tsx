import React from 'react';
import { View } from '@tarojs/components';
import cls from 'classnames';
import { ItemProps } from '../types/form';
import FormContext from '../context';
import RenderChildren from './render-children';
import { prefixCls } from '../../const';

import '../index.less';

export default class FormItem extends React.Component<ItemProps> {
  static defaultProps = {
    label: '',
    required: false,
    className: '',
  };

  static contextType = FormContext;

  get labelColSpan() {
    const { labelCol: formLabelCol, layout } = this.context;
    const { labelCol = formLabelCol } = this.props;
    const { span = layout === 'horizontal' ? 4 : undefined } = labelCol;
    return span;
  }

  renderLabel = () => {
    const { labelColSpan } = this;
    const {
      colon,
      layout,
      labelCol: formLabelCol,
      labelAlign: formLabelAlign,
    } = this.context;
    const {
      label,
      labelCol = formLabelCol,
      required,
      labelAlign = formLabelAlign,
    } = this.props;
    const { offset } = labelCol;

    const labelAttrs = {
      className: cls(`${prefixCls}-form-item-label`, {
        'has-colon':
          layout === 'vertical' ? true : label && label.trim() !== '' && colon,
        'red-mark': label && label.trim() !== '' && required,
        [`el-col-${labelColSpan}`]:
          labelColSpan !== undefined && layout !== 'vertical',
        [`el-col-push-${offset}`]: offset !== undefined,
      }),
    };

    return (
      label && (
        <View {...labelAttrs} style={{ textAlign: labelAlign }}>
          {label}
        </View>
      )
    );
  };

  renderWrapper() {
    const { labelColSpan } = this;
    const { wrapperCol: formWrapperCol, layout } = this.context;
    const { children, help, wrapperCol = formWrapperCol } = this.props;
    const {
      span = labelColSpan !== undefined ? 24 - labelColSpan : undefined,
      offset,
    } = wrapperCol;

    const wrapperAttrs = {
      className: cls(`${prefixCls}-form-item-control`, {
        [`el-col-${span}`]: span !== undefined && layout !== 'vertical',
        [`el-col-push-${offset}`]: offset !== undefined,
      }),
    };

    return (
      <View {...wrapperAttrs}>
        <RenderChildren>{children}</RenderChildren>
        {help && <View className="cross-form-item-help">{help}</View>}
      </View>
    );
  }

  render() {
    const { className } = this.props;

    return (
      <View className={`cross-form-item el-row ${className}`}>
        {this.renderLabel()}
        {this.renderWrapper()}
      </View>
    );
  }
}
