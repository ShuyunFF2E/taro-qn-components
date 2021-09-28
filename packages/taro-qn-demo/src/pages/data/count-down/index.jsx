import React from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { CCountDown, CButton } from 'taro-qn-components';
import { NavBar } from '@/common/navbar/index';

const { useCountDown, ButtonCountDown, TextCountDown } = CCountDown;

const CountDownDemo = () => {
  const {
    secondTime,
    startTimer,
    restartTimer,
    pauseTimer,
    formattedRes: { days, hours, minutes, seconds },
  } = useCountDown({ time: 1000 * 60 * 60 * 24 * 2, onEnd: customCountDown });

  const customCountDown = () => {
    Taro.showToast({
      title: '自定义倒计时结束',
      icon: 'success',
      duration: 2000,
    });
  };

  const buttonCountDownEnd = () => {
    Taro.showToast({
      title: 'button倒计时结束',
      icon: 'success',
      duration: 2000,
    });
  };

  const textCountDownEnd = () => {
    Taro.showToast({
      title: 'text倒计时结束',
      icon: 'success',
      duration: 2000,
    });
  };

  return (
    <View className="container">
      <View className="h1">按钮倒计时</View>
      <View className="box">
        <ButtonCountDown time={50000} onEnd={buttonCountDownEnd}>
          按钮倒计时
        </ButtonCountDown>
      </View>
      <View className="h1">text倒计时</View>
      <View className="box">
        <TextCountDown time={90000} onEnd={textCountDownEnd}></TextCountDown>
      </View>
      <View className="h1">自定义倒计时</View>
      <View className="box">
        <View style={{ marginBottom: 20 }}>秒数：{secondTime}</View>
        <View style={{ marginBottom: 20 }}>
          时间格式：{days}天{hours}时{minutes}分{seconds}秒
        </View>
        <CButton
          type="primary"
          style={{ marginRight: '10px' }}
          onClick={restartTimer}
        >
          重启
        </CButton>
        <CButton onClick={pauseTimer} style={{ marginRight: '10px' }}>
          暂停
        </CButton>
        <CButton type="primary" onClick={startTimer}>
          开始
        </CButton>
      </View>
    </View>
  );
};

export default NavBar()(CountDownDemo);
