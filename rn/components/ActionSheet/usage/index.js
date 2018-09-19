import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ActionSheet from '..';

export default class ActionSheetDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
  }

  button = (text, onPress) => {
    return (
      <TouchableOpacity
        style={{
          borderColor: 'blue',
          borderWidth: 1,
          padding: 8,
          borderRadius: 8,
        }}
        onPress={onPress}
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  };

  showActionSheet = () => {
    const options = [];
    for (let i = 0; i < 15; i++) {
      options.push('选项' + (i + 1));
    }
    ActionSheet.showActionSheet({
      title: 'title',
      message: 'message',
      options: options,
      onOptionSelected: index => {
        this.setState({ selectedItem: options[index] });
      },
      onCancelPress: () => this.setState({ selectedItem: 'canceled' }),
    });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.button('action sheet', this.showActionSheet)}
        <Text style={{ marginTop: 6 }}>{selectedItem}</Text>
      </View>
    );
  }
}
