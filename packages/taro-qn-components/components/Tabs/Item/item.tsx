import React, { Component } from 'react';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import { ItemProps } from '../types/tabs';

class Item extends Component<ItemProps> {
  static propTypes = {
    currentKey: PropTypes.any,
  };

  static defaultProps = {
    currentKey: 1,
  };

  render() {
    const { tabId, activeId, children } = this.props;
    return (
      <View
        className="cross-tabs-item"
        key={`${tabId}`}
        style={{
          display: `${Number(tabId) === Number(activeId) ? 'block' : 'none'}`,
          background: '#fff',
        }}
      >
        {children}
      </View>
    );
  }
}

export default Item;
