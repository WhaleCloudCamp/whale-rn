import React from 'react';
import { View } from 'react-native';
import SearchBar from '../index';
import Page from '../../Page';

export default () => (
  <Page style={{ backgroundColor: '#eee' }}>
    <View style={{ marginTop: 20 }}>
      <SearchBar showChoose showCancel />
    </View>
    <View style={{ marginTop: 20 }}>
      <SearchBar showChoose={false} showCancel value="我是输入内容" />
    </View>
    <View style={{ marginTop: 20 }}>
      <SearchBar showChoose showCancel={false} />
    </View>
    <View style={{ marginTop: 20 }}>
      <SearchBar showChoose={false} showCancel={false} />
    </View>
  </Page>
);
