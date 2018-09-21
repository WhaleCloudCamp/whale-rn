import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class TabItem extends React.Component {
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
    const { title, selected, onPress } = this.props;

    return (
      <TouchableOpacity style={styles.itemBox} onPress={onPress}>
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
        <View
          style={[
            styles.line,
            {
              backgroundColor: selected ? this.state.tintColor : '#ffffff',
            },
          ]}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemBox: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    marginTop: 11,
    fontSize: 14,
    textAlign: 'center',
  },
  line: {
    marginTop: 15,
    height: 2,
  },
});
