import React, { Component } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import ItemAvatar from '../index';
import List from '../../List';

export default class ItemExample extends Component {
  render() {
    const data = {
      onPress: e => console.warn(e),
      title: '标题标题标题标题标题标题标题标题标题标题',
      details:
        '详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊',
    };
    const checkData = {
      onPress: e => console.warn(e),
      leftIcon: {
        uri:
          'https://gw.alipayobjects.com/zos/rmsportal/wsBGpRlCOkmxHzMHuyAT.jpg',
      },
      rightIcon: 'none',
      title: '标题标题标题标题标题标题标题标题标题标题',
      note: '说明说明说明说明说明说明说明说明说明',
      details:
        '详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊',
    };
    return (
      <List header="ItemAvatar">
        <ItemAvatar {...data} />
        <ItemAvatar {...data} />
        <ItemAvatar {...data} />
        <ItemAvatar {...checkData} />
        <ItemAvatar {...checkData}>
          <Text>12312331321</Text>
        </ItemAvatar>
      </List>
    );
  }
}
