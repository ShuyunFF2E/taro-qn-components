import React from 'react';
import { View, Text } from '@tarojs/components';
import CIcon from '../../Icon';
import CButton from '../../Button';
import useMonth from '../hooks/month';
import { useDateContext } from '../common/share-context';

export default function MonthComponents(props) {
  const ctxValue: any = useDateContext();
  const { monthList, prevYear, nextYear } = useMonth(
    props.year,
    ctxValue.value,
    ctxValue.maxDate,
    ctxValue.minDate,
  );
  const onChange = (data) => {
    if (data.status !== 'disabled') {
      props.onChange(data);
    }
  };

  const switchYear = () => {
    ctxValue.setDateType('YearPicker');
  };

  const nextFn = () => {
    props.next();
    nextYear();
  };

  const prevFn = () => {
    props.prev();
    prevYear();
  };

  return (
    <View>
      <View className="picker-header-wrap">
        <CButton
          size="small"
          type="link"
          className="prve-btn icon-btn"
          onClick={prevFn}
        >
          <CIcon type="arrow_dleft" size={12} color="#303133" />
        </CButton>
        <Text className="header-label" onClick={switchYear}>
          {props.year}年
        </Text>
        <CButton
          size="small"
          type="link"
          className="next-btn icon-btn"
          onClick={nextFn}
        >
          <CIcon type="arrow_dright" size={12} color="#303133" />
        </CButton>
      </View>
      <View className="month-gird-wrap">
        {monthList.map((item) => {
          return (
            <View className="month-gird">
              {item.map((data) => {
                // props.year === data.year && props.month === data.month ? 'active' : ''
                return (
                  <Text
                    className={`month-item ${data.status}`}
                    onClick={() => {
                      onChange(data);
                    }}
                  >
                    {data.name}
                  </Text>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
}
