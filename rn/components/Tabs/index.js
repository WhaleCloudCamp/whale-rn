import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import TabItem from './tabItem';
import Themes from '../../themes';

export default class TabBar extends React.Component {
  static propTypes = {
    tabsArray: PropTypes.array.isRequired,
    barTintColor: PropTypes.string,
    tintColor: PropTypes.string,
    unselectedTintColor: PropTypes.string,
    onChangeTab: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
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
      tabsArray,
      barTintColor = Themes.fill_base,
      tintColor = '#108ee9',
      unselectedTintColor = '#888888',
    } = this.props;

    const style = { backgroundColor: barTintColor };

    const renderTabItems = () =>
      tabsArray.map((item, index) => {
        const { title } = item;
        return (
          <TabItem
            key={`r-${index}`}
            title={title}
            selected={this.state.selectedTab === index}
            onPress={() => this.onChangeTab(index)}
            tintColor={tintColor}
            unselectedTintColor={unselectedTintColor}
          />
        );
      });

    return <View style={[styles.tabs, style]}>{renderTabItems()}</View>;
  }
}

const styles = StyleSheet.create({
  tabs: {
    height: Themes.tabs_height,
    flexDirection: 'row',
  },
});
