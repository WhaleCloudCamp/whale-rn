import React, { Component } from "react";
import {
  StyleSheet,
  DeviceEventEmitter,
  View
} from "react-native";
import Theme from "../../themes";

let keyValue = 0;

export default class ModalTarget extends Component {
  static add(modal) {
    let key = ++keyValue;
    DeviceEventEmitter.emit("addModals", { key, modal });
    return key;
  }
  static remove(modalKey) {
    DeviceEventEmitter.emit("removeModals", { modalKey });
  }
  static removeAll() {
    DeviceEventEmitter.emit("removeAllModals", {});
  }
  constructor(props) {
    super(props);
    this.state = {
      modals: []
    };
  }

  componentWillMount() {
    DeviceEventEmitter.addListener("addModals", event => this.add(event));
    DeviceEventEmitter.addListener("removeModals", event => this.remove(event));
    DeviceEventEmitter.addListener("removeAllModals", event => this.removeAll(event));
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners("addModals");
    DeviceEventEmitter.removeAllListeners("removeModals");
    DeviceEventEmitter.removeAllListeners("removeAllModals");
  }

  add(event) {
    let { modals } = this.state;
    modals.push(event);
    this.setState({ modals });
  }

  remove(event) {
    let { modals } = this.state;
    for (const i = modals.length - 1; i >= 0; --i) {
      if (modals[i].modalKey === event.modalKey) {
        modals.splice(i, 1);
        break;
      }
    }
    this.setState({ modals });
  }

  removeAll(event) {
    this.setState({ modals: [] });
  }

  render() {
    let { modals } = this.state;
    return (
      <View style={{ backgroundColor: Theme.fill_grey, flex: 1 }}>
        {modals.map((item, index) => {
          return (
            <View key={"modals" + item.key} style={styles.globalmodal}>
              {item.element}
            </View>
          );
        })}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  globalmodal: {
    backgroundColor: "#000",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
