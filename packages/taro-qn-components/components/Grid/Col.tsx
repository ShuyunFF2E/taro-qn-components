import React, { Component } from 'react';
import { View } from '@tarojs/components';
import PropTypes, { InferProps } from 'prop-types';
import cls from 'classnames';
import { ColProps } from './types/Col';
import GridContext from './context';
import './col.less';

export default class Col extends Component<ColProps> {
  public static defaultProps: ColProps;
  public static propTypes: InferProps<ColProps>;
  public getStyle(value): { paddingLeft: string; paddingRight: string } {
    const style = {
      paddingLeft: '0px',
      paddingRight: '0px',
    };

    if (value.gutter) {
      style.paddingLeft = `${value.gutter / 2}px`;
      style.paddingRight = style.paddingLeft;
    }

    return style;
  }
  public render(): JSX.Element {
    let classList: string[] = [];

    ['span', 'offset', 'pull', 'push'].forEach((prop) => {
      if (this.props[prop] >= 0) {
        classList.push(
          prop !== 'span'
            ? `el-col-${prop}-${this.props[prop]}`
            : `el-col-${this.props[prop]}`,
        );
      }
    });

    ['xs', 'sm', 'md', 'lg'].forEach((size) => {
      if (typeof this.props[size] === 'object') {
        let props = this.props[size];
        Object.keys(props).forEach((prop) => {
          classList.push(
            prop !== 'span'
              ? `el-col-${size}-${prop}-${props[prop]}`
              : `el-col-${size}-${props[prop]}`,
          );
        });
      } else if (this.props[size] >= 0) {
        classList.push(`el-col-${size}-${Number(this.props[size])}`);
      }
    });
    return (
      <GridContext.Consumer>
        {(value) => (
          <View
            className={cls('el-col', classList)}
            style={this.getStyle(value)}
          >
            {this.props.children}
          </View>
        )}
      </GridContext.Consumer>
    );
  }
}

Col.propTypes = {
  span: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pull: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  push: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  xs: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
  sm: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
  md: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
  lg: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Col.defaultProps = {
  span: 24,
};
