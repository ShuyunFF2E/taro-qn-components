import React from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Block } from '@tarojs/components';
import { menus } from '../../constant';
import './index.less';
import { CButton, CBackTop } from 'taro-qn-components';

class Index extends React.Component {
  goLinks = (base, key) => {
    Taro.navigateTo({
      url: `/pages/${base}/${key}/index`,
    });
  };

  state = {
    scrollTop: 0,
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  onPageScroll(e) {
    this.setState({
      scrollTop: e.scrollTop,
    });
  }

  render() {
    const { scrollTop } = this.state;
    return (
      <CBackTop visible={Number(scrollTop) >= 400}>
        <View className="home">
          <View className="nav">
            <View className="title">千牛UI 组件库</View>
            <View className="desc">
              这里汇集了 千牛UI 组件库 相关的所有资源。
            </View>
          </View>
          <View className="box">
            {menus.map((item) => (
              <Block key={item.key}>
                <View className="title">
                  {item.name} & {item.key}
                </View>
                <View className="container" key={item.key}>
                  {item.children &&
                    item.children.map((child) => (
                      <View
                        className="item"
                        onClick={() => this.goLinks(item.key, child.key)}
                        key={child.key}
                      >
                        <Text>{child.cname}</Text>
                        <View className="key">{child.key}</View>
                      </View>
                    ))}
                </View>
              </Block>
            ))}
          </View>
        </View>
      </CBackTop>
    );
  }
}
export default Index;
