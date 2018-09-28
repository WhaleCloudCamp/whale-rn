import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Themes from '../../themes';

export default class TabItem extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    selected: PropTypes.bool,
    tintColor: PropTypes.string,
    unselectedTintColor: PropTypes.string,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    onPress() {},
  };

  render() {
    const {
      onPress,
      selected,
      tintColor = '#108ee9',
      unselectedTintColor = '#888888',
      title,
      key,
    } = this.props;

    return (
      <TouchableOpacity style={styles.item} onPress={onPress}>
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
        <View
          style={[
            styles.line,
            {
              backgroundColor: selected ? tintColor : Themes.fill_base,
            },
          ]}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: Themes.fill_base,
  },
  title: {
    marginTop: 11,
    fontSize: Themes.font_size_base,
    textAlign: 'center',
  },
  line: {
    marginTop: 15,
    height: 2,
  },
});
