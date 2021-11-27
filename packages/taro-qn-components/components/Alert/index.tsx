import React from 'react';
import cls from 'classnames';
import { View } from '@tarojs/components';
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
    const { type = 'info', showIcon, icon, title, message, style, titleStyle, messageStyle } = this.props;
    const icones = {
      info: 'info',
      success: 'success',
      warning: 'warn',
      error: 'error',
    };
    const iconType = icon || icones[type];
    const msgArr = Array.isArray(message) ? message : [message || ''];
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
        {showIcon && <CIcon type={iconType} className="alert-icon" />}
        <View className={`${classSelector}-content`}>
          {title && (
            <View className={`${classSelector}-content-title`} style={titleStyle}>
              {title}
            </View>
          )}
          {msgArr.map((item, index) => (
            <View key={index} style={messageStyle}>
              {item}
            </View>
          ))}
        </View>
      </View>
    );
  }
}

CAlert.defaultProps = {
  type: 'info',
  showIcon: false,
  icon: '',
  title: '',
  message: '',
  style: {},
  titleStyle: {},
  messageStyle: {},
};

CAlert.propTypes = {
  type: PropTypes.string,
  showIcon: PropTypes.bool,
  icon: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  style: PropTypes.object,
  titleStyle: PropTypes.object,
  messageStyle: PropTypes.object,
};
