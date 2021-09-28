import React from 'react';
import cls from 'classnames';
import { View, Text } from '@tarojs/components';
import PropTypes, { InferProps } from 'prop-types';
import { CAlertProps, CAlertState } from './types/alert';
import { prefixCls } from '../const';
import CIcon from '../Icon';

import './index.less';

const classSelector = `${prefixCls}-alert`;

export default class CAlert extends React.Component<CAlertProps, CAlertState> {
  public static defaultProps: CAlertProps;
  public static propTypes: InferProps<CAlertProps>;

  public render(): JSX.Element {
    const { type, showIcon, message, style } = this.props;
    return (
      <View
        className={cls(
          {
            [`${classSelector}`]: true,
          },
          `${type}`,
        )}
        style={style}
      >
        {showIcon && <CIcon type="help" className="info-icon" />}
        <View className={`${classSelector}-content`}>
          <Text>{message}</Text>
        </View>
      </View>
    );
  }
}

CAlert.defaultProps = {
  type: 'info',
  showIcon: false,
  message: '',
  style: {},
};

CAlert.propTypes = {
  type: PropTypes.string,
  showIcon: PropTypes.bool,
  message: PropTypes.string,
  style: PropTypes.object,
};
