import React, { useState } from 'react';
import { View, Input } from '@tarojs/components';
import { prefixCls } from '../../const';
import CIcon from '../../Icon';
import { useDateContext } from '../common/share-context';
import YearComponents from '../common/year-components';
import MonthComponents from '../common/month-components';

export default function MonthPicker() {
  const ctxValue: any = useDateContext();
  const emptyVal = () => {
    ctxValue.setValue('');
  };
  // const [yearData, monthData] = ctxValue.value.split('-');

  const [yearData] = ctxValue.value.split('-');
  const [year, setYear] = useState(() => {
    return yearData ? Number(yearData) : new Date().getFullYear();
  });
  // const [, setMonth] = useState(() => {
  //   return monthData ? Number(monthData) : new Date().getMonth() + 1;
  // });
  const yearChange = (val) => {
    setYear(val);
    ctxValue.setDateType('MonthPicker');
  };

  const monthChange = (val) => {
    setYear(val.year);
    // setMonth(val.month);
    ctxValue.setValue(`${val.year}-${val.month}`);
    ctxValue.setPickerStatus(false);
  };

  const monthNextYear = () => {
    setYear(year + 1);
  };

  const monthPrevYear = () => {
    setYear(year - 1);
  };
  return (
    <View>
      <View className={`${prefixCls}-input-wrap`}>
        <CIcon type="calendar" className="rili-icon" />
        <Input
          className="input-inner"
          value={ctxValue.value}
          onClick={() => {
            ctxValue.setPickerStatus(!ctxValue.pickerStatus);
          }}
          style={{ width: ctxValue.width }}
          placeholder={ctxValue.placeholder}
        />
        <CIcon type="guanbi" className="clear-icon" onClick={emptyVal} />
      </View>

      <View
        className={`${prefixCls}-picker-wrap`}
        style={{ display: ctxValue.pickerStatus ? 'block' : 'none' }}
      >
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
        </View>
      </View>
    </View>
  );
}
