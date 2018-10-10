import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Input from '..';
import themes from '../../../themes';
import Page from '../../Page';

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
      <Page>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingTop: 20, paddingHorizontal: 10 }}
          keyboardDismissMode="interactive"
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: themes.border_color_base,
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
            <Text style={{ color: 'red' }}>{this.state.phoneTip}</Text>
          </View>
          <View style={{ height: 10 }} />
          <View
            style={{
              borderWidth: 1,
              borderColor: themes.border_color_base,
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
            <Text style={{ color: 'red' }}>{this.state.emailTip}</Text>
          </View>
        </ScrollView>
      </Page>
    );
  }
}
