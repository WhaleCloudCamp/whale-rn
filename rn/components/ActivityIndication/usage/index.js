import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { ActivityIndication } from '../index';

export default class ActiveDemo extends React.Component {
  showModal() {
    // const modeView = (
    //     <ActivityIndication />
    // );

    // return ModalBasics.show(modeView);
    ActivityIndication.showLoading(true);

    setTimeout(() => ActivityIndication.close(), 5000);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => this.showModal()}>
          <Text>出现</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
