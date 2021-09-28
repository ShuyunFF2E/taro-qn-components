---
title: CountDown 倒计时
nav:
  title: CountDown 倒计时
  path: /components
group:
  title: 数据展示
  path: /data
---

# CountDown 倒计时

倒计时组件，包含 button 倒计时以及 text 倒计时 以及 自定义倒计时

## 何时使用

需要验证码倒计时，或者活动倒计时这种类似的业务场景都可以使用

## 使用指南

在 Taro 文件中引入组件

```js
import { CCountDown } from 'taro-qn-components';

const { useCountDown, ButtonCountDown, TextCountDown } = CCountDown;
```

### 基本用法

- button 倒计时使用

```jsx | pure
const buttonCountDownEnd = () => {
  Taro.showToast({
    title: 'button倒计时结束',
    icon: 'success',
    duration: 2000
  })
}

...

<ButtonCountDown
  time={5000}
  onEnd={buttonCountDownEnd}>
  按钮倒计时
</ButtonCountDown>
```

- text 倒计时使用

```jsx | pure
const textCountDownEnd = () => {
  Taro.showToast({
    title: 'text倒计时结束',
    icon: 'success',
    duration: 2000,
  });
};

<TextCountDown time={5000} onEnd={buttonCountDownEnd}>
  按钮倒计时
</TextCountDown>;
```

- 自定义 倒计时使用

```jsx | pure
const {
  secondTime, // 秒数
  startTimer, // 开始倒计时
  restartTimer, // 重启倒计时
  pauseTimer, // 暂停倒计时
  formattedRes: {
    // 倒计时时间格式数据
    days,
    hours,
    minutes,
    seconds,
  },
} = useCountDown({
  time: 1000 * 60 * 60 * 24 * 2,
  onEnd: customCountDown,
});

const customCountDown = () => {
  Taro.showToast({
    title: '自定义倒计时结束',
    icon: 'success',
    duration: 2000,
  });
};

<View>
  <View>自定义倒计时</View>
  <View>秒数：{secondTime}</View>
  <View>
    时间格式：{days}天{hours}时{minutes}分{seconds}秒
  </View>
  <View>
    <CButton onClick={restartTimer}>重启</CButton>
    <CButton onClick={pauseTimer}>暂停</CButton>
    <CButton onClick={startTimer}>开始</CButton>
  </View>
</View>;
```

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/data/count-down/index"></iframe>

## 传入参数

### buttonCountDown/textCountDown/useCountDown

| 参数  | 说明                           | 类型     | 是否必填 | 默认值 |
| ----- | ------------------------------ | -------- | -------- | ------ |
| time  | 倒计时的初始毫秒数             | Number   | 必填     | -      |
| onEnd | 倒计时结束或者暂停时的执行函数 | Function | 可选     | -      |

## 返回数据

### useCountDown

| 参数         | 说明                      | 类型                          | 默认值 |
| ------------ | ------------------------- | ----------------------------- | ------ |
| secondTime   | 倒计时的剩余秒数          | Number                        | -      |
| startTimer   | 倒计时暂停时的开始函数    | Function                      | -      |
| restartTimer | 倒计时重新计时函数        | Function                      | -      |
| pauseTimer   | 倒计时暂停计时函数        | Function                      | -      |
| formattedRes | 倒计时天/时/分/秒格式数据 | { day,hours,minutes,seconds } | -      |
