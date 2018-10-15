import React, { Component } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Page from '../../Page';
import Item from '../../Item';
import ItemAvatar from '../../ItemAvatar';
import ItemDivider from '../../ItemDivider';
import ItemCustom from '../../ItemCustom';
import List from '../index';
import Radio from '../../Radio';
import Switch from '../../Switch';

export default class ListExample extends Component {
  render() {
    // const data = {
    //   disabled: true,
    //   leftIcon: require('../../../icons/TabBar_Friend_sel.png'),
    //   title:
    //     '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
    //   note: '点我无效',
    //   details: '详情详情',
    // };
    const data = {
      onClick: e => alert('点击双行列表'),
      title: '双行列表',
      details: '双行列表',
    };
    const data1 = {
      onClick: e => alert('点击双行列表'),
      leftIcon: require('../../../icons/TabBar_Friend_sel.png'),
      title: '双行列表',
      details: '双行列表',
      note: '详情详情',
    };

    const data5 = {
      onClick: e => alert('点击'),
      leftIcon: 'empty',
      title: '标题',
    };
    const data3 = {
      onClick: e => alert('点击多项选择'),
      onLeftClick: e => {
        console.warn(e);
      },
      ischeck: false,
      leftIcon: 'checkbox',
      title: '多项选择',
      rightIcon: 'empty',
    };
    const data4 = {
      onClick: e => alert('点击删除'),
      onLeftClick: () => {
        console.warn('删除');
      },
      leftIcon: 'delete',
      title: '标题文字',
      rightIcon: 'empty',
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
          <List>
            <ItemDivider title="单行列表" />
            <Item {...data1}>
              <Radio isChecked onChange={ischeck => {}} />
            </Item>
            <Item {...data1}>
              <Switch
                checkStatu
                onCheckChangeListener={isCheck => {
                  if (isCheck) {
                    console.warn('选中');
                  } else {
                    console.warn('未选中');
                  }
                }}
              />
            </Item>
            <Item {...data1} />
            <ItemDivider title="说明内容" />
            <Item {...data1} />
            <Item {...data1} />

            <ItemDivider title="单项选择" />
            <ItemCustom {...data5}>
              <Radio isChecked onChange={ischeck => {}} />
            </ItemCustom>
            <ItemCustom {...data5}>
              <Radio isChecked onChange={ischeck => {}} />
            </ItemCustom>

            <ItemDivider title="多项选择" />

            <ItemCustom {...data3} />
            <ItemCustom {...data3} />

            <ItemDivider title="删除" />

            <ItemCustom {...data4} />
            <ItemCustom {...data4} />

            <ItemDivider title="双行列表" />
            <Item {...data} />
            <Item {...data1} />
          </List>
        </ScrollView>
      </Page>
    );
  }
}
