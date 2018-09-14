import React, { Component } from "react";
import { View, Text } from "react-native";

import { Button, ModalBasics } from "../../index";
export default class ModalBasicsExample extends Component {
  showModal() {
    let modalView = (
      <View>
        <Text style={{ color: "#FFF", fontSize: 50 }}>modal work!</Text>
      </View>
    );
    let modalView2 = (
      <View>
        <Text style={{ color: "#FFF", fontSize: 70 }}>modal work222222!</Text>
      </View>
    );
    let modalKey = ModalBasics.show(modalView);
    let modalKey2 =ModalBasics.show(modalView2);
    setTimeout(()=>{
      console.log('remove');
      console.log(modalKey);
      ModalBasics.remove(modalKey);
    },1000)
    setTimeout(()=>{
      console.log('remove');
      console.log(modalKey2);
      ModalBasics.remove(modalKey2);
    },3000)
  }

  render() {
    return (
      <View>
        <Button onPress={() => this.showModal()}>show modal!</Button>
      </View>
    );
  }
}
