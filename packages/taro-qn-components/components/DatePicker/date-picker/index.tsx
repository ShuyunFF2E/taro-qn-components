import React from 'react';
import { View, Input } from '@tarojs/components';
import CIcon from '../../Icon';
import { prefixCls } from '../../const';
import PickerContent from './picker-content';
import { useDateContext } from '../common/share-context';

export default function DatePicker() {
  const ctxValue: any = useDateContext();
  const emptyVal = () => {
    ctxValue.setValue('');
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
        <PickerContent />
      </View>
    </View>
  );
}
