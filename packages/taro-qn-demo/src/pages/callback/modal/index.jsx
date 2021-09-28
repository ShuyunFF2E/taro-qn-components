import React, { useState } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { NavBar } from '@/common/navbar/index';
import { CModal, CButton } from 'taro-qn-components';

const ModalDemo = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <CButton onClick={() => setVisible(true)} type="primary">
          弹出模态框
        </CButton>
        <CModal visible={visible} onClose={() => setVisible(false)}>
          <View>modal弹出的内容</View>
        </CModal>
      </View>
      <View className="h1">对话框用法</View>
      <View className="box">
        <CButton onClick={() => setVisible1(true)} type="primary">
          弹出对话框
        </CButton>
        <CModal
          visible={visible1}
          onClose={() => setVisible1(false)}
          onCancel={() => setVisible1(false)}
          hasFooter
        >
          <View>modal弹出的内容</View>
        </CModal>
      </View>
      <View className="h1">自定义页脚</View>
      <View className="box">
        <CButton onClick={() => setVisible2(true)} type="primary">
          弹出自定义页脚框
        </CButton>
        <CModal
          visible={visible2}
          title="显示title"
          onClose={() => setVisible2(false)}
          hasFooter
          footer={[
            <CButton
              key="back"
              onClick={() => setVisible2(false)}
              style={{ marginRight: '10px' }}
            >
              返回
            </CButton>,
            <CButton type="primary">提交</CButton>,
          ]}
        >
          <View>Some contents...</View>
          <View>Some contents...</View>
          <View>Some contents...</View>
          <View>Some contents...</View>
        </CModal>
      </View>
    </View>
  );
};

export default NavBar()(ModalDemo);
