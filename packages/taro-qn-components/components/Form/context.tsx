import { createContext } from 'react';
import { FormContextTypes } from './types/form';

const FormContext = createContext<FormContextTypes>({
  labelCol: {},
  wrapperCol: {},
  colon: true,
  layout: 'horizontal',
  labelAlign: 'right',
  field: {},
});

export default FormContext;
