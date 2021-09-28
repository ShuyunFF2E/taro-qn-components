/*
 * @Author: sevenFlow
 * @Date: 2021-07-13 10:38:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-25 17:32:20
 * @Description:
 */
import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import { prefixCls } from '../../const';
import { SelectPanelProps } from './../types';

const classSelector = `${prefixCls}-select`;

const SelectPanel: React.FC<SelectPanelProps> = ({
  options,
  isOpen,
  onItemClick,
  selectKey,
}) => {
  const [selectDataKey, setSelectKey] = useState(selectKey);

  useEffect(() => setSelectKey(selectKey), [selectKey]);

  return (
    <View
      className={classnames({
        [`${classSelector}-options`]: true,
        [`${classSelector}-options-hidden`]: !isOpen,
      })}
    >
      {options &&
        options.map((item, index) => {
          return (
            <View
              key={index}
              className={classnames(`${classSelector}-options-item`, {
                [`${classSelector}-options-item-disable`]: item.disabled,
                [`${classSelector}-options-item-select`]:
                  item.key === selectDataKey,
              })}
              onClick={() => {
                onItemClick(item);
              }}
            >
              {item.value}
            </View>
          );
        })}
    </View>
  );
};

export default SelectPanel;
