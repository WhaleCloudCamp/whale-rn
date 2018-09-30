import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Themes from '../../themes';

export default class TabBarItem extends React.Component {
  static propTypes = {
    badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onPress: PropTypes.func,
    selected: PropTypes.bool,
    icon: Image.propTypes.source.isRequired,
    selectedIcon: Image.propTypes.source.isRequired,
    tintColor: PropTypes.string,
    unselectedTintColor: PropTypes.string,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    // onPress() {},
  };

  constructor(props) {
    super(props);
    const { badge } = props;
    this.state = {
      badgeNum: badge,
    };
  }

  itemClick = () => {
    this.setState({
      badgeNum: 0,
    });
    this.props.onPress && this.props.onPress();
  };

  render() {
    const {
      selected,
      icon,
      selectedIcon,
      tintColor = '#108ee9',
      unselectedTintColor = '#888888',
      title,
    } = this.props;

    const { badgeNum } = this.state;

    const badgeDom = badgeNum ? (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{badgeNum > 99 ? 99 : badgeNum}</Text>
      </View>
    ) : null;

    const source = selected ? selectedIcon : icon;

    return (
      <TouchableOpacity style={[styles.itemBox]} onPress={this.itemClick}>
        <View>
          {source == null ? null : (
            <Image source={source} style={styles.barIcon} />
          )}
          {badgeDom}
        </View>
        <Text
          style={[
            styles.title,
            {
              color: selected ? tintColor : unselectedTintColor,
            },
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemBox: {
    flex: 1,
    height: Themes.tab_bar_height,
    padding: 6,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Themes.fill_base,
  },
  barIcon: {
    width: Themes.icon_size_md,
    height: Themes.icon_size_md,
  },
  badge: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#FF3B30',
    position: 'absolute',
    top: -4,
    left: 16,
  },
  badgeText: {
    textAlign: 'center',
    color: Themes.color_text_base_inverse,
    fontSize: 10,
  },
  title: {
    marginTop: 5,
    fontSize: Themes.font_size_icontext,
  },
});
