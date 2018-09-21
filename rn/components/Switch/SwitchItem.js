import React from 'react';
import { View } from 'react-native';

export default class SwitchItem extends React.Component {
  render() {
    return (
      <View style={this.props.style}>
        <View
          style={[
            {
              borderRadius: 14,
              borderColor: '#cccccc',
              borderWidth: 1,
            },
          ]}
        />
      </View>
    );
  }
}
