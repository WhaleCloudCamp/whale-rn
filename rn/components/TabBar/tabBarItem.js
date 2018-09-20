import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class TabBarItem extends React.Component {
  static defaultProps = {
    onPress() {},
  };

  constructor(props) {
    super(props);
    //此处设主题tabBar颜色
    this.state = {
      tintColor: '#108ee9',
      unselectedTintColor: '#888888',
    };
  }

  render() {
    const { title, selected, icon, selectedIcon, onPress, badge } = this.props;

    const badgeDom = badge ? (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{badge}</Text>
      </View>
    ) : null;

    const source = (selected && selectedIcon) || icon || null;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.itemBox]}>
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
                color: selected
                  ? this.state.tintColor
                  : this.state.unselectedTintColor,
              },
            ]}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemBox: {
    flex: 1,
    height: 49,
    padding: 6,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  barIcon: {
    width: 22,
    height: 22,
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
    color: 'white',
    fontSize: 10,
  },
  title: {
    marginTop: 5,
    fontSize: 10,
    color: '#666666',
  },
});
