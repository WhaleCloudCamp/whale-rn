import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ActivityIndication from '..';
import { ModalBasics } from '../../index';

export default class ActiveDemo extends React.Component {
  showModal(check) {
    let modalKey;
    switch (check) {
      case 1:
        modalKey = ModalBasics.show(<ActivityIndication color="white" />);
        break;
      case 2:
        modalKey = ModalBasics.show(<ActivityIndication size="large" />);
        break;
      case 3:
        modalKey = ModalBasics.show(<ActivityIndication text="正在加载" />);
        break;
      case 4:
        modalKey = ModalBasics.show(<ActivityIndication toast />);
        break;
      case 5:
        modalKey = ModalBasics.show(
          <ActivityIndication toast text="正在加载" />
        );
        break;
      default:
        break;
    }
    // 持有modalKay变量可手动决定何时消失
    setTimeout(() => ModalBasics.remove(modalKey), 5000);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => this.showModal(1)}
          style={styles.button}
        >
          <Text>color white</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.showModal(2)}
          style={styles.button}
        >
          <Text>size large</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.showModal(3)}
          style={styles.button}
        >
          <Text>text 正在加载</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.showModal(4)}
          style={styles.button}
        >
          <Text>toast true</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.showModal(5)}
          style={styles.button}
        >
          <Text>toast true,text 正在加载</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    height: 42,
    width: 260,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 3,
    margin: 5,
  },
});
