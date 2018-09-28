import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Themes from '../../themes';

export default class TabBarItem extends React.Component {
  static propTypes = {
    badge: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
    icon: Image.propTypes.source.isRequired,
    selectedIcon: Image.propTypes.source.isRequired,
    tintColor: PropTypes.string,
    unselectedTintColor: PropTypes.string,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    onPress() {},
  };

  render() {
    const {
      badge,
      onPress,
      selected,
      icon,
      selectedIcon,
      tintColor = '#108ee9',
      unselectedTintColor = '#888888',
      title,
      key,
    } = this.props;

    const badgeDom = badge ? (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{badge}</Text>
      </View>
    ) : null;

    const source = selected ? selectedIcon : icon;

    return (
      <TouchableOpacity style={[styles.itemBox]} onPress={onPress}>
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
    fontSize: Themes.font_size_icontext,
  },
  title: {
    marginTop: 5,
    fontSize: Themes.font_size_icontext,
  },
});
