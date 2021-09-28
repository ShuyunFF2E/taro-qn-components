import React, { Component } from 'react';
import { View } from '@tarojs/components';
import PropTypes, { InferProps } from 'prop-types';
import cls from 'classnames';
import { CProgressProps } from './types/progress';
import { prefixCls } from '../const';
import CIcon from '../Icon';

import './index.less';

const classSelector = `${prefixCls}-progress`;

export default class Progress extends Component<CProgressProps> {
  public static defaultProps: CProgressProps;
  public static propTypes: InferProps<CProgressProps>;

  render() {
    const { showInfo, color, strokeWidth, status } = this.props;

    let { percent } = this.props;

    if (typeof percent !== 'number') {
      percent = 0;
    }

    if (percent < 0) {
      percent = 0;
    } else if (percent > 100) {
      percent = 100;
    }

    const rootClass = cls(classSelector, {
      [`${prefixCls}-progress--${status}`]: !!status,
    });

    const progressStyle = {
      width: percent && `${+percent}%`,
      height: strokeWidth && `${+strokeWidth}px`,
      backgroundColor: color,
    };

    return (
      <View className={rootClass}>
        <View className="cross-progress__outer">
          <View className="cross-progress__outer-inner">
            <View
              className="cross-progress__outer-inner-background"
              style={progressStyle}
            />
          </View>
        </View>
        {showInfo && (
          <View className="cross-progress__content">
            {!status || status === 'progress' ? (
              `${percent}%`
            ) : (
              <CIcon
                type={`${status === 'error' ? 'shanchu' : 'success'}`}
                color={`${status === 'error' ? '#ff4d4f' : '#52c41a'}`}
                size={16}
              />
            )}
          </View>
        )}
      </View>
    );
  }
}

Progress.defaultProps = {
  percent: 0,
  showInfo: true,
  color: '#188fffcc',
  strokeWidth: 8,
  status: undefined,
};

Progress.propTypes = {
  percent: PropTypes.number,
  showInfo: PropTypes.bool,
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
  status: PropTypes.string,
};
