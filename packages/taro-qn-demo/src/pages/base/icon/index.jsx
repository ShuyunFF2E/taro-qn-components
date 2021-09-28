import React from 'react';
import { NavBar } from '@/common/navbar/index';
import { View, Text } from '@tarojs/components';
import { CIcon } from 'taro-qn-components';
import './index.less';
const lists = [
  {
    icon_id: '230862132',
    name: 'indeterminate',
    font_class: 'indeterminate',
    unicode: 'e605',
  },
  {
    icon_id: '230862111',
    name: '日历',
    font_class: 'calendar',
    unicode: 'e604',
    unicode_decimal: 58880,
  },
  {
    icon_id: '23086210',
    name: '关闭',
    font_class: 'guanbi',
    unicode: 'e600',
    unicode_decimal: 58880,
  },
  {
    icon_id: '23086211',
    name: '成功完成',
    font_class: 'success',
    unicode: 'e601',
    unicode_decimal: 58881,
  },
  {
    icon_id: '23086212',
    name: '删除',
    font_class: 'shanchu',
    unicode: 'e602',
    unicode_decimal: 58882,
  },
  {
    icon_id: '23086213',
    name: '笑脸',
    font_class: 'smile',
    unicode: 'e603',
    unicode_decimal: 58883,
  },
  {
    icon_id: '22835167',
    name: '星星',
    font_class: 'star',
    unicode: 'e70a',
    unicode_decimal: 59146,
  },
  {
    icon_id: '22045419',
    name: '对号',
    font_class: 'check',
    unicode: 'e6f9',
    unicode_decimal: 59129,
  },
  {
    icon_id: '22038689',
    name: '右',
    font_class: 'right',
    unicode: 'e6f7',
    unicode_decimal: 59127,
  },
  {
    icon_id: '22038683',
    name: '下',
    font_class: 'down1',
    unicode: 'e6f6',
    unicode_decimal: 59126,
  },
  {
    icon_id: '22038440',
    name: '下',
    font_class: 'down',
    unicode: 'e6f3',
    unicode_decimal: 59123,
  },
  {
    icon_id: '22038423',
    name: '上',
    font_class: 'up',
    unicode: 'e6f2',
    unicode_decimal: 59122,
  },
  {
    icon_id: '22038357',
    name: '编辑',
    font_class: 'edit',
    unicode: 'e6f1',
    unicode_decimal: 59121,
  },
  {
    icon_id: '21984133',
    name: '关闭',
    font_class: 'close',
    unicode: 'e6ed',
    unicode_decimal: 59117,
  },
  {
    icon_id: '21949559',
    name: '减',
    font_class: 'minus',
    unicode: 'e6ec',
    unicode_decimal: 59116,
  },
  {
    icon_id: '21949125',
    name: '搜索',
    font_class: 'search',
    unicode: 'e6eb',
    unicode_decimal: 59115,
  },
  {
    icon_id: '21888049',
    name: '收藏',
    font_class: 'collect',
    unicode: 'e6e7',
    unicode_decimal: 59111,
  },
  {
    icon_id: '21876632',
    name: '右2',
    font_class: 'arrow_dright',
    unicode: 'e6e6',
    unicode_decimal: 59110,
  },
  {
    icon_id: '21876461',
    name: '左2',
    font_class: 'arrow_dleft',
    unicode: 'e6e5',
    unicode_decimal: 59109,
  },
  {
    icon_id: '21876336',
    name: '右',
    font_class: 'arrow_right',
    unicode: 'e6e2',
    unicode_decimal: 59106,
  },
  {
    icon_id: '21876337',
    name: '点',
    font_class: 'point',
    unicode: 'e6e3',
    unicode_decimal: 59107,
  },
  {
    icon_id: '21876338',
    name: '左',
    font_class: 'arrow_left',
    unicode: 'e6e4',
    unicode_decimal: 59108,
  },
  {
    icon_id: '21810525',
    name: '格子',
    font_class: 'grid',
    unicode: 'e6d8',
    unicode_decimal: 59096,
  },
  {
    icon_id: '21810531',
    name: '列表',
    font_class: 'list',
    unicode: 'e6d9',
    unicode_decimal: 59097,
  },
  {
    icon_id: '21810453',
    name: '复制',
    font_class: 'copy',
    unicode: 'e6d7',
    unicode_decimal: 59095,
  },
  {
    icon_id: '21810420',
    name: '上',
    font_class: 'arrow_up',
    unicode: 'e6d3',
    unicode_decimal: 59091,
  },
  {
    icon_id: '21810421',
    name: '加号',
    font_class: 'add',
    unicode: 'e6d4',
    unicode_decimal: 59092,
  },
  {
    icon_id: '21810422',
    name: '问号',
    font_class: 'help',
    unicode: 'e6d5',
    unicode_decimal: 59093,
  },
  {
    icon_id: '21810423',
    name: '下',
    font_class: 'arrow_down',
    unicode: 'e6d6',
    unicode_decimal: 59094,
  },
  {
    icon_id: '21810382',
    name: '删除',
    font_class: 'delete',
    unicode: 'e6d2',
    unicode_decimal: 59090,
  },
];
const CIconDemo = () => {
  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <View className="icon-box">
          {lists.map((item) => (
            <View className="icon-item" key={item.font_class}>
              <CIcon
                type={item.font_class}
                size={24}
                onClick={() => console.log('ssssss', item)}
              />
              <Text className="name">{item.name}</Text>
              <Text className="name">{item.font_class}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default NavBar()(CIconDemo);
