import React, { Children, cloneElement, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';
import cls from 'classnames';
import { CBreadcrumbProps, CBreadcrumbState } from './types/breadcrumb';
import Item from './item';
import { prefixCls } from '../const';

import './index.less';

const classSelector = `${prefixCls}-breadcrumb`;
export default class CBreadcrumb extends PureComponent<
  CBreadcrumbProps,
  CBreadcrumbState
> {
  static propTypes = {
    breads: PropTypes.array,
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    breads: [],
    children: null,
    className: '',
  };

  static Item = Item;

  render() {
    const { children, className, breads } = this.props;
    const classNames = cls(`${classSelector}`, className);
    let elements = null;
    if (breads && breads.length <= 0) {
      elements = Children.map(children, (Child: any, index) => {
        const { title } = Child.props;
        return cloneElement(Child, {
          index,
          title,
        });
      });
    } else {
      elements = breads.map((item, index) => (
        <Item key={`bread_${index}`} {...item} />
      ));
    }

    return <View className={classNames}>{elements}</View>;
  }
}
