import React, { cloneElement } from 'react';
import { View, Text } from '@tarojs/components';
import classnames from 'classnames';
import CIcon from '../Icon';
import { CButtonProps, CButtonState } from './types/button';

import './index.less';

function ButtonGroup({ block, children, ...props }) {
  const classes = classnames(`cross-button-group`);

  return (
    <View className={classes}>
      {React.Children.map(children, (child) =>
        cloneElement(child, {
          ...child.props,
          ...props,
        }),
      )}
    </View>
  );
}

class CButton extends React.Component<CButtonProps, CButtonState> {
  static defaultProps = {
    size: 'default',
    type: 'normal',
    block: false,
    loading: false,
    className: '',
    icon: '',
    onClick: () => {},
  };

  static Group = ButtonGroup;

  onBtnClick = () => {
    const { onClick, disabled, loading } = this.props;
    if (disabled || loading) return;
    onClick();
  };

  public render(): JSX.Element {
    const {
      size = 'default',
      disabled,
      loading,
      type = 'normal',
      block,
      children,
      className,
      danger,
      icon,
      style,
    } = this.props;

    const classNames = classnames(
      `cross-button`,
      {
        [type]: true,
        [size]: true,
        block,
        ['disabled']: disabled,
        ['danger']: danger,
      },
      className,
    );

    return (
      <View className={classNames} style={style} onClick={this.onBtnClick}>
        {loading && <Text className="cross-button-loading" />}
        {icon && <CIcon type={icon} style={{ marginRight: 5 }} />}
        {children}
      </View>
    );
  }
}

export default CButton;
