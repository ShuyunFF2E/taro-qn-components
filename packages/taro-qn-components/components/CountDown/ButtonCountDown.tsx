import React from 'react';
import Button from '../Button';
import useCountDown from './UseCountDown';
import { CountDownPropsType } from './types';

const ButtonCountDown: React.FC<CountDownPropsType> = (props) => {
  const { secondTime } = useCountDown(props);

  return <Button>{secondTime}</Button>;
};

export default ButtonCountDown;
