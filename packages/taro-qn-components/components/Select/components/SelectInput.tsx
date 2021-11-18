/*
 * @Author: sevenFlow
 * @Date: 2021-07-13 10:38:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-26 14:38:10
 * @Description:
 */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from 'react';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import CInput from '../../Input';
import { prefixCls } from '../../const';
import CIcon from '../../Icon';
import { SelectInputProps, SearchVal } from '../types';

const classSelector = `${prefixCls}-select`;

// 三种尺寸的class
const classSizeObj = {
  ['default']: `${classSelector}-default-size`,
  ['large']: `${classSelector}-large-size`,
  ['small']: `${classSelector}-small-size`,
};

const SelectInput: React.FC<SelectInputProps> = ({
  isOpen,
  onEventInput,
  selectedVal,
  placeholder,
  disabled,
  showSearch,
  onSearch,
  allowClear,
  onClearSelect,
  size = 'default',
}) => {
  // 存储search input输入值
  const [inputVal, setInputVal] = useState<SearchVal>(selectedVal);

  // 存储定时器
  const timer = useRef<NodeJS.Timeout | undefined>();

  // 存储search input占位符
  const inputPlaceholder = useMemo(() => {
    if (isOpen) {
      return selectedVal || placeholder;
    }
    return selectedVal ? null : placeholder;
  }, [selectedVal, isOpen]);

  // 是否自动获取焦点
  const [isAutoFocus, setIsAutoFocus] = useState(false);

  // search模式下的每次change
  const change = useCallback(
    (val) => {
      if (!showSearch) return;

      setInputVal(val);

      onSearch(val);
    },
    [showSearch],
  );

  // search模式下的失去焦点
  const searchOnBlur = () => {
    setIsAutoFocus(false);

    // 重置input值
    setInputVal(selectedVal);

    // 为了延迟blur和click的冲突，主要是H5端
    timer.current = setTimeout(() => {
      onEventInput();
    }, 200);
  };

  // search模式下的获取焦点
  const searchOnFocus = () => {
    setIsAutoFocus(true);

    // 清除input的值 以及 传递清除值
    change(null);

    onEventInput();
  };

  // 清空input val 以及传递
  useEffect(() => {
    change(null);

    setInputVal(selectedVal);
  }, [selectedVal]);

  // 清除函数
  const onClear = useCallback(() => {
    change(null);
    onClearSelect();
  }, []);

  // 组件销毁
  useEffect(() => {
    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, []);

  return (
    <View>
      <CInput
        className={classnames({
          [`${classSelector}-input`]: true,
          [`${classSelector}-input-hover`]: isOpen,
          [classSizeObj[size]]: true,
          [`${classSelector}-placeholder-search`]: !!selectedVal,
          [`${classSelector}-disable`]: disabled,
        })}
        placeholderStyle={!!selectedVal ? 'color:#060606;' : ''}
        value={inputVal}
        onBlur={searchOnBlur}
        onFocus={searchOnFocus}
        onChange={change}
        disabled={disabled}
        isAutoFocus={isAutoFocus}
        placeholder={inputPlaceholder || selectedVal}
      />
      {allowClear ? (
        <CIcon
          type="guanbi"
          className="close"
          onClick={() => {
            onClear();
          }}
        />
      ) : (
        <CIcon
          type="arrow_left"
          className={classnames({
            up: isOpen,
            down: !isOpen,
          })}
          onClick={() => {
            onEventInput();
          }}
        />
      )}
    </View>
  );
};

export default SelectInput;
