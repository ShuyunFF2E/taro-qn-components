import React from 'react';
import { View, Text } from '@tarojs/components';
import cls from 'classnames';
import { prefixCls } from '../const';
import Icon from '../Icon';

import { CCollapseItemProps } from './types/index';
import './index.less';

const noop = () => {};
export default function CollapseItem({
  extra,
  children,
  header,
  isActive,
  name = '',
  bordered,
  showArrow = true,
  onClick = noop,
}: CCollapseItemProps) {
  return (
    <View className={`${prefixCls}-collapse-item`}>
      <View
        className={cls(`${prefixCls}-collapse-header`, {
          [`${prefixCls}-collapse-header-isActive`]: bordered && isActive,
        })}
        onClick={() => onClick(name)}
      >
        <View className={`${prefixCls}-collapse-header-title`}>
          {showArrow && (
            <Icon
              className={cls(`${prefixCls}-collapse-header-icon`, {
                [`${prefixCls}-collapse-header-icon-isActive`]: isActive,
              })}
              type="arrow_right"
            />
          )}
          <Text>{header}</Text>
        </View>
        <View className={`${prefixCls}-collapse-header-right`}>{extra}</View>
      </View>
      <View
        className={cls(`${prefixCls}-collapse-item-content`, {
          [`${prefixCls}-collapse-item-isActive`]: isActive,
        })}
      >
        {children}
      </View>
    </View>
  );
}
