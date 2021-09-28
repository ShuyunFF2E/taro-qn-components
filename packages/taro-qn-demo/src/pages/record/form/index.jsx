import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import {
  CForm,
  CInput,
  CSelect,
  CRadio,
  CCheckbox,
  CSwitch,
  CButton,
  CTextarea,
  CField,
} from 'taro-qn-components';

const OPTIONS = [
  {
    key: 'vip',
    value: '高级用户',
  },
  {
    key: 'normal',
    value: '普通用户',
  },
];

const checkboxOption = [
  {
    value: 'movies',
    label: '电影🎬',
  },
  {
    value: 'books',
    label: '书籍📚',
  },
  {
    value: 'tourist',
    label: '旅行✈️',
  },
];

@NavBar()
class FormDemo extends Component {
  field = new CField(this);

  onSubmit = () => {
    this.field.validate((errs, values) => {
      console.log(errs, values);
    });
  };

  onReset = () => {
    this.field.reset();
  };

  onClear = () => {
    this.field.clear();
  };

  render() {
    const formItemLayout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 18,
      },
    };

    const { init } = this.field;
    return (
      <View className="container">
        <View className="h1"> 基本用法 </View>
        <View className="box">
          <CForm {...formItemLayout} field={this.field}>
            <CForm.Item label="昵称" required>
              <CInput
                placeholder="请输入昵称"
                {...init('name', {
                  rules: [{ required: true, message: '请输入你的昵称哦～' }],
                  initValue: '哈喽',
                })}
              />
            </CForm.Item>
            <CForm.Item label="类型" required>
              <CSelect
                options={OPTIONS}
                {...init('types', {
                  rules: [{ required: true }],
                })}
              />
            </CForm.Item>
            <CForm.Item label="性别" required>
              <CRadio.Group
                {...init('sex', {
                  rules: [{ required: true }],
                })}
              >
                <CRadio value={1}>男</CRadio>
                <CRadio value={2}>女</CRadio>
              </CRadio.Group>
            </CForm.Item>
            <CForm.Item label="兴趣标签" required>
              <CCheckbox.Group
                options={checkboxOption}
                {...init('hobbise', {
                  rules: [{ required: true }],
                })}
              />
            </CForm.Item>
            <CForm.Item label="公开个人信息">
              <CSwitch
                {...init('isPublic', {
                  valueName: 'checked',
                })}
              />
            </CForm.Item>
            <CForm.Item label="备注" help="备注信息，请进行查看显示...">
              <CTextarea {...init('remark')} />
            </CForm.Item>
            <CForm.Item wrapperCol={{ span: 16, offset: 4 }}>
              <CButton
                className="btn-space"
                type="primary"
                onClick={this.onSubmit}
              >
                Submit
              </CButton>
              <CButton className="btn-space" onClick={this.onReset}>
                Reset
              </CButton>
              <CButton className="btn-space" onClick={this.onClear} type="link">
                clear
              </CButton>
            </CForm.Item>
          </CForm>
        </View>
      </View>
    );
  }
}

export default FormDemo;
