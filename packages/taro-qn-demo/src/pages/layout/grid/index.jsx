import React from 'react';
import { NavBar } from '@/common/navbar';
import { View } from '@tarojs/components';
import { Row, Col } from 'taro-qn-components';
import './index.less';
const GridDemo = () => {
  return (
    <View className="container demo-layout">
      <View className="h1">基础布局</View>
      <View className="box">
        <Row>
          <Col span="24">
            <View className="grid-content bg-purple-dark"></View>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <View className="grid-content bg-purple"></View>
          </Col>
          <Col span="12">
            <View className="grid-content bg-purple-light"></View>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <View className="grid-content bg-purple"></View>
          </Col>
          <Col span="8">
            <View className="grid-content bg-purple-light"></View>
          </Col>
          <Col span="8">
            <View className="grid-content bg-purple"></View>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <View className="grid-content bg-purple"></View>
          </Col>
          <Col span="6">
            <View className="grid-content bg-purple-light"></View>
          </Col>
          <Col span="6">
            <View className="grid-content bg-purple"></View>
          </Col>
          <Col span="6">
            <View className="grid-content bg-purple-light"></View>
          </Col>
        </Row>
        <Row>
          <Col span="4">
            <View className="grid-content bg-purple"></View>
          </Col>
          <Col span="4">
            <View className="grid-content bg-purple-light"></View>
          </Col>
          <Col span="4">
            <View className="grid-content bg-purple"></View>
          </Col>
          <Col span="4">
            <View className="grid-content bg-purple-light"></View>
          </Col>
          <Col span="4">
            <View className="grid-content bg-purple"></View>
          </Col>
          <Col span="4">
            <View className="grid-content bg-purple-light"></View>
          </Col>
        </Row>
      </View>
      <View className="h1">分栏间隔</View>
      <Row gutter="8">
        <Col span="6">
          <View className="grid-content bg-purple"></View>
        </Col>
        <Col span="6">
          <View className="grid-content bg-purple"></View>
        </Col>
        <Col span="6">
          <View className="grid-content bg-purple"></View>
        </Col>
        <Col span="6">
          <View className="grid-content bg-purple"></View>
        </Col>
      </Row>
      <View className="h1">混合布局</View>
      <Row gutter="20">
        <Col span="16">
          <View className="grid-content bg-purple"></View>
        </Col>
        <Col span="8">
          <View className="grid-content bg-purple"></View>
        </Col>
      </Row>
      <Row gutter="20">
        <Col span="8">
          <View className="grid-content bg-purple"></View>
        </Col>
        <Col span="8">
          <View className="grid-content bg-purple"></View>
        </Col>
        <Col span="4">
          <View className="grid-content bg-purple"></View>
        </Col>
        <Col span="4">
          <View className="grid-content bg-purple"></View>
        </Col>
      </Row>
      <Row gutter="20">
        <Col span="4">
          <View className="grid-content bg-purple"></View>
        </Col>
        <Col span="16">
          <View className="grid-content bg-purple"></View>
        </Col>
        <Col span="4">
          <View className="grid-content bg-purple"></View>
        </Col>
      </Row>
    </View>
  );
};

export default NavBar()(GridDemo);
