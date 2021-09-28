import React from 'react';
import { View, Input, Text } from '@tarojs/components';
import { prefixCls } from '../../const';
import CIcon from '../../Icon';
import CButton from '../../Button';
import { useDateContext } from '../common/share-context';
import DayGird from '../common/day-gird';
import { RangeDay } from '../hooks/day';

export default function RangePicker() {
  const ctxValue: any = useDateContext();
  const emptyVal = () => {
    setRange({ start: '', end: '' });
    ctxValue.onChange({ start: '', end: '' });
  };
  const {
    yearRange,
    monthRange,
    rangeList,
    nextYear,
    prevYear,
    nextMonth,
    prevMonth,
    range,
    setRange,
    clickStatus,
    setClickStatus,
  } = RangeDay(ctxValue.rangeValue, ctxValue.maxDate, ctxValue.minDate);
  const onChange = (val) => {
    if (clickStatus) {
      // 如果是选择结束时间
      if (new Date(range.start).getTime() > new Date(val.data).getTime()) {
        range.end = range.start;
        range.start = val.data;
      } else {
        range.end = val.data;
      }
      setRange({ ...range });
      setClickStatus(0);
      ctxValue.setPickerStatus(false);
      ctxValue.onChange({ ...range });
    } else {
      // 如果是选择开始时间
      range.start = val.data;
      range.end = '';
      setRange({ ...range });
      setClickStatus(clickStatus + 1);
    }
  };
  return (
    <View>
      <View className={`${prefixCls}-range-input-wrap ${prefixCls}-input-wrap`}>
        <Input
          className="range-inner"
          onClick={() => {
            ctxValue.setPickerStatus(true);
          }}
          value={range.start}
          style={{ width: ctxValue.width }}
          placeholder={ctxValue.placeholder}
        />
        <Text className="note-text">至</Text>
        <Input
          className="range-inner"
          onClick={() => {
            ctxValue.setPickerStatus(true);
          }}
          value={range.end}
          style={{ width: ctxValue.width }}
        />
        <CIcon type="calendar" className="rili-icon" />
        <CIcon type="guanbi" className="clear-icon" onClick={emptyVal} />
      </View>
      {ctxValue.pickerStatus && (
        <View className={`${prefixCls}-range-wrap`}>
          <View className="range-header-wrap">
            <View className="range-header-item picker-header-wrap">
              <CButton
                size="small"
                type="link"
                className="prve-btn icon-btn"
                onClick={prevYear}
              >
                <CIcon type="arrow_dleft" size={12} color="#303133" />
              </CButton>
              <CButton
                size="small"
                type="link"
                className="prve-btn icon-btn"
                onClick={prevMonth}
              >
                <CIcon type="arrow_left" size={12} color="#303133" />
              </CButton>
              <Text className="header-label">{yearRange.start}年</Text>
              <Text className="header-label">{monthRange.start}月</Text>
            </View>
            <View className="range-header-item picker-header-wrap">
              <Text className="header-label">{yearRange.end}年</Text>
              <Text className="header-label">{monthRange.end}月</Text>
              <CButton
                size="small"
                type="link"
                className="next-btn icon-btn"
                onClick={nextYear}
              >
                <CIcon type="arrow_dright" size={12} color="#303133" />
              </CButton>
              <CButton
                size="small"
                type="link"
                className="next-btn icon-btn"
                onClick={nextMonth}
              >
                <CIcon type="arrow_right" size={12} color="#303133" />
              </CButton>
            </View>
          </View>
          <View className="picker-content-wrap range-content-wrap">
            <View className="range-item">
              <DayGird dayList={rangeList.start} onChange={onChange} />
            </View>
            <View className="range-item">
              <DayGird dayList={rangeList.end} onChange={onChange} />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
