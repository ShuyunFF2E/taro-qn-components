import React from 'react';
import { View, Text } from '@tarojs/components';
import CIcon from '../../Icon';
import CButton from '../../Button';
import DayGird from './day-gird';
import { useDateContext } from '../common/share-context';
import { useDay } from '../hooks/day';

export default function DayComponents(props) {
  const { year, month } = props;
  const ctxValue: any = useDateContext();
  const { dayList } = useDay(
    year,
    month,
    ctxValue.value,
    ctxValue.maxDate,
    ctxValue.minDate,
  );

  const nextYear = () => {
    props.setYear(year + 1);
  };

  const prevYear = () => {
    props.setYear(year - 1);
  };

  const nextMonth = () => {
    if (month >= 12) {
      props.setMonth(1);
      props.setYear(year + 1);
    } else {
      props.setMonth(month + 1);
    }
  };

  const prevMonth = () => {
    if (month <= 1) {
      props.setYear(year - 1);
      props.setMonth(12);
    } else {
      props.setMonth(month - 1);
    }
  };

  const onChange = (val) => {
    props.onChange(val);
  };
  return (
    <View>
      <View className="picker-header-wrap">
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
        <Text
          className="header-label"
          onClick={() => {
            ctxValue.setDateType('YearPicker');
          }}
        >
          {props.year}年
        </Text>
        <Text
          className="header-label"
          onClick={() => {
            ctxValue.setDateType('MonthPicker');
          }}
        >
          {props.month}月
        </Text>
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
      <DayGird dayList={dayList} onChange={onChange} />
    </View>
  );
}
