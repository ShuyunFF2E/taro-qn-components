import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View } from '@tarojs/components';
import classnames from 'classnames';

import { prefixCls } from '../../const';
import { InputProps, SearchVal } from '../type';
import CIcon from '../../Icon';
import CInput from '../../Input';

const classSelector = `${prefixCls}-cascader`;

// 三种尺寸的class
const classSizeObj = {
  ['default']: `${classSelector}-default-size`,
  ['large']: `${classSelector}-large-size`,
  ['small']: `${classSelector}-small-size`,
};

const Input: React.FC<InputProps> = ({
  placeholder,
  onInputEvent,
  isOpen,
  selectValue,
  disabled,
  allowClear,
  onClear,
  showSearch,
  onSearch,
  size = 'default',
}) => {
  // 存储search input输入值
  const [inputVal, setInputVal] = useState<SearchVal>(selectValue);

  // 存储search input占位符
  const inputPlaceholder = useMemo(() => {
    if (isOpen) {
      return selectValue || placeholder;
    }
    return selectValue ? null : placeholder;
  }, [selectValue, isOpen]);

  // 是否自动获取焦点
  const [isAutoFocus, setIsAutoFocus] = useState(false);

  // search模式下的失去焦点
  const searchOnBlur = () => {
    setIsAutoFocus(false);

    // 只清除input值
    setInputVal(selectValue);
  };

  // search模式下的每次change
  const change = useCallback(
    (val) => {
      if (!showSearch) return;

      setInputVal(val);

      onSearch(val);
    },
    [showSearch],
  );

  // search模式下的获取焦点
  const searchOnFocus = () => {
    setIsAutoFocus(true);

    // 清除input的值 以及 传递清除值
    change(null);

    onInputEvent(true);
  };

  // 清空input val 以及传递
  useEffect(() => {
    change(null);

    setInputVal(selectValue);
  }, [selectValue]);

  return (
    <View>
      <CInput
        className={classnames({
          [`${classSelector}-input`]: true,
          [classSizeObj[size]]: true,
          [`${classSelector}-input-hover`]: isOpen,
          [`${classSelector}-placeholder`]: !!selectValue,
          [`${classSelector}-disable`]: disabled,
        })}
        placeholderStyle={!!selectValue ? 'color:#060606;' : ''}
        value={inputVal}
        onBlur={searchOnBlur}
        onFocus={searchOnFocus}
        onChange={change}
        disabled={disabled}
        isAutoFocus={isAutoFocus}
        placeholder={inputPlaceholder || selectValue}
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
          className={classnames(isOpen ? 'down' : 'up')}
        />
      )}
    </View>
  );
};

export default Input;
