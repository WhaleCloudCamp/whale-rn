import React from 'react';
import { View } from 'react-native';
import TabBar from '../index';
import Page from '../../Page';

const images = {
  icon: require('../../../icons/TabBar_Friend.png'),
  selectedIcon: require('../../../icons/TabBar_Friend_sel.png'),
};

export default class TabBarDemo extends React.Component {
  render() {
    return (
      <Page style={{ backgroundColor: '#eee' }}>
        <View style={{ height: 49, marginTop: 20 }}>
          <TabBar
            tabsArray={[
              {
                title: '首页',
                badge: 0,
                icon: images.icon,
                selectedIcon: images.selectedIcon,
              },
              {
                title: '我的',
                badge: 0,
                icon: images.icon,
                selectedIcon: images.selectedIcon,
              },
            ]}
          />
        </View>
        <View style={{ height: 49, marginTop: 20 }}>
          <TabBar
            tabsArray={[
              {
                title: '首页',
                badge: 0,
                icon: images.icon,
                selectedIcon: images.selectedIcon,
              },
              {
                title: '新闻',
                badge: 1000,
                icon: images.icon,
                selectedIcon: images.selectedIcon,
              },
              {
                title: '我的',
                badge: 0,
                icon: images.icon,
                selectedIcon: images.selectedIcon,
              },
            ]}
          />
        </View>
        <View style={{ height: 49, marginTop: 20 }}>
          <TabBar
            tabsArray={[
              {
                title: '首页',
                badge: 0,
                icon: images.icon,
                selectedIcon: images.selectedIcon,
              },
              {
                title: '通讯录',
                badge: 0,
                icon: images.icon,
                selectedIcon: images.selectedIcon,
              },
              {
                title: '社交圈',
                badge: 99,
                icon: images.icon,
                selectedIcon: images.selectedIcon,
              },
              {
                title: '我的',
                badge: 0,
                icon: images.icon,
                selectedIcon: images.selectedIcon,
              },
            ]}
          />
        </View>
        <View style={{ height: 49, marginTop: 20 }}>
          <TabBar
            tabsArray={[
              {
                title: '首页',
                badge: 0,
                icon: images.icon,
                selectedIcon: images.selectedIcon,
              },
              {
                title: '视频',
                badge: 1,
                icon: images.icon,
                selectedIcon: images.selectedIcon,
              },
              {
                title: '新闻',
                badge: 0,
                icon: images.icon,
                selectedIcon: images.selectedIcon,
              },
              {
                title: '发现',
                badge: 0,
                icon: images.icon,
                selectedIcon: images.selectedIcon,
              },
              {
                title: '我的',
                badge: 0,
                icon: images.icon,
                selectedIcon: images.selectedIcon,
              },
            ]}
          />
        </View>
      </Page>
    );
  }
}
