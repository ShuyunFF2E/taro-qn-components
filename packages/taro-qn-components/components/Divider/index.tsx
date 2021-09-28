import React, { ReactElement } from 'react'
import { View, Text } from '@tarojs/components'
import cn from 'classnames'

import { IDividerProps } from './types/divider'
import { prefixCls } from '../const'
import './index.less'

const classSelector = `${prefixCls}-divider`

export default function Divider (props: IDividerProps): ReactElement {
  const {
    type = 'horizontal',
    dashed,
    orientation = 'center',
    className,
    textStyle,
    style,
    children
  } = props
  return (
    <View
      className={cn(classSelector,
        `${classSelector}-${type}`,
        { [`${classSelector}-dashed`]: dashed },
        { [`${classSelector}-with-text ${classSelector}-with-text-${orientation}`]: !!children },
        className)}
      style={style}
    >
      {!!children && <Text className={`${classSelector}-inner-text`} style={textStyle}>{children}</Text>}
    </View>
  )
}
