import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import Theme from '../../themes';
import AlertContent from '../Alert/AlertContent';

export default class PromptContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.defaultValue,
    };
  }

  onChangeText(type, value) {
    this.setState({
      [type]: value,
    });
  }

  render() {
    let { title, content, actions, placeholders, onCloseRequire } = this.props;
    const { text } = this.state;
    if (!actions) {
      actions = [{ text: '确定', onPress: () => {} }];
    }
    const alertCon = { title, content, actions };
    return (
      <AlertContent
        {...alertCon}
        onCallback={func => {
          onCloseRequire && onCloseRequire();
          func && func(text);
        }}
      >
        <KeyboardAvoidingView behavior="padding">
          <View
            style={{
              marginTop: Theme.v_spacing_md,
              marginBottom: Theme.v_spacing_md,
              width: 240,
            }}
          >
            <View
              style={{
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: Theme.border_color_base,
                borderTopWidth: StyleSheet.hairlineWidth,
                borderTopLeftRadius: Theme.radius_sm,
                borderTopRightRadius: Theme.radius_sm,
                borderBottomLeftRadius: Theme.radius_sm,
                borderBottomRightRadius: Theme.radius_sm,
              }}
            >
              <TextInput
                autoFocus
                onChangeText={value => {
                  this.onChangeText('text', value);
                }}
                value={this.state.text}
                style={{
                  height: 36,
                  fontSize: Theme.font_size_base,
                  paddingHorizontal: Theme.h_spacing_sm,
                  paddingVertical: 0,
                }}
                underlineColorAndroid="transparent"
                placeholder={placeholders}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </AlertContent>
    );
  }
}
