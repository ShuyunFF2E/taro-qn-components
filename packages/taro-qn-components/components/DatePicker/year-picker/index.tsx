import React, { useState } from 'react';
import { View, Input } from '@tarojs/components';
import { prefixCls } from '../../const';
import CIcon from '../../Icon';
import { useDateContext } from '../common/share-context';
import YearComponents from '../common/year-components';

export default function YearPicker() {
  const ctxValue: any = useDateContext();
  const emptyVal = () => {
    ctxValue.setValue('');
  };
  const yearData = ctxValue.value;

  const [year, setYear] = useState(() => {
    return yearData ? Number(yearData) : new Date().getFullYear();
  });

  const yearChange = (val) => {
    setYear(val);
    ctxValue.setValue(val);
    ctxValue.setPickerStatus(false);
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
          <YearComponents
            defaultVal={year}
            onChange={yearChange}
            max={ctxValue.maxDate}
            min={ctxValue.minDate}
          />
        </View>
      </View>
    </View>
  );
}
