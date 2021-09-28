import React, { Children, cloneElement, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import StepItem from './item';

import {
  HORIZONTAL,
  VERTICAL,
  INLINE,
  CIRCLE,
  DOT,
  PROCESS,
  WAIT,
  FINISH,
} from './constants';

import './index.less';

export default class CSteps extends PureComponent {
  static propTypes = {
    current: PropTypes.number,
    direction: PropTypes.oneOf([HORIZONTAL, VERTICAL, INLINE]),
    type: PropTypes.oneOf([CIRCLE, DOT]),
    children: PropTypes.any,
    onChange: PropTypes.func,
    className: PropTypes.string,
  };

  static defaultProps = {
    current: 0,
    direction: HORIZONTAL,
    type: CIRCLE,
    children: null,
    className: '',
    onChange: () => {},
  };

  static Item = StepItem;

  getStatus(index) {
    const { current } = this.props;

    if (current === index) {
      return PROCESS;
    }

    if (index < current) {
      return FINISH;
    }

    return WAIT;
  }

  render() {
    const {
      direction,
      type,
      children,
      className,
      onChange: rootClick,
      ...stepProps
    } = this.props;
    const classNames = classnames(`cross-step`, direction, type, className);
    const elements = Children.map(children, (Child, index) => {
      const { status, desc, ...props } = Child.props;

      return cloneElement(Child, {
        ...props,
        index,
        status: status || this.getStatus(index),
        onClick: () => {
          rootClick(index);
        },
        desc,
      });
    });

    return (
      <View className={classNames} {...stepProps}>
        {elements}
      </View>
    );
  }
}
