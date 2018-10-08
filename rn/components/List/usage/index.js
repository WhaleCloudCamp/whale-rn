import React, { Component } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Page from '../../Page';
import Item from '../../Item';
import ItemAvatar from '../../ItemAvatar';
import ItemDivider from '../../ItemDivider';
import List from '../index';

export default class ListExample extends Component {
  render() {
    const data = {
      disabled: true,
      leftIcon: require('../../../icons/TabBar_Friend_sel.png'),
      title: '标题',
      note: '点我无效',
      details: '详情详情',
    };
    const data1 = {
      onClick: e => alert('点击'),
      leftIcon: require('../../../icons/TabBar_Friend_sel.png'),
      title: '标题',
      note: '说明',
      details: '详情详情',
    };
    const checkData = {
      onClick: e => alert('点击'),
      leftIcon: require('../../../icons/TabBar_Friend_sel.png'),
      rightIcon: 'check',
      title: '标题',
      note: '说明',
      details: '详情详情',
    };
    return (
      <Page>
        <ScrollView>
          <List header="组合用法">
            <ItemDivider title="Item" />
            <Item {...data} />
            <Item {...data1} />
            <Item {...checkData} />
            <ItemDivider title="ItemAvatar" />
            <ItemAvatar {...data} />
            <ItemAvatar {...data1} />
            <ItemAvatar {...checkData} />
            <ItemAvatar {...checkData}>
              <Text>包裹内容，右侧图标和说明无效</Text>
            </ItemAvatar>
          </List>
        </ScrollView>
      </Page>
    );
  }
}
