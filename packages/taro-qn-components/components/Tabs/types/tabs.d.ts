import { ComponentClass, ReactNode } from 'react';

export interface CTabsProps {
  /**
   * 当前激活面板的key
   */
  activeId: string | number;

  /**
   * 自定义额外类名
   */
  // className?: string

  /**
   * 选中的 tab 改变时
   * @return {string | number} 返回选中的tabId
   */
  onChange: (tabId: string | number) => any;

  /**
   * tabs 组件类型
   * @default line
   */

  type?: 'line' | 'card';

  /**
   * 页签位置，可选值有 top left
   * @default top
   */
  // tabPosition?: 'top'  | 'left'

  children?: ReactChild;
}

export interface ItemProps {
  /**
   * 该 TabItem 所对应的内容
   */
  tab: ReactNode;

  /**
   * 该 TabItem 的 id
   */
  tabId: string | number;

  /**
   * 该 TabItem 是否被禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 被隐藏时是否渲染 DOM 结构
   * @default true
   */
  forceRender?: boolean;

  /**
   * 该 TabItem 上添加的额外 className
   */
  className?: string;

  activeId: string | number;
}

export interface CTabsState {}

declare const CTabsProps: ComponentClass<CTabsProps>;
