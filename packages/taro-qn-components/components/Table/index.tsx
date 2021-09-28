import React, { memo, useCallback, useEffect, useState, useMemo } from 'react';
import { ScrollView, Text, View } from '@tarojs/components';
import classnames from 'classnames';
import useDeepCompareEffect from './use-compare-effect';
import Loading from '../Loading';
import { prefixCls } from '../const';
import {
  AnyOpt,
  FixedType,
  SortOrder,
  CompareFn,
  IColumns,
  Props,
} from './types/table';
import './index.less';

const classSelector = `${prefixCls}-table`;

const DEFAULT_COL_WIDTH = 100; // 默认列宽

const JC_TA_MAP = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

const Table = (props: Props): JSX.Element | null => {
  const {
    columns: pColumns = [],
    dataSource: pDataSource = [],
    rowKey = '',
    loading = false,
    className = '',
    style = {},
    titleClassName = '',
    titleStyle = {},
    rowClassName = '',
    rowStyle = {},
    colStyle = {},
    colClassName = '',
    onChange = () => {},
    empty = null,
    multipleSort = false,
    scroll = {
      x: '100vw',
      y: 420,
    },
  } = props;

  // states
  const [error, setError] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<AnyOpt[]>(pDataSource);
  const [columns, setColumns] = useState<IColumns[]>(pColumns);
  const [expansion, setExpansion] = useState<boolean>(false); // 是否展开

  // effects
  useEffect(() => {
    onChange(dataSource);
  }, [dataSource]);

  useEffect(() => {
    if (
      pColumns.some((i) => {
        return !['number', 'undefined'].includes(typeof i.width);
      })
    ) {
      // console.error('[table] -', '列配置 width 参数类型需为 number');
      // setError(true);
      setError(false);
    }
  }, [columns]);

  useDeepCompareEffect(() => {
    setColumns(pColumns);
  }, [pColumns]);

  // 排序
  useEffect(() => {
    // 查找需要排序的列
    const sortColumns: IColumns[] =
      columns.filter((item) => item.sortOrder) || [];

    // 根据多列排序优先级对 sortColumns 进行排序，优先级高的放在最后
    sortColumns.sort((a, b) => {
      return (a.sortLevel || 0) - (b.sortLevel || 0);
    });

    // console.log(new Date().toLocaleString(), '- 需要排序的列 -', sortColumns.map(i => i.dataIndex).toString());

    // 计算排序结果
    let result: AnyOpt[] = pDataSource;

    sortColumns.forEach((column) => {
      const dataIndex: string = column.dataIndex;
      const sortOrder: SortOrder = column.sortOrder;
      const sorter: CompareFn | boolean | undefined = column.sorter;

      const temp = [...result];
      temp.sort((a, b) => {
        if (sorter) {
          if (typeof sorter === 'function') {
            return sorter(a, b, sortOrder);
          } else {
            return 0;
          }
        }
        return compare(a[dataIndex], b[dataIndex], sortOrder);
      });
      result = temp;
    });
    setDataSource(result);
  }, [columns, pColumns, pDataSource]);

  const handleClickTitle = useCallback(
    (item: IColumns, index: number): void => {
      if (!item.sort || loading) {
        return;
      }

      const temp: IColumns[] = [...columns];

      if (!multipleSort) {
        temp.forEach((j: IColumns, i: number): void => {
          if (i !== index) {
            delete j.sortOrder;
          }
        });
      }
      const array: SortOrder[] = ['ascend', 'descend', undefined];
      const curr: number = array.indexOf(temp[index].sortOrder);
      const next: SortOrder = (temp[index].sortOrder =
        array[(curr + 1) % array.length]);
      item.onSort && item.onSort(next);
      setColumns(temp);
    },
    [columns, loading],
  );

  /**
   * @description 兼容字各个数据类型的比较，如果是字符串使用 localeCompare 来比较，其他类型则转为数字来比较
   * @param a
   * @param b
   * @param sortOrder
   */
  const compare = (a, b, sortOrder: SortOrder = 'ascend'): number => {
    if (typeof a === 'string' && typeof b === 'string') {
      if (sortOrder === 'ascend') {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    }
    if (sortOrder === 'ascend') {
      return Number(a || 0) - Number(b || 0) || 0;
    } else {
      return Number(b || 0) - Number(a || 0) || 0;
    }
  };
  const getSize = (size: string | number): string => {
    if (typeof size === 'number') {
      return `${size}px`;
    } else {
      return String(size);
    }
  };

  /**
   * @description 固定列的时候计算偏移量
   * @param fixedType
   * @param index
   */
  const getFixedDistance = useCallback(
    (fixedType: FixedType, index) => {
      let result;
      if (fixedType === 'left') {
        result = columns.reduce(function (prev, cur, i) {
          if (i + 1 <= index) {
            return prev + (cur.width || DEFAULT_COL_WIDTH);
          } else {
            return prev;
          }
        }, 0);
      } else {
        result = columns.reduceRight(function (prev, cur, i) {
          if (i - 1 >= index) {
            return prev + (cur.width || DEFAULT_COL_WIDTH);
          } else {
            return prev;
          }
        }, 0);
      }

      return getSize(result);
    },
    [columns],
  );

  const Title = (props: {
    key: any;
    column: IColumns;
    index: number;
  }): JSX.Element => {
    const { column, index } = props;

    return (
      <View
        onClick={() => handleClickTitle(column, index)}
        className={classnames({
          [`${classSelector}_title`]: true,
          [`${classSelector}_fixed`]: column.fixed,
          [column.titleClassName || '']: true,
          [titleClassName]: true,
        })}
        style={{
          [column.fixed as string]:
            column.fixed && getFixedDistance(column.fixed, index),
          width: getSize(column.width || DEFAULT_COL_WIDTH),
          ...column.titleStyle,
          ...titleStyle,
          justifyContent: column.align && JC_TA_MAP[column.align],
        }}
        key={column.key || column.dataIndex}
      >
        <Text>{column.title}</Text>
        {column.sort && (
          <View className={`${classSelector}_sortBtn`}>
            <View
              className={classnames({
                [`${classSelector}_btn`]: true,
                [`${classSelector}_ascend`]: true,
                [`${classSelector}_active`]: column.sortOrder === 'ascend',
              })}
            />
            <View
              className={classnames({
                [`${classSelector}_btn`]: true,
                [`${classSelector}_descend`]: true,
                [`${classSelector}_active`]: column.sortOrder === 'descend',
              })}
            />
          </View>
        )}
      </View>
    );
  };

  const Row = (props: {
    key: any;
    dataSourceItem: AnyOpt;
    index: number;
  }): JSX.Element => {
    const { dataSourceItem, index } = props;
    let rows = columns.map((columnItem, colIndex) => {
      const text = dataSourceItem[columnItem.dataIndex];
      const expandable = columnItem.expandable !== false;
      let result;
      if (!Array.isArray(dataSourceItem[columnItem.dataIndex])) {
        if (columnItem.render) {
          const render = columnItem.render(text, dataSourceItem, index);

          if (typeof render !== 'object') {
            result = <Text>{render}</Text>;
          } else {
            result = render;
          }
        } else {
          result = <Text>{String(text)}</Text>;
        }
      } else {
        result = dataSourceItem[columnItem.dataIndex].map((item, index) => {
          const text = item;
          let result;
          if (columnItem.render) {
            const render = columnItem.render(text, item, index);

            if (typeof render !== 'object') {
              result = <Text>{render}</Text>;
            } else {
              result = render;
            }
          } else {
            result = <Text>{String(text)}</Text>;
          }
          return result;
        });
      }

      const flexContent = JC_TA_MAP[columnItem.align || 'center'];

      return (
        <View
          onClick={() => expandable && setExpansion(!expansion)}
          key={columnItem.key || columnItem.dataIndex}
          className={classnames({
            [colClassName]: true,
            [`${classSelector}_col`]: !Array.isArray(
              dataSourceItem[columnItem.dataIndex],
            ),
            [`${classSelector}_childCol`]: Array.isArray(
              dataSourceItem[columnItem.dataIndex],
            ),
            [`${classSelector}_fixed`]: columnItem.fixed,
            [`${classSelector}_expansion`]: expansion,
            [columnItem.className as string]: true,
          })}
          style={{
            textAlign: columnItem.align || 'center',
            justifyContent: flexContent,
            width: getSize(columnItem.width || DEFAULT_COL_WIDTH),
            [columnItem.fixed as string]:
              columnItem.fixed && getFixedDistance(columnItem.fixed, colIndex),
            ...columnItem.style,
            ...colStyle,
          }}
        >
          {result}
        </View>
      );
    });

    return (
      <View
        key={dataSourceItem[rowKey]}
        className={classnames({
          [`${classSelector}_row`]: true,
          [rowClassName]: true,
        })}
        style={rowStyle}
      >
        {rows}
      </View>
    );
  };

  const Empty = () => {
    return (
      <View className={`${classSelector}_empty`}>
        {empty || <Text>暂无数据</Text>}
      </View>
    );
  };

  const wrapWidth = useMemo((): number => {
    return columns.reduce(function (prev, cur) {
      return prev + (cur.width || DEFAULT_COL_WIDTH);
    }, 0);
  }, [columns]);

  if (error) {
    return null;
  }

  const tbodyScroll = Number(scroll.y) - 60;

  return (
    <View
      className={classnames(classSelector, className)}
      style={{
        width: wrapWidth,
        ...style,
      }}
    >
      {loading && (
        <Loading
          style={{ position: 'absolute', top: '0px', zIndex: 99 }}
          layerColor="rgba(255,255,255,.65)"
        />
      )}
      <ScrollView
        className={`${classSelector}_table`}
        scroll-x={dataSource.length !== 0 && scroll.x}
        scroll-y={scroll.y}
        style={{
          maxWidth: getSize(scroll.x as number | string),
          maxHeight: getSize(scroll.y as number | string),
        }}
      >
        <View
          className={classnames({
            [`${classSelector}_head`]: true,
            [`${classSelector}_scroll`]: scroll.y,
          })}
        >
          {columns.length === 0 ? (
            <Empty />
          ) : (
            columns.map((item, index) => (
              <Title
                key={item.key || item.dataIndex}
                column={item}
                index={index}
              />
            ))
          )}
        </View>
        <View
          className={`${classSelector}_body`}
          style={{ maxHeight: `${tbodyScroll}px` }}
        >
          {dataSource.length > 0 ? (
            dataSource.map((dataSourceItem, index) => (
              <Row
                key={dataSourceItem[rowKey]}
                dataSourceItem={dataSourceItem}
                index={index}
              />
            ))
          ) : (
            <Empty />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(Table);
