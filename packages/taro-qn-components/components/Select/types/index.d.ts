import React from 'react';

export interface Options {
  value: string | number;
  key: string | number;
  disabled?: boolean;
}

export interface SelectItemData extends Options {
  isShow: boolean;
}

export type SelectData = SelectItemData[];

export interface SelectProps {
  /**
   * 子项渲染数据
   * @requires 必填
   */
  options: Options[];
  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * 每次选择的响应事件
   */
  onChange?: (SelectData) => void;
  /**
   * 自定义class
   */
  className?: string;
  /**
   * 自定义style
   */
  style?: React.CSSProperties;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否启用搜索模式
   */
  showSearch?: boolean;
  /**
   * 传入默认值 必须是key
   */
  defaultValue?: string | number;
  /**
   * 支持清除
   */
  allowClear?: boolean;
  /**
   * 大小
   */
  size?: SelectSize;
}

export type SearchVal = string | number | undefined | null;

type SelectSize = 'large' | 'small' | 'default';

export interface SelectInputProps {
  /**
   * 面板是否打开
   * @requires 必填
   */
  isOpen: boolean;
  /**
   * select的触发器
   * @requires 必填
   */
  onEventInput: (type?: string) => void;
  /**
   * 选中的值
   */
  selectedVal: string | number | undefined | null;
  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否启用搜索模式
   */
  showSearch?: boolean;
  /**
   * 搜索change事件
   */
  onSearch: (SearchVal) => void;
  /**
   * 支持清除
   */
  allowClear?: boolean;
  /**
   * 大小
   */
  size?: SelectSize;
  /**
   * 清除事件
   */
  onClearSelect: () => void;
}

export interface SelectPanelProps {
  /**
   * 子项渲染数据
   * @requires 必填
   */
  options: SelectData;
  /**
   * 面板是否打开
   * @requires 必填
   */
  isOpen: boolean;
  /**
   * select子项的触发器
   * @requires 必填
   */
  onItemClick: (SelectData) => void;
  /**
   * 是否启用搜索模式
   */
  showSearch?: boolean;
  /**
   * 是否启用搜索模式
   */
  showSearch?: boolean;
  /**
   * 传入默认值 必须是key
   */
  selectKey?: string | number;
}
