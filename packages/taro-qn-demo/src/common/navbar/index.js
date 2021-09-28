/**
 * 为页面级统一添加返回页面按钮，方便页面展示操作
 */
import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { CIcon } from 'taro-qn-components';
import Taro from '@tarojs/taro';

import './index.less';

export const NavBar = () => (WrappedComponent) => {
  return class WithNavBar extends Component {
    goBack = () => {
      Taro.navigateBack();
    };
    render() {
      return (
        <View className="page-container">
          <View className="header-bar">
            <View
              onClick={this.goBack}
              style={{ marginLeft: 20, cursor: 'pointer' }}
            >
              <CIcon type="arrow_left" />
              返回
            </View>
            {/* <View className="title">{params}</View> */}
          </View>
          <View className="content">
            <WrappedComponent {...this.props} />
          </View>
        </View>
      );
    }
  };
};
