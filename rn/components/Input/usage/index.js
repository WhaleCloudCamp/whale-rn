import React, { Component } from 'react';
import { View, ScrollView, Text, Stysheet } from 'react-native';
import Input from '..';

const photoPattern = '^1\\d{10}$';
const emailPattern = '@';

export default class InputDemo extends Component {
  state = {};

  phoneValidateCb = (error, message) => {
    message = error ? message : 'pass';
    this.setState({
      phoneTip: message,
    });
  };

  emailValidateCb = (error, message) => {
    message = error ? message : 'pass';
    this.setState({
      emailTip: message,
    });
  };

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 20, paddingHorizontal: 10 }}
        keyboardDismissMode="interactive"
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: 'blue',
            paddingVertical: 8,
            paddingHorizontal: 6,
            flexDirection: 'row',
          }}
        >
          <Input
            style={{ flex: 1 }}
            placeholder="请输入手机号"
            validate={[{ pattern: photoPattern, message: '手机号错误' }]}
            validateCallBack={this.phoneValidateCb}
          />
          <Text>{this.state.phoneTip}</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'blue',
            paddingVertical: 8,
            paddingHorizontal: 6,
            flexDirection: 'row',
          }}
        >
          <Input
            style={{ flex: 1 }}
            placeholder="请输入邮箱"
            validate={[{ pattern: emailPattern, message: '邮箱错误' }]}
            validateCallBack={this.emailValidateCb}
          />
          <Text>{this.state.emailTip}</Text>
        </View>
      </ScrollView>
    );
  }
}
