import { useState, useCallback, useEffect } from 'react';
import { monthConst } from '../const/index';

const createMonthData = (year, defaultValue, max, min) => {
  const arr: any = [];
  const [defaultYear, defaultMonth] = defaultValue.split('-');
  const [maxYear, maxMonth] = max.split('-');
  const [minYear, minMonth] = min.split('-');
  const maxTime = max
    ? new Date(`${maxYear}-${maxMonth}-01 00:00:00`).getTime()
    : 0; // 自动添加每月的1号，并获取时间戳，后续进行比较
  const minTime = min
    ? new Date(`${minYear}-${minMonth}-01 00:00:00`).getTime()
    : 0;
  const currentDate = new Date();
  const currentTime = new Date(
    `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-01 00:00:00`,
  ).getTime();
  const defaultTime = defaultValue
    ? new Date(`${defaultYear}-${defaultMonth}-01 00:00:00`).getTime()
    : 0;
  monthConst.forEach((item) => {
    const column: any = [];
    item.forEach((val) => {
      const obj = {
        name: val.name,
        year: year,
        month: val.data,
        status: '',
      };
      const itemTime = new Date(`${year}-${val.data}-01 00:00:00`).getTime();
      if (maxTime && itemTime > maxTime) {
        obj.status = 'disabled';
      } else if (minTime && itemTime < minTime) {
        obj.status = 'disabled';
      } else {
        defaultTime === itemTime || currentTime === itemTime
          ? (obj.status = 'active')
          : (obj.status = '');
      }
      column.push(obj);
    });
    arr.push(column);
  });
  return arr;
};

export default function useMonth(
  dataYear,
  defaultValue = '',
  max = '',
  min = '',
) {
  const [year] = useState(dataYear || new Date().getFullYear());
  useEffect(() => {
    const arr = createMonthData(
      dataYear || new Date().getFullYear(),
      defaultValue,
      max,
      min,
    );
    setMonthList([...arr]);
  }, [dataYear, defaultValue]);
  const [monthList, setMonthList] = useState(() => {
    return createMonthData(dataYear, defaultValue, max, min);
  });

  const prevYear = useCallback(() => {
    const list = createMonthData(year - 1, defaultValue, max, min);
    setMonthList([...list]);
  }, [year]);

  const nextYear = useCallback(() => {
    const list = createMonthData(year + 1, defaultValue, max, min);
    setMonthList([...list]);
  }, [year]);

  return {
    monthList,
    prevYear,
    nextYear,
  };
}
