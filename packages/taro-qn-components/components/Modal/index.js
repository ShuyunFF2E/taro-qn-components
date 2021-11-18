import React, { useEffect } from 'react';
import { View } from '@tarojs/components';
import cls from 'classnames';
import PropTypes from 'prop-types';
import CIcon from '../Icon';
import CButton from '../Button';
import './index.less';
import { prefixCls } from '../const';

const CModalHeader = ({ children, className, onCancel }) => {
  return (
    <View className={`${prefixCls}-modal-box-header ${className}`}>
      {children}
      <CIcon
        onClick={onCancel}
        className={`${prefixCls}-modal-close-icon`}
        type="close"
      />
    </View>
  );
};

export default class CModal extends React.Component {
  state = {
    visible: this.props.visible,
  };

  static propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
    showMask: PropTypes.bool,
    okText: PropTypes.string,
    cancelText: PropTypes.string,
    hasFooter: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    visible: false,
    title: '提示',
    onCancel: () => {},
    onOk: () => {},
    showMask: true,
    okText: '确定',
    cancelText: '取消',
    hasFooter: false,
    footer: '',
    width: 520,
  };

  CModalFooter = () => {
    const { okText, cancelText, onCancel } = this.props;
    return (
      <View className={`${prefixCls}-modal-box-footer`}>
        <CButton
          className={`${prefixCls}-modal-box-footer-button`}
          onClick={onCancel}
        >
          {cancelText}
        </CButton>
        <CButton type="primary" onClick={() => this.props.onOk()}>
          {okText}
        </CButton>
      </View>
    );
  };

  render() {
    const { width, title, hasFooter, visible, showMask, footer, onCancel } =
      this.props;
    return (
      <View
        className={cls({
          [`${prefixCls}-modal-wrapper`]: true,
          [`${prefixCls}-modal-isShow`]: visible,
        })}
      >
        {showMask && <View className={`${prefixCls}-modal-mask`}></View>}

        <View className={`${prefixCls}-modal-box`} style={{ width }}>
          <CModalHeader onCancel={onCancel}>{title}</CModalHeader>
          <View className={`${prefixCls}-modal-box-content`}>
            {this.props.children}
          </View>
          {hasFooter ? (
            !footer ? (
              this.CModalFooter()
            ) : (
              <View className={`${prefixCls}-modal-box-footer`}>{footer}</View>
            )
          ) : null}
        </View>
      </View>
    );
  }
}
