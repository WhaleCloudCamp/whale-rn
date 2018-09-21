import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabItem from './tabItem';

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
        <TabItem
          title="首页"
          selected={this.state.selectedTab === '1'}
          onPress={() => this.onChangeTab('1')}
        />
        <TabItem
          title="首页"
          selected={this.state.selectedTab === '2'}
          onPress={() => this.onChangeTab('2')}
        />
        <TabItem
          title="首页"
          selected={this.state.selectedTab === '3'}
          onPress={() => this.onChangeTab('3')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    height: 42,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
});
