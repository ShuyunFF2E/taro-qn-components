import { useState, useCallback, useEffect } from 'react';

/**
 * 根据当前年份，生成年份列表
 * @param len // 列表的元素数量
 * @param year // 当前年份
 * @param result // 计算方式 prev:上一批 next:下一批
 */
const createYearList = (len: number, year: number, result: string) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    if (result === 'prev') {
      arr.push(year - (i + 1));
    } else if (result === 'next') {
      arr.push(year + (i + 1));
    }
  }
  if (result === 'prev') {
    return arr.sort();
  }
  return arr;
};
/**
 * 格式化年份数据，并生成可以直接渲染的数据
 * @param list // 年份数据列表
 * @param defaultVal // 默认选中的值
 * @param max // 最大值
 * @param min // 最小值
 */
const formatList = (
  list: number[],
  defaultVal: number = 0,
  max = '',
  min = '',
) => {
  const len = list.length;
  const arr: any[] = [];
  let n = 4; //假设每行显示4个
  let lineNum = len % 4 === 0 ? len / 4 : Math.floor(len / 4 + 1);
  for (let i = 0; i < lineNum; i++) {
    arr.push(list.slice(i * n, i * n + n));
  }
  const formatList: any = [];
  arr.forEach((item) => {
    const child: any = [];
    item.forEach((year) => {
      let obj = {
        status: '',
        val: year,
      };
      if (Number(max) && year > Number(max)) {
        obj.status = 'disabled';
      } else if (Number(min) && year < Number(min)) {
        obj.status = 'disabled';
      } else {
        obj.status = year === defaultVal ? 'active' : 'default';
      }
      child.push(obj);
    });
    formatList.push(child);
  });
  return formatList;
};

export default function useYear(data: number, max = '', min = '') {
  let yearDefaultVal = data ? parseInt(data.toString().substring(0, 4)) : 0;
  const [yearVal, setYearVal] = useState(yearDefaultVal);
  const [yearList, setYearList] = useState(() => {
    const yearArr = createYearList(7, data, 'next');
    yearArr.unshift(data);
    return formatList(
      yearArr,
      yearDefaultVal,
      max.substring(0, 4),
      min.substring(0, 4),
    );
  });

  useEffect(() => {
    const yearArr = createYearList(7, data, 'next');
    yearArr.unshift(data);
    setYearVal(data);
    setYearList([
      ...formatList(yearArr, data, max.substring(0, 4), min.substring(0, 4)),
    ]);
  }, [data]);
  const nextYearList = useCallback(() => {
    let len = yearList.length;
    let end = yearList[len - 1][yearList[len - 1].length - 1].val;
    const yearArr = formatList(
      createYearList(8, end, 'next'),
      yearVal,
      max.substring(0, 4),
      min.substring(0, 4),
    );
    setYearList([...yearArr]);
  }, [yearList, yearVal]);

  const prevYearList = useCallback(() => {
    const yearArr = formatList(
      createYearList(8, yearList[0][0].val, 'prev'),
      yearVal,
      max.substring(0, 4),
      min.substring(0, 4),
    );
    setYearList([...yearArr]);
  }, [yearList, yearVal]);

  return {
    yearList,
    nextYearList,
    prevYearList,
    yearVal,
    setYearVal,
  };
}
