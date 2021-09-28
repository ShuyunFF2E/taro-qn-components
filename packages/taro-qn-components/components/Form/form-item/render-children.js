import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { View } from '@tarojs/components';
import { noop } from '../../const';
import FormContext from '../context';

const DATA_FIELD = 'cross-field-data';
import '../index.less';

export default class RenderChildren extends Component {
  static contextType = FormContext;

  static propTypes = {
    children: PropTypes.any,
  };

  static defaultProps = {
    children: null,
  };

  get field() {
    return this.context.field;
  }

  renderChildren(children) {
    if (['object', 'string', 'array'].indexOf(typeof children) === -1) {
      return children;
    }

    return Children.map(children, (child, key) => {
      if (!child) return null;

      const { props } = child;

      if (!props) return child;
      if (props && props[DATA_FIELD]) {
        const { getState = noop, getError = noop } = this.field;

        const state = getState.call(this.field, props[DATA_FIELD]);
        const error = getError.call(this.field, props[DATA_FIELD]);

        return (
          <>
            <View
              key={key.toString()}
              className={classnames('cross-form-item-input', {
                'has-error': state === 'error',
              })}
            >
              <View className="cross-form-item-input-content">
                {cloneElement(child, child.props)}
              </View>
            </View>
            {error && <View className="cross-form-item-error">{error}</View>}
          </>
        );
      }

      let items = props.children;

      if (
        props.children &&
        Children.count(props.children) &&
        !props[DATA_FIELD]
      ) {
        items = this.renderChildren(props.children);
      }

      return cloneElement(child, { key, ...child.props, children: items });
    });
  }

  render() {
    const { children } = this.props;

    return this.renderChildren(children);
  }
}
