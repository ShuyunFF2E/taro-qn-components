import React from 'react';
import { View, Text } from '@tarojs/components';
import CIcon from '../../Icon';
import CButton from '../../Button';
import useYear from '../hooks/year';

export default function YearComponents(props) {
  const { yearList, nextYearList, prevYearList } = useYear(
    props.defaultVal,
    props.max,
    props.min,
  );
  let start = yearList[0][0].val;
  let len = yearList.length;
  let end = yearList[len - 1][yearList[len - 1].length - 1].val;
  const selectYear = (year) => {
    if (year.status !== 'disabled') {
      props.onChange(year.val);
    }
  };
  return (
    <View>
      <View className="picker-header-wrap">
        <CButton
          size="small"
          type="link"
          className="prve-btn icon-btn"
          onClick={prevYearList}
        >
          <CIcon type="arrow_dleft" size={12} color="#303133" />
        </CButton>
        <Text className="header-label">{start}年</Text>-
        <Text className="header-label">{end}年</Text>
        <CButton
          size="small"
          type="link"
          className="next-btn icon-btn"
          onClick={nextYearList}
        >
          <CIcon type="arrow_dright" size={12} color="#303133" />
        </CButton>
      </View>
      <View className="year-gird-wrap">
        {yearList.map((item) => {
          return (
            <View className="year-gird">
              {item.map((val) => {
                return (
                  <Text
                    className={`year-item ${val.status}`}
                    onClick={() => {
                      selectYear(val);
                    }}
                  >
                    {val.val}
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
