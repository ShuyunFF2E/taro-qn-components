import { useRef, useEffect, useState, useMemo } from 'react';
import { UseCountDownFn, FormattedRes, TDate } from './types';

const useCountDown: UseCountDownFn = ({ time, onEnd = () => {} }) => {
  const timer = useRef<TDate>();

  // 倒计时数据
  const countDownSecondTime = Math.round(time / 1000);

  // 倒计时计算值
  const [secondTime, setSecondTime] = useState(countDownSecondTime);

  // 初始化倒计时
  const initCountDown = (countDownTime) => {
    let computeTime = countDownTime;

    timer.current = setInterval(() => {
      --computeTime;

      setSecondTime(computeTime);

      if (computeTime <= 0) {
        clearTimer();
      }
    }, 1000);
  };

  // 清除计时器
  const clearTimer = () => {
    if (!timer.current) return;

    clearInterval(timer.current);

    timer.current = undefined;

    // 执行结束函数
    onEnd();
  };

  // 暂停计时器
  const pauseTimer = () => {
    clearTimer();
  };

  // 开始计时器
  const startTimer = () => {
    if (timer.current || secondTime <= 0) return;
    initCountDown(secondTime);
  };

  // 重置计时器
  const restartTimer = () => {
    clearTimer();

    setSecondTime(countDownSecondTime);

    initCountDown(countDownSecondTime);
  };

  // 倒计时的不同格式
  const parseMs = (seconds: number): FormattedRes => {
    return {
      days: Math.floor(seconds / 86400),
      hours: Math.floor(seconds / 3600) % 24,
      minutes: Math.floor(seconds / 60) % 60,
      seconds: Math.floor(seconds) % 60,
    };
  };

  useEffect(() => {
    initCountDown(countDownSecondTime);

    return () => {
      clearTimer();
    };
  }, []);

  const formattedRes = useMemo(() => {
    return parseMs(secondTime);
  }, [secondTime]);

  return { secondTime, pauseTimer, startTimer, restartTimer, formattedRes };
};

export default useCountDown;
