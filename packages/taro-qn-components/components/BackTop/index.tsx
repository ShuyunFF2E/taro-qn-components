import React from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import PropTypes, { InferProps } from 'prop-types';
import { CBackTopProps, CBackTopState } from './types/back-top';
import { prefixCls } from '../const';
import CIcon from '../Icon';

import './index.less';

const classSelector = `${prefixCls}-backtop`;

export default class CBackTop extends React.Component<
  CBackTopProps,
  CBackTopState
> {
  public static defaultProps: CBackTopProps;
  public static propTypes: InferProps<CBackTopProps>;

  private goScrollTop = () => {
    const { duration, onClick } = this.props;
    Taro.pageScrollTo({
      scrollTop: 0,
      duration,
      success: () => {
        onClick();
      },
    });
  };

  public render(): JSX.Element {
    const { visible } = this.props;
    return (
      <View className={classSelector}>
        {this.props.children}
        {visible && (
          <View
            className={`${classSelector}-arrowBox`}
            onClick={this.goScrollTop}
          >
            <CIcon type="up" color="#fff" />
          </View>
        )}
      </View>
    );
  }
}

CBackTop.defaultProps = {
  visible: false,
  duration: 450,
  onClick: () => {},
};

CBackTop.propTypes = {
  visible: PropTypes.bool,
  duration: PropTypes.number,
  onClick: PropTypes.func,
};
