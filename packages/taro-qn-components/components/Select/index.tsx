/*
 * @Author: sevenFlow
 * @Date: 2021-07-12 15:40:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-26 14:40:54
 * @Description: select组件
 */
import React, { useState } from 'react';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import SelectInput from './components/SelectInput';
import SelectPanel from './components/SelectPanel';
import { SelectProps, SelectData } from './types';
import { prefixCls } from '../const';

import './index.less';

const classSelector = `${prefixCls}-select`;

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = '请选择',
  onChange,
  className,
  style,
  disabled,
  showSearch = false,
  defaultValue,
  allowClear,
  size = 'default',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultVal = defaultValue
    ? options.filter((res) => res.key === defaultValue)[0]
    : null;

  const [selectItemData, setSelectItemData] = useState(defaultVal);

  const newSelectData = options.map((res) => {
    return { ...res, isShow: true };
  });

  const [selectData, setSelectData] = useState<SelectData>(newSelectData);

  const onClickHandler = () => {
    if (disabled) return;

    setIsOpen(!isOpen);
  };

  const onSelectChange = (item) => {
    if (item.disabled) return;

    setSelectItemData(item);

    setIsOpen(false);

    onChange && onChange(item);
  };

  // 搜索事件
  const onSearch = (val) => {
    const data = val
      ? selectData.filter((res) => res.value.toString().indexOf(val) !== -1)
      : newSelectData;

    setSelectData(data);
  };

  // 清除选中值
  const onClearSelect = () => {
    setSelectItemData(null);

    onChange && onChange(null);
  };

  return (
    <View className={classnames(classSelector, className)}>
      <View className={`${classSelector}-container`} style={style}>
        <SelectInput
          isOpen={isOpen}
          selectedVal={selectItemData?.value}
          onEventInput={onClickHandler}
          placeholder={placeholder}
          disabled={disabled}
          showSearch={showSearch}
          onSearch={onSearch}
          allowClear={allowClear}
          onClearSelect={onClearSelect}
          size={size}
        />
        <SelectPanel
          options={selectData}
          isOpen={isOpen}
          onItemClick={onSelectChange}
          showSearch={showSearch}
          selectKey={selectItemData?.key}
        />
      </View>
    </View>
  );
};

export default Select;
