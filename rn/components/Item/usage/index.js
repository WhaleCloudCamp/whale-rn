import React, { Component } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Item from '../index';
import List from '../../List';

export default class ItemExample extends Component {
  render() {
    const data = {
      onPress: e => console.warn(e),
      leftIcon: require('../../../icons/create.png'),
      leftIconStyle: { width: 55, height: 55 },
      title: '标题标题标题标题标题标题标题标题标题标题',
      note: '说明说明说明说明说明说明说明说明说明',
      details:
        '详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊',
    };
    const checkData = {
      onPress: e => console.warn(e),
      leftIcon: require('../../../icons/create.png'),
      rightIcon: 'check',
      title: '标题标题标题标题标题标题标题标题标题标题',
      note: '说明说明说明说明说明说明说明说明说明',
      details:
        '详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊',
    };
    return (
      <List header="123">
        <Item {...data} />
        <Item {...data} />
        <Item {...data} />
        <Item {...checkData} />
        <Item {...checkData}>
          <Text>12312331321</Text>
        </Item>
      </List>
    );
  }
}
