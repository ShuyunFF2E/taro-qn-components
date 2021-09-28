import { createContext } from 'react';
import { CheckboxGroupContext } from './types/checkbox';

const CheckboxGroupContext = createContext<CheckboxGroupContext | null>(null);

export default CheckboxGroupContext;
