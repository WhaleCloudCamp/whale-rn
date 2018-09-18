import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import Theme from "../../themes";

export default class FooterButtons extends Component {
  constructor(props) {
    super(props);
    this.defaultBtns = [{ text: "确定", onPress: () => console.log("确定") }];
  }

  render() {
    const { actions = this.defaultBtns } = this.props;
    const footerButtons = actions.map((btn, i) => (
      <TouchableHighlight underlayColor="#ddd" onPress={btn.onPress}>
        <View
          style={actions.length === 2 ? styles.buttonWrapH : styles.buttonWrapV}
        >
          <Text
            style={{
              textAlign: "center",
              color: Theme.color_link,
              fontSize: Theme.modal_button_font_size,
              backgroundColor: "transparent",
              paddingHorizontal: 15
            }}
          >
            {btn.text || `按钮${i}`}
          </Text>
        </View>
      </TouchableHighlight>
    ));

    return (
      <View style={actions.length === 2 && styles.buttonGroupH}>
        {footerButtons}
      </View>
    );
  }
}
let styles = StyleSheet.create({
  buttonGroupH: {
    flexGrow: 1,
    flexDirection: "row"
  },
  buttonGroupV: {
    flexGrow: 1,
    flexDirection: "column"
  },
  buttonWrapH: {
    height: Theme.modal_button_height,
    flexGrow: 1,
    justifyContent: "center",
    borderColor: Theme.border_color_base,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    paddingVertical: 11,
    width: 270 / 2
  },
  buttonWrapV: {
    flexGrow: 1,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: Theme.border_color_base,
    paddingVertical: 11
  }
});
