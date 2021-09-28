import React, { useState, useEffect, ReactElement } from 'react';
import cn from 'classnames';
import { View, Block } from '@tarojs/components';
import CIcon from '../Icon';
import CDivider from '../Divider';

import { IDrawerProps } from './types/drawer';
import { prefixCls, noop } from '../const';
import './index.less';

const classSelector = `${prefixCls}-drawer`;

function Drawer(props: IDrawerProps): ReactElement {
  const {
    title,
    closable = true,
    destroyOnClose,
    maskClosable = true,
    mask = true,
    fixed = true,
    noHeader,
    width = '300px',
    height = '300px',
    zIndex = 100,
    placement = 'right',
    headerStyle,
    bodyStyle,
    onClose,
    children,
  } = props;

  let [visible, setVisible] = useState(props.visible);
  let [isDesChild, setIsDesChild] = useState(false);

  const handleClose = () => {
    onClose && onClose();
    setVisible(false);
    if (destroyOnClose) {
      setIsDesChild(true);
    }
  };

  useEffect(() => {
    setVisible(props.visible);
    setIsDesChild(false);
  }, [props.visible]);

  const isTopOrBottom = placement === 'top' || placement === 'bottom';
  const isLeftOrRight = placement === 'left' || placement === 'right';

  const placeStyle: React.CSSProperties = {
    width: isLeftOrRight ? width : '100%',
    height: isTopOrBottom ? height : '100%',
    position: fixed ? 'fixed' : 'absolute',
  };
  return (
    <View
      className={cn(classSelector, { [`${classSelector}-open`]: visible })}
      style={{
        position: fixed ? 'fixed' : 'absolute',
        width: visible ? '100%' : '0',
        height: visible ? '100%' : '0',
        zIndex,
      }}
    >
      {!!mask && (
        <View
          className={`${classSelector}-mask`}
          onClick={maskClosable ? handleClose : noop}
        />
      )}
      <View
        className={cn(
          `${classSelector}-content`,
          `${classSelector}-content-${placement}`,
        )}
        style={placeStyle}
      >
        {!isDesChild && (
          <Block>
            {/**header部分 */}
            {!noHeader && (
              <Block>
                <View className={`${classSelector}-header`} style={headerStyle}>
                  {title}
                  {!!closable && (
                    <CIcon
                      type="close"
                      className={`${classSelector}-close`}
                      onClick={handleClose}
                    />
                  )}
                </View>
                <CDivider style={{ margin: 0 }} />
              </Block>
            )}
            {/**body部分 */}
            <View className={`${classSelector}-body`} style={bodyStyle}>
              {children}
            </View>
          </Block>
        )}
      </View>
    </View>
  );
}

export default Drawer;
