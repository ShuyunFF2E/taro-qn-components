interface OptionsItem {
  value: string | number;
  key: string | number;
  disabled?: boolean;
  children?: OptionsItem[];
}

export type SearchVal = string | number | undefined | null;
export interface CascaderProps {
  /**
   * 子项渲染数据
   * @requires 必填
   */
  options: OptionsItem[];
  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * 每次选择的响应事件
   */
  onChange?: (SelectVal, SelectItem) => void;
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
   * 支持清除
   */
  allowClear?: boolean;
  /**
   * 传入默认值 必须是key
   */
  defaultValue?: SelectVal;
  /**
   * 大小
   */
  size?: SelectSize;
}

export interface InputProps {
  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * input 触发事件
   * @requires 必填
   */
  onInputEvent: (isOpen?: boolean) => void;
  /**
   * 是否打开选择面板
   * @requires 必填
   */
  isOpen: boolean;
  /**
   * 选择的value
   * @requires 必填
   */
  selectValue: null | string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 支持清除
   */
  allowClear?: boolean;
  /**
   * 清除函数
   */
  onClear: () => void;
  /**
   * 是否启用搜索模式
   */
  showSearch?: boolean;
  /**
   * 搜索change事件
   */
  onSearch: (SearchVal) => void;
  /**
   * 大小
   */
  size?: SelectSize;
}

export interface PanelProps {
  /**
   * 子项渲染数据
   * @requires 必填
   */
  options: OptionsItem[];
  /**
   * 是否打开选择面板
   * @requires 必填
   */
  isOpen: boolean;
  /**
   * 选定事件
   * @requires 必填
   */
  onSelectItem: (SelectVal, SelectItem) => void;
  /**
   * 选定数据
   * @requires 必填
   */
  selectKeyArr: SelectVal;
  /**
   * 是否启用搜索模式
   */
  showSearch?: boolean;
  /**
   * 搜索值
   */
  searchValue?: SearchVal;
  /**
   * 关闭面板
   */
  closePanel?: () => void;
}

export type PanelData = OptionsItem[][];

export type SelectVal = (string | number)[];

export type SelectItem = OptionsItem[];

export type SearchVal = string | number | undefined | null;

export type SearchData = SearchItemData[];
export interface SearchItemData {
  key: string;
  value: string;
  item: OptionsItem[];
}

export type OriginDataToSearchDataFnType = (data: OptionsItem[]) => SearchData;

export type TransformOriginDataFnType = (
  optionData: OptionsItem[],
) => PanelData;
