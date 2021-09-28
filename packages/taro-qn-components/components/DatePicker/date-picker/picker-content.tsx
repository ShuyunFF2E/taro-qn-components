import React, { useState } from 'react';
import { View } from '@tarojs/components';
import YearComponents from '../common/year-components';
import MonthComponents from '../common/month-components';
import DayComponents from '../common/day-components';
import { useDateContext } from '../common/share-context';

export default function PickerContent() {
  const ctxValue: any = useDateContext();
  const [yearData, monthData] = ctxValue.value.split('-');

  const [year, setYear] = useState(() => {
    return yearData ? Number(yearData) : new Date().getFullYear();
  });
  const [month, setMonth] = useState(() => {
    return monthData ? Number(monthData) : new Date().getMonth() + 1;
  });
  const yearChange = (val) => {
    setYear(val);
    ctxValue.setDateType('MonthPicker');
  };

  const monthChange = (val) => {
    setYear(val.year);
    setMonth(val.month);
    ctxValue.setDateType('DatePicker');
  };

  const monthNextYear = () => {
    setYear(year + 1);
  };

  const monthPrevYear = () => {
    setYear(year - 1);
  };

  const dayChange = (val) => {
    const dateObj = new Date(val.ms);
    const yearStr = dateObj.getFullYear();
    const monthStr = `${
      dateObj.getMonth() + 1 >= 10
        ? dateObj.getMonth() + 1
        : '0' + (dateObj.getMonth() + 1)
    }`;
    const dayStr = `${
      dateObj.getDate() >= 10 ? dateObj.getDate() : '0' + dateObj.getDate()
    }`;
    ctxValue.setValue(`${yearStr}-${monthStr}-${dayStr}`);
    ctxValue.setPickerStatus(false);
  };

  return (
    <View className="picker-content-wrap">
      <View
        style={{
          display: ctxValue.dateType === 'YearPicker' ? 'block' : 'none',
        }}
      >
        <YearComponents
          defaultVal={year}
          onChange={yearChange}
          max={ctxValue.maxDate}
          min={ctxValue.minDate}
        />
      </View>
      <View
        style={{
          display: ctxValue.dateType === 'MonthPicker' ? 'block' : 'none',
        }}
      >
        <MonthComponents
          year={year}
          next={monthNextYear}
          prev={monthPrevYear}
          onChange={monthChange}
        />
      </View>
      <View
        style={{
          display: ctxValue.dateType === 'DatePicker' ? 'block' : 'none',
        }}
      >
        <DayComponents
          year={year}
          month={month}
          onChange={dayChange}
          setYear={setYear}
          setMonth={setMonth}
        />
      </View>
    </View>
  );
}
