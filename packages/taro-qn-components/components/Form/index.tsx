import React, { Component } from 'react';
import { View } from '@tarojs/components';
import cls from 'classnames';
import { CFormProps } from './types/form';
import FormContext from './context';
import FormItem from './form-item';
import { prefixCls } from '../const';

import './index.less';

const classSelector = `${prefixCls}-form`;

class CForm extends Component<CFormProps> {
  static defaultProps = {
    children: null,
    className: '',
    colon: true,
    layout: 'horizontal',
    labelAlign: 'right',
    field: {},
  };

  static Item = FormItem;

  render() {
    const {
      children,
      className,
      labelCol,
      field,
      wrapperCol,
      colon,
      layout,
      labelAlign,
      ...othersProps
    } = this.props;
    return (
      <FormContext.Provider
        value={{ labelCol, wrapperCol, colon, layout, labelAlign, field }}
      >
        <View
          {...othersProps}
          className={cls(
            classSelector,
            className,
            `${classSelector}-${layout}`,
          )}
        >
          {children}
        </View>
      </FormContext.Provider>
    );
  }
}
CForm.contextType = FormContext;

export default CForm;
