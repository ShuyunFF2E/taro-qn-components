---
title: DatePicker 日历
nav:
  title: DatePicker 日历
  path: /components
group:
  title: 数据展示
  path: /data
  order: 6
---

## 组件预览

<iframe style="width:100%; height: 600px; border: 1px solid #ddd" src="https://ui.shuyun.com/example/#/pages/data/date-picker/index"></iframe>

## DatePicker 参数

| 参数         | 说明             | 类型     | 可选值                                                   | 默认值                                                                                        |
| ------------ | ---------------- | -------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| type         | 日历组件类型     | String   | 'DatePicker', 'YearPicker', 'MonthPicker', 'RangePicker' | DatePicker                                                                                    |
| maxDate      | 最大日期         | String   |                                                          | ''                                                                                            |
| minDate      | 最小日期         | String   |                                                          | ''                                                                                            |
| onChange     | change 事件      | function |                                                          |                                                                                               |
| value        | 默认值           | string   |                                                          | '',若是单选择年则传 2021（格式），若为年月选择 2020-01（格式），若为选择天 2020-01-01（格式） |
| pickerStatus | 显示状态         | boolen   |                                                          | true / false                                                                                  |
| rangeValue   | 日期区间默认值   | object   |                                                          | 仅在 RangePicker 模式下生效,格式如{ start: '2020-01-01', end: '2020-01-01' }                  |
| width        | 输入框长度       | string   |                                                          | 200px（需要带上单位，否则会出现 H5 端无长度失效）                                             |
| placeholder  | placeholder 提示 | String   |                                                          | 请选择日期                                                                                    |
