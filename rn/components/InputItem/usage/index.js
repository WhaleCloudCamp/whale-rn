import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputItem from '..';

export default class InputItemDemo extends Component {
  render() {
    const labelStyle = {
      width: 4 * 14 * 1.05, // 4个字符，fontSize=14，
    };
    return (
      <View style={{ flex: 1, paddingTop: 20, backgroundColor: 'white' }}>
        <InputItem
          style={{ marginLeft: 15 }}
          label="手机号"
          labelStyle={labelStyle}
          keyboardType="phone-pad"
          placeholder="请输入手机号"
          validate={{
            rules: [{ pattern: '^1\\d{10}$', message: '手机号错误' }],
          }}
        />
        <InputItem
          style={{ marginLeft: 15 }}
          labelStyle={labelStyle}
          placeholder="没有标签"
        />
        <InputItem
          style={{ marginLeft: 15 }}
          label={<Text style={[labelStyle]}>自定义标签:</Text>}
          labelStyle={labelStyle}
          placeholder="自定义标签"
        />
        <InputItem
          style={{ marginLeft: 15 }}
          label="金额"
          labelStyle={labelStyle}
          keyboardType="numeric"
          placeholder="输入金额"
          validate={{
            rules: [{ pattern: '^\\d+(.\\d{1,2})?$', message: '金额错误' }],
          }}
          extraText="元"
        />
        <InputItem
          style={{ marginLeft: 15 }}
          label={<Text style={[labelStyle]}>密码</Text>}
          labelStyle={labelStyle}
          placeholder="最少6位字符"
          secureTextEntry
          validate={{
            rules: [
              { pattern: '.{6,}', message: '密码少于6位' },
              { pattern: '\\D', message: '密码不能为纯数字' },
            ],
          }}
        />
      </View>
    );
  }
}
