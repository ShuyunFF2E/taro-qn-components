import { useState } from 'react';

export function useGlobalShare(data) {
  const [dateType, setDateType] = useState(data.type);
  const [value, setValue] = useState(data.value);
  const [defaultMax] = useState(data.maxDate);
  const [defaultMin] = useState(data.minDate);
  const [pickerStatus, setPickerStatus] = useState(false);
  const [rangeValue, setRangeValue] = useState(data.rangeValue);

  return {
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
  };
}
