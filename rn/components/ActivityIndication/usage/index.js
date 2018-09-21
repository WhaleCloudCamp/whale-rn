import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ActivityIndication from '../index';
import { ModalBasics } from '../../index';

export default class ActiveDemo extends React.Component {
  showModal(check) {
    let modalKey;
    switch (check) {
      case 1:
        modalKey = ModalBasics.show(<ActivityIndication box/>);
        break;
      case 2:
        modalKey = ModalBasics.show(<ActivityIndication notext/>);
        break;
      case 3:
        modalKey = ModalBasics.show(<ActivityIndication textside={'right'}/>);
        break;
      case 4:
        modalKey = ModalBasics.show(<ActivityIndication />);
        break;
    }

    setTimeout(() => ModalBasics.remove(modalKey), 5000);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => this.showModal(1)} style={{ margin: 10 }}>
          <Text>出现样式1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showModal(2)} style={{ margin: 10 }}>
          <Text>出现样式2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showModal(3)} style={{ margin: 10 }}>
          <Text>出现样式3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showModal(4)} style={{ margin: 10 }}>
          <Text>出现样式4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
