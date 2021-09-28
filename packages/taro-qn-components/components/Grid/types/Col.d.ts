import { ComponentClass } from 'react';

export interface ColProps {
  maxValue?: number;
  customStyle?: object | string;
  className?: string | array;
  span?: number | string;
  offset?: number | string;
  pull?: number | string;
  push?: number | string;
  xs?: number | string | object;
  sm?: number | string | object;
  md?: number | string | object;
  lg?: number | string | object;
  gutter?: number;
}

declare const Col: ComponentClass<ColProps>;

export default Col;
