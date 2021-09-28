import React from 'react';
import PropTypes from 'prop-types';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import { View } from '@tarojs/components';
import { ItemProps } from './types/breadcrumb';

export default class BreadcrumbItem extends React.Component<ItemProps> {
  static propTypes = {
    title: PropTypes.any,
    href: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    title: null,
    href: '',
    className: '',
  };

  goTap = () => {
    const { href } = this.props;
    if (!href) return false;
    if (href.includes('http')) {
      window.location.href = href;
    } else {
      Taro.navigateTo({
        url: href,
      });
    }
  };

  render() {
    const { title, className } = this.props;

    return (
      <View className="cross-breadcrumb-item" onClick={this.goTap}>
        <View className={classnames(`cross-breadcrumb-title ${className}`)}>
          {title}
        </View>
      </View>
    );
  }
}
