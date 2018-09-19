import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ModalBasics } from '../../index';

export default class ModalBasicsExample extends Component {
  showModal() {
    const modalView = (
      <View>
        <Text style={{ color: '#FFF', fontSize: 50 }}>modal work!</Text>
      </View>
    );
    const modalView2 = (
      <View>
        <Text style={{ color: '#FFF', fontSize: 70 }}>modal work222222!</Text>
      </View>
    );
    const modalKey = ModalBasics.show(modalView);
    const modalKey2 = ModalBasics.show(modalView2);
    setTimeout(() => {
      console.log('remove');
      console.log(modalKey);
      ModalBasics.remove(modalKey);
    }, 1000);
    setTimeout(() => {
      console.log('remove');
      console.log(modalKey2);
      ModalBasics.remove(modalKey2);
    }, 3000);
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.showModal()}>
          show modal!
        </TouchableOpacity>
      </View>
    );
  }
}
