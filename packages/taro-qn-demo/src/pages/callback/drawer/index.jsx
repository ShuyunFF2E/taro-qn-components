import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import { CButton, CDrawer, CRadio } from 'taro-qn-components';

const DrawerDemo = () => {
  const [drawerPlacement, setDrawerPlacement] = useState(false);
  const [drawerPlacement1, setDrawerPlacement1] = useState(false);
  const [value, setValue] = useState('left');
  const onRadioChange = (v) => {
    setValue(v);
  };

  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <CDrawer
          visible={drawerPlacement}
          title={'弹窗信息'}
          onClose={() => setDrawerPlacement(false)}
        >
          <View
            style={{ fontSize: '14px', lineHeight: '20px', padding: '10px' }}
          >
            北国风光，千里冰封，万里雪飘。
            望长城内外，惟余莽莽；大河上下，顿失滔滔。
            山舞银蛇，原驰蜡象，欲与天公试比高。 须晴日，看红装素裹，分外妖娆。
            江山如此多娇，引无数英雄竞折腰。
            惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。
            一代天骄，成吉思汗，只识弯弓射大雕。 俱往矣，数风流人物，还看今朝。
          </View>
        </CDrawer>
        <View style={{ marginBottom: '10px' }}>
          <CButton type="primary" onClick={() => setDrawerPlacement(true)}>
            open
          </CButton>
        </View>
      </View>
      <View className="h1">自定义位置</View>
      <View className="box">
        <CDrawer
          visible={drawerPlacement1}
          title={'标题信息'}
          placement={value}
          onClose={() => setDrawerPlacement1(false)}
        >
          <View
            style={{ fontSize: '14px', lineHeight: '20px', padding: '10px' }}
          >
            北国风光，千里冰封，万里雪飘。
            望长城内外，惟余莽莽；大河上下，顿失滔滔。
            山舞银蛇，原驰蜡象，欲与天公试比高。 须晴日，看红装素裹，分外妖娆。
            江山如此多娇，引无数英雄竞折腰。
            惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。
            一代天骄，成吉思汗，只识弯弓射大雕。 俱往矣，数风流人物，还看今朝。
          </View>
        </CDrawer>
        <View style={{ marginBottom: '10px' }}>
          <CRadio.Group onChange={onRadioChange} value={value}>
            <CRadio value="left">left</CRadio>
            <CRadio value="right">right</CRadio>
            <CRadio value="top">top</CRadio>
            <CRadio value="bottom">bottom</CRadio>
          </CRadio.Group>
        </View>
        <View style={{ marginBottom: '10px' }}>
          <CButton type="primary" onClick={() => setDrawerPlacement1(true)}>
            open
          </CButton>
        </View>
      </View>
      <View className="h1">禁止点击遮罩</View>
      <View className="box">
        <CDrawer
          visible={drawerPlacement}
          title={'弹窗信息'}
          onClose={() => setDrawerPlacement(false)}
          maskClosable={false}
        >
          <View
            style={{ fontSize: '14px', lineHeight: '20px', padding: '10px' }}
          >
            北国风光，千里冰封，万里雪飘。
            望长城内外，惟余莽莽；大河上下，顿失滔滔。
            山舞银蛇，原驰蜡象，欲与天公试比高。 须晴日，看红装素裹，分外妖娆。
            江山如此多娇，引无数英雄竞折腰。
            惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。
            一代天骄，成吉思汗，只识弯弓射大雕。 俱往矣，数风流人物，还看今朝。
          </View>
        </CDrawer>
        <View style={{ marginBottom: '10px' }}>
          <CButton type="primary" onClick={() => setDrawerPlacement(true)}>
            open
          </CButton>
        </View>
      </View>
    </View>
  );
};

export default NavBar()(DrawerDemo);
