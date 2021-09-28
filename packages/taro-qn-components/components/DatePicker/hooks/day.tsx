import { useState, useEffect, useCallback } from 'react';
import { refreshDays } from '../utils';

/**
 * 计算出当月日历天数数据,并格式化
 * @param {*} year
 * @param {*} month
 * @param {*} currentTime  当前时间/或需要默认标记选中的时间（时间戳毫秒），数组的第一项是当前时间
 * @returns list
 */
const createDayList = (
  year: number,
  month: number,
  currentTime: number[],
  max: string = '',
  min: string = '',
) => {
  const resultMonth = month < 10 ? `0${month}` : month;
  const maxTime = max ? new Date(`${max} 00:00:00`).getTime() : 0;
  const minTime = min ? new Date(`${min} 00:00:00`).getTime() : 0;
  const allObj = refreshDays(year, month);
  const allAll: any[] = [];
  allObj.prev.forEach((item) => {
    allAll.push({
      day: item,
      status: 'disabled',
    });
  });
  allObj.current.forEach((item) => {
    const itemDay = item < 10 ? `0${item}` : item;
    const time = new Date(
      `${year}-${resultMonth}-${itemDay} 00:00:00`,
    ).getTime();
    const obj = {
      day: itemDay,
      ms: time,
      status: '',
      data: `${year}-${resultMonth}-${itemDay}`,
    };
    if (maxTime && time > maxTime) {
      obj.status = 'disabled';
    } else if (minTime && time < minTime) {
      obj.status = 'disabled';
    } else if (time === currentTime[0]) {
      obj.status = 'current';
    } else {
      currentTime.includes(time)
        ? (obj.status = 'active')
        : (obj.status = 'default');
    }
    allAll.push(obj);
  });
  allObj.next.forEach((item) => {
    allAll.push({
      day: item,
      status: 'disabled',
    });
  });
  const len = allAll.length;
  const resultArr: any[] = [];
  let n = 7; //假设每行显示7个
  let lineNum = len % 7 === 0 ? len / 7 : Math.floor(len / 7 + 1);
  for (let i = 0; i < lineNum; i++) {
    resultArr.push(allAll.slice(i * n, i * n + n));
  }
  return resultArr;
};

/**
 * 获取当前时间的时间戳
 */
const getCurrentTime = () => {
  const newDate = new Date();
  return new Date(
    `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`,
  ).getTime();
};

export const useDay = (
  year: number,
  month: number,
  value: string,
  max: string = '',
  min: string = '',
) => {
  const defaultTime = value ? new Date(`${value} 00:00:00`).getTime() : 0;
  const [dayList, setDayList] = useState(() => {
    const currentTime = getCurrentTime();
    return createDayList(year, month, [currentTime, defaultTime], max, min);
  });
  useEffect(() => {
    const currentTime = getCurrentTime();
    setDayList([
      ...createDayList(year, month, [currentTime, defaultTime], max, min),
    ]);
  }, [year, month, value]);
  return {
    dayList,
  };
};

export const RangeDay = (value, max: string = '', min: string = '') => {
  const [range, setRange] = useState(() => {
    return value ? value : { start: '', end: '' };
  });
  const [clickStatus, setClickStatus] = useState(0); // 用于记录点击次数
  const [yearRange, setYearRange] = useState(() => {
    const newDate = new Date();
    if (value.start) {
      const start = value.start.split('-')[0];
      return {
        start: start,
        end: start,
      };
    } else {
      return {
        start: newDate.getFullYear(),
        end:
          newDate.getMonth() + 1 >= 12
            ? newDate.getFullYear() + 1
            : newDate.getFullYear(),
      };
    }
  });
  const [monthRange, setMonthRange] = useState(() => {
    const newDate = new Date();
    if (value.start) {
      return {
        start: value.start.split('-')[1],
        end: value.end.split('-')[1],
      };
    } else {
      return {
        start: newDate.getMonth() + 1,
        end: newDate.getMonth() + 1 >= 12 ? 1 : newDate.getMonth() + 2,
      };
    }
  });

  const [rangeList, setRangeList] = useState(() => {
    const currentTime = getCurrentTime();
    const defaultStart = value.start
      ? new Date(`${value.start} 00:00:00`).getTime()
      : 0;
    const defaultEnd = value.end
      ? new Date(`${value.end} 00:00:00`).getTime()
      : 0;
    return {
      start: createDayList(
        Number(yearRange.start),
        Number(monthRange.start),
        [currentTime, defaultStart, defaultEnd],
        max,
        min,
      ),
      end: createDayList(
        Number(yearRange.end),
        Number(monthRange.end),
        [currentTime, defaultStart, defaultEnd],
        max,
        min,
      ),
    };
  });

  useEffect(() => {
    const currentTime = getCurrentTime();
    const defaultStart = range.start
      ? new Date(`${range.start} 00:00:00`).getTime()
      : 0;
    const defaultEnd = range.end
      ? new Date(`${range.end} 00:00:00`).getTime()
      : 0;
    setRangeList({
      start: createDayList(
        Number(yearRange.start),
        Number(monthRange.start),
        [currentTime, defaultStart, defaultEnd],
        max,
        min,
      ),
      end: createDayList(
        Number(yearRange.end),
        Number(monthRange.end),
        [currentTime, defaultStart, defaultEnd],
        max,
        min,
      ),
    });
  }, [yearRange, monthRange, range]);
  const nextYear = useCallback(() => {
    setYearRange({
      start: Number(yearRange.start) + 1,
      end: Number(yearRange.start) + 1,
    });
  }, [yearRange, monthRange]);

  const prevYear = useCallback(() => {
    setYearRange({
      start: Number(yearRange.start) - 1,
      end: Number(yearRange.start) - 1,
    });
  }, [yearRange, monthRange]);

  const nextMonth = useCallback(() => {
    setMonthRange({
      start: monthRange.end,
      end: monthRange.end >= 12 ? 1 : monthRange.end + 1,
    });
    if (monthRange.end >= 12) {
      setYearRange({
        start: Number(yearRange.end),
        end: Number(yearRange.end) + 1,
      });
    }
    if (monthRange.start >= 12) {
      setYearRange({
        start: Number(yearRange.end),
        end: Number(yearRange.end),
      });
    }
  }, [yearRange, monthRange]);

  const prevMonth = useCallback(() => {
    setMonthRange({
      start: monthRange.start <= 1 ? 12 : monthRange.start - 1,
      end: monthRange.start,
    });
    if (monthRange.start <= 1) {
      setYearRange({
        start: Number(yearRange.start) - 1,
        end: Number(yearRange.start),
      });
    }
    if (monthRange.end <= 1) {
      setYearRange({
        start: Number(yearRange.start),
        end: Number(yearRange.start),
      });
    }
  }, [yearRange, monthRange]);

  return {
    yearRange,
    monthRange,
    rangeList,
    nextYear,
    prevYear,
    nextMonth,
    prevMonth,
    range,
    setRange,
    clickStatus,
    setClickStatus,
  };
};
