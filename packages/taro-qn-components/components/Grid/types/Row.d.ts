import { ComponentClass } from 'react';

export interface RowProps {
  gutter?: number;
  type?: string;
  justify?: string;
  align?: string;
}

declare const Row: ComponentClass<RowProps>;

export default Row;
