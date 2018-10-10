import React from 'react';
import { View } from 'react-native';
import NoticeBar from '../index';

export default class NoticeBarDemo extends React.Component {
  render() {
    return (
      <View>
        <NoticeBar
          title="这条通告栏不带关闭按钮这条通告栏不带关闭按钮这条通告栏不带关闭按钮"
          showClose={false}
        />
        <NoticeBar
          style={{marginTop:10}}
          title="这条通告栏带关闭按钮这条通告栏带关闭按钮这条通告栏带关闭按钮"
          showClose
        />
      </View>
    );
  }
}

