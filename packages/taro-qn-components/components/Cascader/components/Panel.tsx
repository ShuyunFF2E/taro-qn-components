import React, { useEffect, useMemo, useState } from 'react';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import { prefixCls } from '../../const';
import CIcon from '../../Icon';
import {
  PanelProps,
  PanelData,
  SelectVal,
  SelectItem,
  SearchData,
  OriginDataToSearchDataFnType,
  TransformOriginDataFnType,
} from '../type';

const classSelector = `${prefixCls}-cascader`;

const SelectPanel: React.FC<PanelProps> = ({
  options,
  isOpen,
  onSelectItem,
  selectKeyArr,
  showSearch,
  searchValue,
  closePanel,
}) => {
  // 渲染数据
  const [data, setData] = useState<PanelData>([]);

  // 搜索渲染数据
  const [searchData, setSearchData] = useState<SearchData>([]);

  // 选择值
  const [selectKey, setSelectKey] = useState<SelectVal>(selectKeyArr);

  // 选择的item值
  const [selectItem, setSelectItem] = useState<SelectItem>([]);

  useEffect(() => {
    // 初始化渲染数据
    if (!selectKeyArr.length) {
      initRenderData();
      return;
    }

    // 如果有选中值
    selectedRenderData();
  }, [isOpen]);

  // 处理搜索渲染数据
  useEffect(() => {
    if (!showSearch) return;

    setSearchData(originDataToSearchData(options));
  }, [showSearch]);

  // 搜索结果数据
  const searchResultData = useMemo<SearchData>(() => {
    if (!showSearch || !searchValue) return [];

    return searchData.filter(
      (res) => res.value.indexOf(searchValue + '') !== -1,
    );
  }, [searchValue, showSearch]);

  // 初始化渲染数据
  const initRenderData = () => {
    setData([options]);

    setSelectKey([]);

    setSelectItem([]);
  };

  // 处理传入数据到搜索数据
  const originDataToSearchData: OriginDataToSearchDataFnType = (data) => {
    const result = transformOriginData(data)
      .filter((res) => res.every((item) => !item.disabled))
      .map((res) => {
        const value = res.map((item) => item.value).join('/');

        const key = res.map((item) => item.key).join('/');

        return {
          value,
          key,
          item: res,
        };
      });

    return result;
  };

  // 递归处理原始数据
  const transformOriginData: TransformOriginDataFnType = (optionData) => {
    let noChildrenObj: PanelData = [];

    let ChildrenObj: PanelData = [];

    optionData.forEach((res) => {
      if (res.children) {
        transformOriginData(res.children).forEach((noChildrenItem) => {
          ChildrenObj.push([res, ...noChildrenItem]);
        });
      } else {
        noChildrenObj.push([res]); // 用数组包住是为了和其他数据保持一致
      }
    });

    return [...noChildrenObj, ...ChildrenObj];
  };

  // 有选中值处理渲染数据
  const selectedRenderData = () => {
    setSelectKey(selectKeyArr);

    const newItemData = queryOption(options, selectKeyArr);

    setSelectItem(newItemData);

    const newChildrenData = [options];

    newItemData.forEach((res) => {
      if (res.children) {
        newChildrenData.push(res.children);
      }
    });

    setData(newChildrenData);
  };

  // 查找options里的渲染
  const queryOption = (optionData, arr) => {
    if (arr.length <= 0) return [];

    const newArr = arr.slice(1);

    let valueArr: SelectItem = [];

    optionData.forEach((res) => {
      if (res.key === arr[0]) {
        const val = queryOption(res.children, newArr);

        valueArr = [res, ...val];
      }
    });

    return valueArr;
  };

  // 每一项的点击
  const itemOptionClick = (index, item) => {
    if (item.disabled) return;

    // 选中值
    const newSelectKey = index === 0 ? [] : [...selectKey];

    newSelectKey[index] = item.key;

    setSelectKey(newSelectKey);

    // 选中数据
    const newSelectItem = index === 0 ? [] : [...selectItem];

    newSelectItem[index] = item;

    setSelectItem(newSelectItem);

    // 如果没有children 代表最后一项
    if (!item.children) {
      onSelectItem(newSelectKey, newSelectItem);

      return;
    }

    // 渲染数据
    const newData = data.slice(0, index + 1);

    newData[index + 1] = item.children;

    setData(newData);
  };

  // 搜索面板点击
  const searchPlanClick = ({ key, item }) => {
    // 设置选中KEY
    const keyArr = key.split('/');

    setSelectKey(keyArr);

    // 设置选中item
    setSelectItem(item);

    // 传递值
    onSelectItem(keyArr, item);
  };

  return (
    <View
      className={classnames({
        [`${classSelector}-options`]: true,
        [`${classSelector}-options-hidden`]: !isOpen,
      })}
    >
      <View className={`${classSelector}-options-container`}>
        {options &&
          !searchValue &&
          data.map((res, index) => (
            <View key={index} className={`${classSelector}-options-box`}>
              {res.map((item, itemIndex) => (
                <View
                  key={itemIndex}
                  className={classnames(`${classSelector}-options-item`, {
                    [`${classSelector}-options-item-disable`]: item.disabled,
                    [`${classSelector}-options-item-select`]:
                      selectKey[index] === item.key,
                  })}
                  onClick={() => {
                    itemOptionClick(index, item);
                  }}
                >
                  {item.value}
                  {item.children && (
                    <CIcon
                      type="arrow_right"
                      className={`${classSelector}-options-item-icon`}
                    />
                  )}
                </View>
              ))}
            </View>
          ))}
        {!!searchResultData.length && (
          <View className={`${classSelector}-options-search`}>
            {searchResultData?.map((res, index) => (
              <View
                key={index}
                className={`${classSelector}-options-search-item`}
                onClick={() => {
                  searchPlanClick(res);
                }}
              >
                {res.value}
              </View>
            ))}
          </View>
        )}
      </View>
      <View className={`${classSelector}-close-button`} onClick={closePanel}>
        关闭
      </View>
    </View>
  );
};

export default SelectPanel;
