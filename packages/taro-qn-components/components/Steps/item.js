import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { View, Text } from '@tarojs/components';

import CIcon from '../Icon';

import { WAIT, FINISH, PROCESS } from './constants';

export default class StepItem extends React.Component {
  static propTypes = {
    status: PropTypes.oneOf([WAIT, PROCESS, FINISH]),
    title: PropTypes.any,
    desc: PropTypes.any,
    index: PropTypes.number,
    className: PropTypes.string,
  };

  static defaultProps = {
    status: null,
    title: null,
    desc: null,
    index: null,
    className: '',
  };

  render() {
    const { index, status, title, desc, className, onClick } = this.props;
    const iconNumber = index + 1;

    return (
      <View className={classnames(`cross-step-item`, status, className)}>
        <View
          className={classnames(`cross-step-icon`, status)}
          onClick={onClick}
        >
          {status === FINISH ? (
            <CIcon type="check" />
          ) : (
            <Text>{iconNumber}</Text>
          )}
        </View>

        <View className={classnames(`cross-step-body`)}>
          {/* title */}
          <View className={classnames(`cross-step-title`)}>{title}</View>

          {/* desc */}
          {desc && (
            <View className={classnames(`cross-step-content`)}>{desc}</View>
          )}
        </View>
      </View>
    );
  }
}
