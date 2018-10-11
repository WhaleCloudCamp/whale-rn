import React, { Component } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Item from '../index';
import List from '../../List';

export default class ItemExample extends Component {
  render() {
    const data = {
      onPress: e => console.warn(e),
      leftIcon: require('../../../icons/TabBar_Friend_sel.png'),
      // leftIconStyle: { width: 55, height: 55 },
      title: '标题',
      note: '说明',
      details:
        '详情',
    };
    const checkData = {
      onPress: e => console.warn(e),
      leftIcon: require('../../../icons/TabBar_Friend_sel.png'),
      rightIcon: 'check',
      title: '标题',
      note: '说明',
      details:
        '详情嗷啊嗷嗷啊详情嗷嗷啊嗷嗷啊详情嗷啊嗷嗷啊',
    };
    return (
      <List header="Item">
        <Item {...data} />
        <Item {...data} />
        <Item {...data} />
        <Item {...checkData} />
        <Item {...checkData}>
          <Text>说明</Text>
        </Item>
      </List>
    );
  }
}
