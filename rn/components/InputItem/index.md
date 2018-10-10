# InputItem 文本输入
用于输入文本，可自定义校验规则。

## 属性

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| style | 样式 | ViewPropTypes.style | - |
| label | 左侧标签 | string or node | - |
| labelStyle | 左侧标签样式 | TextStyle | - |
| clear | 是否显示 clear 按钮 | bool | true |
| validate | 包含校验规则和回调对象 | `{rules: [{pattern:string, message: string} or (text)=>{error: bool, message: string}], callback: (error: bool, message: string)=>{}}}` | - |
| inputStyle | 输入框样式 | TextInputStyle | - |
| extraText | 右侧标签 | string | - |
| extraTextStyle | 右侧标签样式 | TextStyle | - |
| extraImage | 右侧图标 | Image.source | - |
| extraImageStyle | 右侧图标样式 | ImageStyle | - |
| onExtraClick | 右侧点击回调 | func | - |

> `InputItem` 还支持所有 `TextInput` 的 [`props`](https://facebook.github.io/react-native/docs/textinput.html#props)

## usage

```js
import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import InputItem from '..';
import ActionSheet from '../../ActionSheet';

const phonePattern = '^1\\d{10}$';
const moneyPattern = '^\\d+(.\\d{1,2})?$';

export default class InputItemDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordVisible: true,
      certificateType: '身份证',
    };
  }

  chooseCertificate = () => {
    const options = ['身份证', '驾驶证', '护照'];
    const onSelect = index => {
      this.setState({
        certificateType: options[index],
      });
    };
    ActionSheet.showActionSheet({
      options,
      onOptionSelected: onSelect,
    });
  };

  render() {
    const labelStyle = {
      width: 7 * 14 * 1.05, // 7个字符，fontSize=14，
    };
    return (
      <View style={{ flex: 1, paddingTop: 20, backgroundColor: 'white' }}>
        <ScrollView style={{ flex: 1 }}>
          <InputItem
            style={{ marginLeft: 15 }}
            label="手机号"
            labelStyle={labelStyle}
            keyboardType="phone-pad"
            placeholder="请输入手机号"
            validate={{
              rules: [{ pattern: phonePattern, message: '手机号错误' }],
            }}
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
              rules: [{ pattern: moneyPattern, message: '金额错误' }],
            }}
            extraText="元"
          />
          <InputItem
            style={{ marginLeft: 15 }}
            label={<Text style={[labelStyle]}>密码</Text>}
            labelStyle={labelStyle}
            placeholder="最少6位字符"
            secureTextEntry={this.state.passwordVisible}
            validate={{
              rules: [
                { pattern: '.{6,}', message: '密码少于6位' },
                { pattern: '\\D', message: '密码不能为纯数字' },
              ],
            }}
            extraImage={require('../assets/icon-eye.png')}
            onExtraClick={() =>
              this.setState(preState => ({
                passwordVisible: !preState.passwordVisible,
              }))
            }
          />
          <InputItem
            style={{ marginLeft: 15 }}
            label="证件类型"
            labelStyle={labelStyle}
            editable={false}
            value={this.state.certificateType}
            extraText="请选择"
            extraImage={require('../assets/icon-arrow-right.png')}
            onExtraClick={this.chooseCertificate}
          />
          <InputItem
            style={{ marginLeft: 15 }}
            labelStyle={labelStyle}
            placeholder="没有标签"
          />
        </ScrollView>
      </View>
    );
  }
}

```