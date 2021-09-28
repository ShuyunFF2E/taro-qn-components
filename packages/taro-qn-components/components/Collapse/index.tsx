import React, { Children, cloneElement, Component } from 'react';
import { View } from '@tarojs/components';
import CCollapseItem from './item';
import { CCollapseProps, CCollapseState } from './types';
import { prefixCls } from '../const';
import './index.less';

const C_COLLAPSE = 'C_COLLAPSE';

class Collapse extends Component<CCollapseProps, CCollapseState> {
  constructor(props: CCollapseProps) {
    super(props);
    this.state = {
      activeNames: [].concat(props.value),
    };
  }

  static Item = CCollapseItem;

  static defaultProps: CCollapseProps = {
    value: [],
    accordion: false,
    onChange: () => {},
  };

  setActiveNames = (activeNames: Array<string>): void => {
    const { onChange } = this.props;
    this.setState({ activeNames }, () => {
      onChange(activeNames);
      console.log(this.state);
    });
  };

  handleItemClick(name: string): void {
    const { activeNames } = this.state;

    if (this.props.accordion) {
      this.setActiveNames(
        activeNames[0] && activeNames[0] === name ? [] : [name],
      );
    } else {
      if (activeNames.includes(name)) {
        this.setActiveNames(activeNames.filter((item) => item !== name));
      } else {
        this.setActiveNames(activeNames.concat(name));
      }
    }
  }

  public render(): JSX.Element {
    const content = Children.map(
      this.props.children,
      (child: JSX.Element, idx) => {
        const name = child.props.name || `${C_COLLAPSE}_${idx.toString()}`;
        return cloneElement(child, {
          isActive: this.state.activeNames.includes(name),
          key: idx,
          name,
          onClick: (item) => this.handleItemClick(item),
        });
      },
    );
    return <View className={`${prefixCls}-collapse`}>{content}</View>;
  }
}

export default Collapse;
