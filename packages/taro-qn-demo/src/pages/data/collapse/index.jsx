import React from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { NavBar } from '@/common/navbar/index';
import { CCollapse, CIcon } from 'taro-qn-components';

const CollapseDemo = () => {
  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <CCollapse value={[]}>
          <CCollapse.Item header="鹊桥仙·纤云弄巧-秦观">
            金凤玉露一相逢，便胜却人间无数
          </CCollapse.Item>
          <CCollapse.Item header="车遥遥篇-范成大">
            愿我如星君如月，夜夜流星相皎洁
          </CCollapse.Item>
        </CCollapse>
      </View>
      <View className="h1">手风琴</View>
      <View className="box">
        <CCollapse accordion value={[]}>
          <CCollapse.Item header="鹊桥仙·纤云弄巧-秦观">
            金凤玉露一相逢，便胜却人间无数
          </CCollapse.Item>
          <CCollapse.Item header="车遥遥篇-范成大">
            愿我如星君如月，夜夜流星相皎洁
          </CCollapse.Item>
        </CCollapse>
      </View>
      <View className="h1">面板嵌套</View>
      <View className="box">
        <CCollapse accordion value={[]}>
          <CCollapse.Item header="鹊桥仙·纤云弄巧-秦观">
            <CCollapse accordion value={[]}>
              <CCollapse.Item header="鹊桥仙·纤云弄巧-秦观">
                金凤玉露一相逢，便胜却人间无数
              </CCollapse.Item>
              <CCollapse.Item header="车遥遥篇-范成大">
                愿我如星君如月，夜夜流星相皎洁
              </CCollapse.Item>
            </CCollapse>
          </CCollapse.Item>
          <CCollapse.Item header="车遥遥篇-范成大">
            愿我如星君如月，夜夜流星相皎洁
          </CCollapse.Item>
        </CCollapse>
      </View>
      <View className="h1">简洁风格</View>
      <View className="box">
        <CCollapse accordion bordered={false} value={[]}>
          <CCollapse.Item header="鹊桥仙·纤云弄巧-秦观">
            金凤玉露一相逢，便胜却人间无数
          </CCollapse.Item>
          <CCollapse.Item header="车遥遥篇-范成大">
            愿我如星君如月，夜夜流星相皎洁
          </CCollapse.Item>
        </CCollapse>
      </View>
      <View className="h1">隐藏箭头</View>
      <View className="box">
        <CCollapse accordion value={[]}>
          <CCollapse.Item showArrow={false} header="鹊桥仙·纤云弄巧-秦观">
            金凤玉露一相逢，便胜却人间无数
          </CCollapse.Item>
          <CCollapse.Item header="车遥遥篇-范成大">
            愿我如星君如月，夜夜流星相皎洁
          </CCollapse.Item>
        </CCollapse>
      </View>
      <View className="h1">额外节点</View>
      <View className="box">
        <CCollapse value={[]}>
          <CCollapse.Item
            extra={<CIcon type="add" />}
            header="鹊桥仙·纤云弄巧-秦观"
          >
            金凤玉露一相逢，便胜却人间无数
          </CCollapse.Item>
          <CCollapse.Item header="车遥遥篇-范成大">
            愿我如星君如月，夜夜流星相皎洁
          </CCollapse.Item>
        </CCollapse>
      </View>
    </View>
  );
};

export default NavBar()(CollapseDemo);
