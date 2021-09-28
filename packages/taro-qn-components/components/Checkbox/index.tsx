import React from 'react';
import { View } from '@tarojs/components';
import cls from 'classnames';
import CheckboxGroupContext from './context';
import { CCheckboxProps, CCheckboxState } from './types/checkbox';
import CIcon from '../Icon';
import Group from './group';
import './index.less';

export default class CCheckbox extends React.Component<
  CCheckboxProps<any>,
  CCheckboxState
> {
  public static defaultProps: CCheckboxProps<any>;

  static Group = Group;

  constructor(props) {
    super(props);

    this.state = {
      checked: props.defaultChecked,
    };
  }

  static contextType = CheckboxGroupContext;

  handleClick = () => {
    const { onChange, disabled, value } = this.props;
    if (disabled) return;
    const checked = !this.isChecked();
    this.setState({ checked });
    if (this.context) {
      const { toggleOption, disabled: groupDidabled } = this.context;
      if (groupDidabled) return;
      toggleOption({ checked, value });
    } else {
      onChange && onChange({ checked, value });
    }
  };

  isChecked = () => {
    const { checked, value } = this.props;
    if (this.context) {
      const { value: groupValue } = this.context;
      return groupValue.indexOf(value) !== -1;
    }
    return checked === undefined ? this.state.checked : checked;
  };

  render() {
    const { style, className, value, disabled, children, indeterminate } =
      this.props;

    const rootCls = cls('cross-checkbox', className);
    const checked = this.isChecked();

    let groupDisabled = false;
    if (this.context) {
      groupDisabled = this.context.disabled;
    }

    const optionCls = cls('cross-checkbox__option', {
      'cross-checkbox__option--disabled': groupDisabled || disabled,
      'cross-checkbox__option--selected': checked || indeterminate,
    });
    return (
      <View className={rootCls} style={style}>
        <View className={optionCls} key={value} onClick={this.handleClick}>
          <View className="cross-checkbox__option-wrap">
            <View className="cross-checkbox__option-cnt">
              <View className="cross-checkbox__icon-cnt">
                {(checked || indeterminate) &&
                  (checked ? (
                    <CIcon
                      type="check"
                      className="cross-checkbox__icon_check"
                    />
                  ) : (
                    <CIcon
                      type="indeterminate"
                      className="cross-checkbox__icon_check"
                    />
                  ))}
              </View>
              <View className="cross-checkbox__title">{children}</View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

CCheckbox.defaultProps = {
  style: {},
  className: '',
  value: '',
  defaultChecked: false,
  disabled: false,
  onChange: () => {},
  indeterminate: false,
};
