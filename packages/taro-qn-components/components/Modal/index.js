import React, { useEffect } from 'react';
import { View } from '@tarojs/components';
import cls from 'classnames';
import PropTypes from 'prop-types';
import CIcon from '../Icon';
import CButton from '../Button';
import './index.less';
import { prefixCls } from '../const';

const CModalHeader = ({ children, className }) => {
  return (
    <View className={`${prefixCls}-modal-box-header ${className}`}>
      {children}
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
    onClose: PropTypes.func,
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
    showMask: PropTypes.bool,
    okText: PropTypes.string,
    cancelText: PropTypes.string,
    hasFooter: PropTypes.bool,
  };

  static defaultProps = {
    visible: false,
    title: '提示',
    onClose: () => {},
    onCancel: () => {},
    onOk: () => {},
    showMask: true,
    okText: '确定',
    cancelText: '取消',
    hasFooter: false,
    footer: '',
  };

  CModalFooter = () => {
    const { okText, cancelText } = this.props;
    return (
      <View className={`${prefixCls}-modal-box-footer`}>
        <CButton
          className={`${prefixCls}-modal-box-footer-button`}
          onClick={() => this.props.onCancel()}
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
    const { title, hasFooter, visible, showMask, footer } = this.props;
    return (
      <View
        className={cls({
          [`${prefixCls}-modal-wrapper`]: true,
          [`${prefixCls}-modal-isShow`]: visible,
        })}
      >
        {showMask && <View className={`${prefixCls}-modal-mask`}></View>}

        <View className={`${prefixCls}-modal-box`}>
          <CIcon
            onClick={() => this.props.onClose()}
            className={`${prefixCls}-modal-close-icon`}
            type="close"
          />
          {typeof title === 'string' ? (
            <CModalHeader>{title}</CModalHeader>
          ) : (
            title
          )}
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
