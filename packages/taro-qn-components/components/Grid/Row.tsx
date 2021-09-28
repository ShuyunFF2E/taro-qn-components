import React, { Component } from 'react';
import { View } from '@tarojs/components';
import cls from 'classnames';
import PropTypes, { InferProps } from 'prop-types';
import { RowProps } from './types/Row';
import GridContext from './context';
import './row.less';

export default class Row extends Component<RowProps> {
  public static defaultProps: RowProps;
  public static propTypes: InferProps<RowProps>;
  public getStyle(): { marginLeft: string; marginRight: string } {
    const style = {
      marginLeft: '0px',
      marginRight: '0px',
    };

    if (this.props.gutter) {
      style.marginLeft = `-${this.props.gutter / 2}px`;
      style.marginRight = style.marginLeft;
    }

    return style;
  }
  public render(): JSX.Element {
    let { gutter } = this.props;
    gutter = gutter || 0;
    return (
      <View
        style={this.getStyle()}
        className={cls(
          'el-row',
          this.props.justify !== 'start' && `is-justify-${this.props.justify}`,
          this.props.align !== 'top' && `is-align-${this.props.align}`,
          {
            'el-row--flex': this.props.type === 'flex',
          },
        )}
      >
        <GridContext.Provider value={{ gutter }}>
          {this.props.children}
        </GridContext.Provider>
      </View>
    );
  }
}

Row.propTypes = {
  gutter: PropTypes.number,
  type: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
};

Row.defaultProps = {
  justify: 'start',
  align: 'top',
};
