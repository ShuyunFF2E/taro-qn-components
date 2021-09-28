import React, { useMemo, useState } from 'react';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import Input from './components/Input';
import Panel from './components/Panel';
import { CascaderProps, SelectVal } from './type';
import { prefixCls } from '../const';

import './index.less';

const classSelector = `${prefixCls}-cascader`;

const Cascader: React.FC<CascaderProps> = ({
  options,
  onChange = () => {},
  disabled = false,
  className,
  style,
  placeholder = '请选择',
  defaultValue = [],
  allowClear = true,
  showSearch,
  size = 'default',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectKeyArr, setSelectKeyArr] = useState(defaultValue);

  const [searchValue, setSearchValue] = useState(null);

  // 选中某个值
  const onSelectItem = (selectKey, selectItem) => {
    setIsOpen(false);

    setSelectKeyArr(selectKey);

    onChange && onChange(selectKey, selectItem);
  };

  // 查找options里的value
  const queryOptionValue = (optionData, arr) => {
    if (arr.length <= 0) return [];

    const newArr = arr.slice(1);

    let valueArr: SelectVal = [];

    optionData.forEach((res) => {
      if (res.key === arr[0]) {
        const val = queryOptionValue(res.children, newArr);
        valueArr = [res.value, ...val];
      }
    });

    return valueArr;
  };

  // 显示值
  const showVal = useMemo(() => {
    if (!selectKeyArr.length) return null;

    const selectValueArr = queryOptionValue(options, selectKeyArr);

    return selectValueArr ? selectValueArr.join('/') : null;
  }, [options, selectKeyArr]);

  // 清除选中值
  const onClear = () => {
    setSelectKeyArr([]);

    onChange && onChange([], []);

    setIsOpen(false);
  };

  // 搜索事件
  const onSearch = (val) => {
    setSearchValue(val);
  };

  return (
    <View className={classnames(classSelector, className)}>
      <View className={`${classSelector}-container`} style={style}>
        <Input
          onSearch={onSearch}
          disabled={disabled}
          placeholder={placeholder}
          onInputEvent={(openState) => {
            if (disabled) return;

            setIsOpen(openState || !isOpen);
          }}
          isOpen={isOpen}
          selectValue={showVal}
          allowClear={allowClear}
          onClear={onClear}
          showSearch={showSearch}
          size={size}
        />
        <Panel
          options={options}
          isOpen={isOpen}
          onSelectItem={onSelectItem}
          selectKeyArr={selectKeyArr}
          showSearch={showSearch}
          searchValue={searchValue}
          closePanel={() => {
            setIsOpen(false);
          }}
        />
      </View>
    </View>
  );
};

export default Cascader;
