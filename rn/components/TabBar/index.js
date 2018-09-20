import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabBarItem from './tabBarItem';

export default class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '1',
    };
  }

  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }

  render() {
    return (
      <View style={styles.tabBar}>
        <TabBarItem
          title="首页"
          badge={0}
          icon={require('./usage/assets/friend.png')}
          selectedIcon={require('./usage/assets/friend_sel.png')}
          selected={this.state.selectedTab === '1'}
          onPress={() => this.onChangeTab('1')}
        />
        <TabBarItem
          title="首页"
          badge={0}
          icon={require('./usage/assets/friend.png')}
          selectedIcon={require('./usage/assets/friend_sel.png')}
          selected={this.state.selectedTab === '2'}
          onPress={() => this.onChangeTab('2')}
        />
        <TabBarItem
          title="首页"
          badge={0}
          icon={require('./usage/assets/friend.png')}
          selectedIcon={require('./usage/assets/friend_sel.png')}
          selected={this.state.selectedTab === '3'}
          onPress={() => this.onChangeTab('3')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    height: 49,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
});
