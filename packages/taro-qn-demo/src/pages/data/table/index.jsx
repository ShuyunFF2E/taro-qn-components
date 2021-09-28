import React from 'react';
import { NavBar } from '@/common/navbar/index';
import { View, Text } from '@tarojs/components';
import { CTable, CIcon, CButton } from 'taro-qn-components';

@NavBar()
class CTableDemo extends React.Component {
  state = {
    loading: false,
    dataSource: [],
  };

  componentDidMount() {
    this.setState(
      {
        loading: true,
      },
      () => {
        setTimeout(() => {
          const dataSource = new Array(10).fill(null).map((_, key) => {
            const random = (n) => Math.ceil(Math.random() * n);
            return {
              user_id: key + 1,
              username: `努尔哈赤${(key + 1) % 5}`,
              telephone: `186888832${key + 10}`,
              price: random(1e2),
              sex: (key + 1) % 2,
              orderInfo: {
                price: random(1e3),
                orderName: `orderName_${key + 1}`,
                createTime: `createTime_${key + 1}`,
              },
              createTime: new Date().toLocaleString(),
              status: Math.random() > 0.5,
            };
          });
          this.setState({
            dataSource,
            loading: false,
          });
        }, 1000);
      },
    );
  }

  getBasicColumns = () => [
    {
      title: '用户名',
      dataIndex: 'username',
      render: (t) => {
        return <Text style={{ color: 'red' }}>{t}</Text>;
      },
    },
    {
      title: '性别',
      dataIndex: 'sex',
      width: '15%',
      render: (t) => {
        switch (String(t)) {
          case '0':
            return '男';
          case '1':
            return '女';
          default:
            return '-';
        }
      },
    },
    {
      title: '手机号',
      dataIndex: 'telephone',
      width: '15%',
    },
    {
      title: '余额',
      dataIndex: 'price',
      width: '10%',
      render: (t) => '￥' + t,
    },
    {
      title: '订单金额',
      width: '10%',
      dataIndex: 'orderInfo',
      render: (_, record) => record?.orderInfo?.price,
    },
    {
      title: '创建时间',
      width: '20%',
      dataIndex: 'createTime',
    },
    {
      title: '操作',
      dataIndex: 'status',
      width: '20%',
      align: 'center',
      render: (t) => {
        return (
          <CButton type={t ? 'normal' : 'primary'}>
            {t ? '启用' : '禁用'}
          </CButton>
        );
      },
    },
  ];

  getColumns = () => [
    {
      title: '用户名',
      dataIndex: 'username',
      sort: true,
      // 左固定列示例
      fixed: 'left',
      render: (t) => {
        return <Text style={{ color: 'red' }}>{t}</Text>;
      },
    },
    {
      title: '性别',
      dataIndex: 'sex',
      width: '15%',
      render: (t) => {
        switch (String(t)) {
          case '0':
            return '男';
          case '1':
            return '女';
          default:
            return '-';
        }
      },
    },
    {
      title: '手机号',
      dataIndex: 'telephone',
      width: '15%',
      sort: true,
      onSort: async (v) => {
        console.log('onSort -', v);
      },
    },
    {
      title: '余额',
      dataIndex: 'price',
      sort: true,
      width: '10%',
      render: (t) => '￥' + t,
    },
    {
      title: '订单金额',
      width: '10%',
      dataIndex: 'orderInfo',
      render: (_, record) => record?.orderInfo?.price,

      // 自定义排序方式示例
      sort: true,
      sorter: (a, b, sortOrder) => {
        if (sortOrder === 'ascend') {
          return a.orderInfo.price - b.orderInfo.price;
        } else {
          return b.orderInfo.price - a.orderInfo.price;
        }
      },
    },
    {
      title: '创建时间',
      width: '20%',
      dataIndex: 'createTime',
    },
    {
      title: '操作',
      dataIndex: 'status',
      sort: true,

      // 右固定列示例
      fixed: 'right',
      width: '20%',
      align: 'center',

      // 禁用点击展开功能
      expandable: false,

      render: (t) => {
        return (
          <CButton type={t ? 'normal' : 'primary'}>
            {t ? '启用' : '禁用'}
          </CButton>
        );
      },
    },
  ];

  render() {
    return (
      <View className="container">
        <View className="h1">空数据</View>
        <View className="box">
          <CTable
            colStyle={{ padding: '0 5px' }}
            columns={this.getBasicColumns()}
            dataSource={[]}
            empty={<Text>数据被外星人带走了</Text>}
            rowKey="user_id"
            loading={false}
          />
        </View>

        <View className="h1">基本展示</View>
        <View className="box">
          <CTable
            colStyle={{ padding: '0 5px' }}
            columns={this.getBasicColumns()}
            dataSource={this.state.dataSource}
            rowKey="user_id"
            loading={this.state.loading}
          />
        </View>

        <View className="h1">列排序</View>
        <View className="box">
          <CTable
            colStyle={{ padding: '0 5px' }}
            columns={this.getColumns()}
            dataSource={this.state.dataSource}
            rowKey="user_id"
            loading={this.state.loading}
          />
        </View>
      </View>
    );
  }
}

export default CTableDemo;
