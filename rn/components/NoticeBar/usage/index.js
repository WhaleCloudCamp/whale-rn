import React from 'react';
import { View } from 'react-native';
import NoticeBar from '../index';
import Page from '../../Page';

export default class NoticeBarDemo extends React.Component {
  render() {
    return (
      <Page style={{ backgroundColor: '#eee' }}>
        <NoticeBar
          title="这条通告栏不带关闭按钮这条通告栏不带关闭按钮这条通告栏不带关闭按钮"
          showClose={false}
          onClick={() => {
            console.warn('点击');
          }}
        />
        <NoticeBar
          style={{ marginTop: 10 }}
          title="通知"
          showClose
          time={1000}
          onClick={() => {
            console.warn('点击');
          }}
        />
        <NoticeBar
          style={{ marginTop: 10 }}
          title="这条通告栏带关闭按钮这条通告栏"
          showClose
          disScrolled={false}
          onClick={() => {
            console.warn('点击');
          }}
        />
      </Page>
    );
  }
}
