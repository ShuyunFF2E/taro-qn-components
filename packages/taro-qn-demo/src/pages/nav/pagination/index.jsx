import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import { CPagination } from 'taro-qn-components';

const PaginationDemo = () => {
  const [params, setParams] = useState({ current: 1, pageSize: 10 });

  const changePage = (cur, pgs) => {
    console.log('SSSSSSSSSS', cur, pgs);
    setParams({ current: cur, pageSize: pgs });
  };
  return (
    <View className="container">
      <View className="h1">基础分页</View>
      <View className="box">
        <CPagination
          total={50}
          current={params.current}
          pageSize={params.pageSize}
          onChange={changePage}
        />
      </View>
      <View className="h1">更多分页</View>
      <View className="box">
        <CPagination
          total={500}
          current={params.current}
          pageSize={params.pageSize}
          onChange={changePage}
        />
      </View>
      <View className="h1">修改条数</View>
      <View className="box">
        <CPagination
          total={500}
          current={params.current}
          pageSize={params.pageSize}
          onChange={changePage}
          showPageSizeOptions
        />
        <CPagination
          total={500}
          current={params.current}
          pageSize={params.pageSize}
          onChange={changePage}
          showPageSizeOptions
          pageSizeOptions={[30, 60]}
        />
      </View>
      <View className="h1">快速跳转</View>
      <View className="box">
        <CPagination
          total={500}
          current={params.current}
          pageSize={params.pageSize}
          onChange={changePage}
          showQuickJumper
        />
      </View>
      <View className="h1">多功能展示</View>
      <View className="box">
        <CPagination
          total={500}
          current={params.current}
          pageSize={params.pageSize}
          onChange={changePage}
          showQuickJumper
          showPageSizeOptions
        />
      </View>
    </View>
  );
};

export default NavBar()(PaginationDemo);
