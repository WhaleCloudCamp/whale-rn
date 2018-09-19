import React, { Component } from 'react';
import { View, Dimensions, Animated } from 'react-native';

function screenHeight() {
  return Dimensions.get('window').height;
}

export default class PopupView extends Component {
  constructor(props) {
    super(props);
    this.bottom = new Animated.Value(-screenHeight());
  }

  componentDidMount() {
    Animated.timing(this.bottom, {
      toValue: 0,
      duration: 300,
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={{ position: 'absolute', left: 0, bottom: this.bottom, right: 0 }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
