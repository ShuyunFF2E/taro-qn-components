import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { View } from '@tarojs/components';
import { prefixCls } from '../const';
/* eslint-disable-next-line */
import Group from './group';

import './index.less';

const classSelector = `${prefixCls}-radio`;

class CRadio extends Component {
  static propTypes = {
    value: PropTypes.node.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    checked: false,
    onChange: () => {},
  };

  static Group = Group;

  onChangeAction(evt) {
    const { value, onChange, disabled } = this.props;
    if (disabled) return;
    onChange(value, evt);
  }

  render() {
    const { checked, children, className = '', style, disabled } = this.props;
    const wrapCls = `${classSelector}-wrapper ${checked ? 'checked': ''} ${disabled ? 'disabled': ''}`;

    return (
      <View className={classnames(classSelector, className)} style={style} onClick={this.onChangeAction.bind(this)}>
        <View className={wrapCls}>
          <View className={`${classSelector}-inner`} />
        </View>
        <View className={classnames(`${classSelector}-text`, { disabled })}>{children}</View>
      </View>
    );
  }
}

export default CRadio;
