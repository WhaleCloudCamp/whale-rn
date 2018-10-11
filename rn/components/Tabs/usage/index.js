import React from 'react';
import { View } from 'react-native';
import Tabs from '../index';
import Page from '../../Page';

export default class TabsDemo extends React.Component {
  render() {
    return (
      <Page style={{ backgroundColor: '#eee' }}>
        <View style={{ height: 42, marginTop: 20 }}>
          <Tabs tabsArray={[{ title: '新闻' }, { title: '资讯' }]} />
        </View>
        <View style={{ height: 42, marginTop: 20 }}>
          <Tabs
            tabsArray={[
              { title: '新闻' },
              { title: '资讯' },
              { title: '财经' },
            ]}
          />
        </View>
        <View style={{ height: 42, marginTop: 20 }}>
          <Tabs
            tabsArray={[
              { title: '新闻' },
              { title: '资讯' },
              { title: '财经' },
              { title: '体育' },
            ]}
          />
        </View>
        <View style={{ height: 42, marginTop: 20 }}>
          <Tabs
            tabsArray={[
              { title: '新闻' },
              { title: '资讯' },
              { title: '财经' },
              { title: '体育' },
              { title: '军事' },
            ]}
          />
        </View>
      </Page>
    );
  }
}
