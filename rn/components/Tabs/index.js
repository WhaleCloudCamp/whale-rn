import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import TabItem from './tabItem';
import Themes from '../../themes';

export default class TabBar extends React.Component {
  static propTypes = {
    barTintColor: PropTypes.string,
    tintColor: PropTypes.string,
    unselectedTintColor: PropTypes.string,
    onChangeTab: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
    };
  }

  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
    this.props.onChangeTab && this.props.onChangeTab(this.state.selectedTab);
  }

  render() {
    const {
      barTintColor = Themes.fill_base,
      tintColor = '#108ee9',
      unselectedTintColor = '#888888',
    } = this.props;

    const style = { backgroundColor: barTintColor };

    return (
      <View style={[styles.tabs, style]}>
        <TabItem
          title="选项"
          selected={this.state.selectedTab === 1}
          onPress={() => this.onChangeTab(1)}
          tintColor={tintColor}
          unselectedTintColor={unselectedTintColor}
        />
        <TabItem
          title="选项"
          selected={this.state.selectedTab === 2}
          onPress={() => this.onChangeTab(2)}
          tintColor={tintColor}
          unselectedTintColor={unselectedTintColor}
        />
        <TabItem
          title="选项"
          selected={this.state.selectedTab === 3}
          onPress={() => this.onChangeTab(3)}
          tintColor={tintColor}
          unselectedTintColor={unselectedTintColor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabs: {
    height: Themes.tabs_height,
    flexDirection: 'row',
  },
});
