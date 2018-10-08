import React, { Component } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import ItemDivider from '../index';
import Item from '../../Item';
import List from '../../List';

export default class ItemExample extends Component {
  render() {
    const data = {
      onPress: e => console.warn(e),
      title: '标题标题标题标题标题标题标题标题标题标题',
      note: '说明说明说明说明说明说明说明说明说明',
      details:
        '详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊',
    };
    const checkData = {
      onPress: e => console.warn(e),
      rightIcon: 'check',
      title: '标题标题标题标题标题标题标题标题标题标题',
      note: '说明说明说明说明说明说明说明说明说明',
      details:
        '详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊',
    };
    return (
      <List header="123">
        <ItemDivider title="默认右侧按钮" />
        <Item {...data} />
        <Item {...data} />
        <Item {...data} />
        <ItemDivider title="自定义" />

        <Item {...checkData} />
        <Item {...checkData}>
          <Text>12312331321</Text>
        </Item>
      </List>
    );
  }
}
