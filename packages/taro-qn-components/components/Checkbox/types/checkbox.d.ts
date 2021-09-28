import { MouseEvent, ComponentClass, CSSProperties } from 'react';

export interface CheckboxOption<T> {
  value: T;
  label: string;
  disabled?: boolean;
  indeterminate?: boolean;
}

export interface CCheckboxProps<T> {
  className?: string;
  style?: CSSProperties;
  value?: T;
  checked?: boolean;
  indeterminate?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: ({ checked: boolean, value: any }) => void;
}

export interface CCheckboxState {
  checked: boolean;
}

export interface CCheckboxGroupProps<T> {
  disabled?: boolean;
  options: CheckboxOption<T>;
  value?: Array<T>;
  onChange?: (checkedValue: Array<T>) => void;
}

export interface CheckboxGroupContext {
  toggleOption?: (option: CCheckboxProps) => void;
  value?: Array<T>;
  disabled?: boolean;
}

declare const CCheckbox: ComponentClass<CCheckboxProps<any>>;

export default CCheckbox;
