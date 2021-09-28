import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';
import { prefixCls } from '../const';
import ShareProvider from './common/share-context';
import YearPicker from './year-picker/index';
import MonthPicker from './month-picker/index';
import DatePicker from './date-picker/index';
import RangePicker from './range-picker/index';
import { useGlobalShare } from './hooks/global';

import './style.less';

const classSelector = `${prefixCls}-date-picker-wrap`;
export default function CDatePicker(props) {
  const {
    dateType,
    setDateType,
    value,
    setValue,
    defaultMax,
    defaultMin,
    pickerStatus,
    setPickerStatus,
    rangeValue,
    setRangeValue,
  } = useGlobalShare(props);

  const ctxValue = {
    dateType,
    setDateType,
    value,
    setValue,
    defaultMax,
    defaultMin,
    pickerStatus,
    setPickerStatus,
    rangeValue,
    setRangeValue,
    onChange: props.onChange,
    width: props.width,
    placeholder: props.placeholder,
    maxDate: props.maxDate,
    minDate: props.minDate,
  };
  useEffect(() => {
    props.onChange(value);
  }, [value]);
  return (
    <ShareProvider value={ctxValue}>
      <View className={classSelector} style={props.style}>
        {props.type === 'YearPicker' && <YearPicker />}
        {props.type === 'MonthPicker' && <MonthPicker />}
        {props.type === 'DatePicker' && <DatePicker />}
        {props.type === 'RangePicker' && <RangePicker />}
      </View>
    </ShareProvider>
  );
}
CDatePicker.propTypes = {
  type: PropTypes.oneOf([
    'DatePicker',
    'YearPicker',
    'MonthPicker',
    'RangePicker',
  ]),
  maxDate: PropTypes.string, // 格式 2020-01-01
  minDate: PropTypes.string, // 格式 2020-01-01
  onChange: PropTypes.func,
  value: PropTypes.string, // 格式 2020-01-01
  pickerStatus: PropTypes.bool,
  rangeValue: PropTypes.object,
  width: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
};

CDatePicker.defaultProps = {
  type: 'DatePicker',
  maxDate: '',
  minDate: '',
  onChange: (val) => {
    console.log('======最后的结果', val);
  },
  value: '',
  pickerStatus: false,
  rangeValue: {
    start: '',
    end: '',
  },
  width: '200px',
  placeholder: '请选择日期',
};
