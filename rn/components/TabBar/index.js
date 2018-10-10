import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import TabBarItem from './tabBarItem';
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
        const { title, badge, icon, selectedIcon } = item;
        return (
          <TabBarItem
            key={`r-${index}`}
            title={title}
            badge={badge}
            icon={icon}
            selectedIcon={selectedIcon}
            selected={this.state.selectedTab === index}
            onPress={() => this.onChangeTab(index)}
            tintColor={tintColor}
            unselectedTintColor={unselectedTintColor}
          />
        );
      });

    return (
      <View
        style={[
          styles.tabBar,
          { position: 'absolute', left: 0, right: 0, bottom: 0 },
          style,
        ]}
      >
        {renderTabItems()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    height: Themes.tab_bar_height,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: Themes.fill_base,
  },
});
