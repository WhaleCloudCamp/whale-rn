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
    ModalBasics.show(modalView);
  }

  render() {
    return (
      <View>
        <Button onPress={() => this.showModal()}>show modal!</Button>
      </View>
    );
  }
}
