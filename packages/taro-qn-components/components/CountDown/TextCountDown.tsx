import React from 'react';
import { Text } from '@tarojs/components';
import UseCountDown from './UseCountDown';
import { CountDownPropsType } from './types';

const TextCountDown: React.FC<CountDownPropsType> = (props) => {
  const { secondTime } = UseCountDown(props);

  return <Text>{secondTime}</Text>;
};

export default TextCountDown;
