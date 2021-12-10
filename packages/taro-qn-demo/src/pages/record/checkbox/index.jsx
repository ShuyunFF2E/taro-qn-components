import Taro from '@tarojs/taro';
import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import { CCheckbox, CButton, CDivider, Row, Col } from 'taro-qn-components';

const defaultCheckedList = ['Apple', 'Orange'];

const CheckboxDemo = () => {
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
  const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
  ];

  const itemOptions = [
    {
      value: 'A',
      label: '连续签到',
    },
    {
      value: 'B',
      label: '邀请好友领卡排行榜',
    },
    {
      value: 'C',
      label: '完善资料',
    },
    {
      value: 'D',
      label: '拼图',
    },
  ];

  const [checkState, onChangeCk] = useState({
    checked: true,
    disabled: false,
  });
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChangeAll = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.checked);
  };

  const onChange1 = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  const onChange2 = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  const onChange3 = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

  const toggleChecked = () => {
    onChangeCk({ ...checkState, checked: !checkState.checked });
  };

  const toggleDisable = () => {
    onChangeCk({ ...checkState, disabled: !checkState.disabled });
  };

  const onChangeState = (e) => {
    onChangeCk({ ...checkState, checked: e.checked });
  };

  function onChangeColRow(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  return (
    <View className="container">
      <View className="h1">基本用法</View>
      <View className="box">
        <CCheckbox>Checkbox</CCheckbox>
      </View>
      <View className="h1">不可用方式</View>
      <View className="box">
        <CCheckbox defaultChecked={false} disabled>
          禁止（未选中）
        </CCheckbox>
        <CCheckbox defaultChecked disabled>
          禁止（选中）
        </CCheckbox>
      </View>
      <View className="h1">受控方式</View>
      <View className="box">
        <CCheckbox checked={checkState.checked} disabled={checkState.disabled} onChange={onChangeState}>
          {`${checkState.checked ? 'Checked' : 'Unchecked'}-${checkState.disabled ? 'Disabled' : 'Enabled'}`}
        </CCheckbox>
        <View>
          <CButton className="btn-space" type="primary" onClick={toggleChecked}>
            {checkState.checked ? 'Check' : 'Uncheck'}
          </CButton>
          <CButton className="btn-space" style={{ margin: '0 10px' }} type="primary" onClick={toggleDisable}>
            {checkState.disabled ? 'Disable' : 'Enable'}
          </CButton>
        </View>
      </View>
      <View className="h1">Checkbox 组</View>
      <View className="box">
        <View className="btn-space">
          <CCheckbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange1} />
        </View>
        <View className="btn-space">
          <CCheckbox.Group options={options} defaultValue={['Pear']} onChange={onChange2} />
        </View>
        <View className="btn-space">
          <CCheckbox.Group
            options={optionsWithDisabled}
            // disabled
            defaultValue={['Apple', 'Orange']}
            onChange={onChange3}
          />
        </View>
      </View>
      <View className="h1">全选</View>
      <View className="box">
        <CCheckbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
          {checkAll}
          Check all
        </CCheckbox>
        <CDivider />
        <CCheckbox.Group options={plainOptions} value={checkedList} onChange={onChangeAll} />
      </View>
      <View className="h1">JSX布局</View>
      <View className="box">
        <CCheckbox.Group onChange={onChangeColRow} value={['A', 'B']}>
          <Row>
            <Col span={8}>
              <CCheckbox value="A">A</CCheckbox>
            </Col>
            <Col span={8}>
              <CCheckbox value="B">B</CCheckbox>
            </Col>
            <Col span={8}>
              <CCheckbox value="C">C</CCheckbox>
            </Col>
            <Col span={8}>
              <CCheckbox value="D">D</CCheckbox>
            </Col>
            <Col span={8}>
              <CCheckbox value="E">E</CCheckbox>
            </Col>
          </Row>
        </CCheckbox.Group>
      </View>
      <View className="h1">Group自定义子元素样式</View>
      <View className="box">
        <CCheckbox.Group options={itemOptions} itemStyle={{ width: 180 }} onChange={onChangeColRow} value={['A']} />
      </View>
    </View>
  );
};

export default NavBar()(CheckboxDemo);
