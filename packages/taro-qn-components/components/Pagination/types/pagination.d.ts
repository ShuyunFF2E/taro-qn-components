import { ComponentClass, CSSProperties } from 'react';

export interface CPaginationProps {
  /**
   * 当前页
   * @default 0
   */
  current?: number;

  /**
   * 每页数据量
   * @default 10
   */
  pageSize?: number;

  /**
   * 数据总量
   * @default 0
   */

  total?: number;

  /**
   * 指定每页可以显示多少条
   * @default [10, 20, 30, 40]
   */
  pageSizeOptions?: number[];

  /**
   * 是否展示每页显示多少条下拉选项
   * @default false
   */
  showPageSizeOptions?: boolean;

  /**
   * 是否可以快速跳转至某页
   * @default false
   */
  showQuickJumper?: boolean;

  /**
   * 点击页码按钮时触发
   */
  onChange?: CommonEventFunction;

  /**
   * 样式增加
   */
  style?: CSSProperties;
}

export interface CPaginationState {
  current: number;
  pagesLength: number;
  inputPage: string;
  pageSizeOptions?: string[];
}

declare const CPaginationProps: ComponentClass<CPaginationProps>;

export default CPaginationProps;
