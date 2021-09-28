import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { NavBar } from '@/common/navbar/index';
import { CUploadImage } from 'taro-qn-components';

const UploadImageDemo = () => {
  const [files, setFiles] = useState([
    {
      url: 'https://brand-guide.shuyun.com/IAM/4eaee9ab1e63.png',
    },
    {
      url: 'https://brand-guide.shuyun.com/IAM/54c7fbd59ef1.png',
    },
    {
      url: 'https://brand-guide.shuyun.com/IAM/623c35dd3c73.png',
    },
  ]);

  const onChangeImage = (files) => {
    setFiles(files);
  };

  return (
    <View className="container">
      <View className="h1">基本展示</View>
      <View className="box">
        <CUploadImage files={files} onChange={onChangeImage} />
      </View>
      <View className="h1">多选图片</View>
      <View className="box">
        <CUploadImage files={files} onChange={onChangeImage} multiple />
      </View>
      <View className="h1">自定义数量</View>
      <View className="box">
        <CUploadImage files={files} onChange={onChangeImage} count={10} />
      </View>
      <View className="h1">多预览模式</View>
      <View className="box">
        <CUploadImage files={files} onChange={onChangeImage} mode="top" />
      </View>
    </View>
  );
};

export default NavBar()(UploadImageDemo);
