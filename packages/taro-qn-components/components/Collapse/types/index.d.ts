import React, { ComponentClass, ReactElement } from 'react';

export interface CCollapseProps {
  /**
   * 当前激活面板的 key
   * @default []
   */
  value: Array;
  /**
   * 手风琴模式，每次只打开一个 tab
   * @default false
   */
  accordion?: boolean;
  /**
   * 切换面板的回调
   * @default () => {}
   */
  onChange: (value: string[]) => void;
  children?: any;
}

export interface CCollapseItemProps {
  /**
   * 自定义渲染每个面板右上角的内容
   */
  extra?: ReactNode;
  /**
   * 面板头内容
   * @default ''
   */
  header?: string;
  /**
   * 当前面板是否激活
   * @default false
   */
  isActive?: boolean;
  /**
   * 当前面板的key
   * @default index
   */
  name?: string;
  /**
   * 是否展示header与content中间的分割线
   * @default true
   */
  bordered?: boolean;
  /**
   * 是否展示header左侧icon
   * @default true
   */
  showArrow?: boolean;
  /**
   * 切换面板的回调
   * @default () => {}
   */
  onClick?: (value: string) => void;
  children?: any;
}

export interface CCollapseState {
  /**
   * 已经激活的面板
   * @default []
   */
  [activeNames: string]: Array<string>;
}

declare const CCollapseProps: ComponentClass<CCollapseProps>;

export default CCollapseProps;
