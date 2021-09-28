import React from 'react';
import { View, Text } from '@tarojs/components';
import { weekList } from '../const/index';

export default function DayGird(props) {
  const change = (data) => {
    if (data.status !== 'disabled') {
      props.onChange(data);
    }
  };
  return (
    <View className="day-gird-wrap">
      <View className="week-header-wrap">
        {weekList.map((item) => {
          return <Text className="week-name">{item}</Text>;
        })}
      </View>
      <View>
        {props.dayList.map((item) => {
          return (
            <View className="day-gird">
              {item.map((val) => {
                return (
                  <Text
                    className={`day-item ${val.status}`}
                    onClick={() => {
                      change(val);
                    }}
                  >
                    {val.day}
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
