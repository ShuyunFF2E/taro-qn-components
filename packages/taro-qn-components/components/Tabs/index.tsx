import React, {
  Component,
  Children,
  cloneElement,
  isValidElement,
} from 'react';
import PropTypes, { InferProps } from 'prop-types';
import cls from 'classnames';
import { View } from '@tarojs/components';
import Item from './Item/item';
import { prefixCls } from '../const';
import { CTabsProps, CTabsState } from './types/tabs';

import './index.less';

const classSelector = `${prefixCls}-tabs`;
class CTabs extends Component<CTabsProps, CTabsState> {
  public static defaultProps: CTabsProps;
  public static propTypes: InferProps<CTabsProps>;

  static Item = Item;

  private getClick = (item) => {
    if (!!item.disabled) return;
    this.props.onChange(item.tabId);
  };

  public render(): JSX.Element {
    const { children, activeId, type } = this.props;

    const headerArr: any = [];

    const childrenWithProps = Children.map(children, (child: any, index) => {
      const { tab, tabId = index, disabled } = child.props;
      headerArr.push({ tab, tabId, disabled });
      if (isValidElement(child)) {
        return cloneElement(child, {
          activeId: activeId,
        } as any);
      }
      return child;
    });

    return (
      <View
        className={cls({
          [classSelector]: true,
        })}
      >
        <View className={`${classSelector}-header`}>
          <View
            className={cls({
              [`${classSelector}-header-box`]: true,
              [`${classSelector}-border`]: type === 'card',
            })}
          >
            {headerArr.map((item) => (
              <View
                className={cls({
                  [`${classSelector}-header-box-item`]: true,
                  [`${classSelector}-header-box-disabled`]: item.disabled,
                  [`${classSelector}-header-box-line`]: type !== 'card',
                  [`${classSelector}-header-box-card`]: type === 'card',
                  [`${classSelector}-header-box-${type}-active`]:
                    activeId === item.tabId,
                })}
                onClick={() => this.getClick(item)}
              >
                {item.tab}
              </View>
            ))}
          </View>
        </View>
        <View className={`${classSelector}-container`}>
          {childrenWithProps}
        </View>
      </View>
    );
  }
}

export default CTabs;

CTabs.defaultProps = {
  activeId: '',
  // className: '',
  type: 'line',
  // tabPosition: 'top',
  onChange: () => {},
};

CTabs.propTypes = {
  activeId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // className: PropTypes.string,
  type: PropTypes.string,
  // tabPosition: PropTypes.string,
  onChange: PropTypes.func,
};
