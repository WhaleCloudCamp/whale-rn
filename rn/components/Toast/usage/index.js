import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ModalBasics, ModalView } from '../../index';
import { Toast } from '../index';

export default class ToastExample extends Component {
  showModal(check) {
      if (check === 1) {// short消失时间为2000ms，long为3500ms
        Toast.alert(true, 'short', 'warn', '警告');
      } else if (check === 2) {// 自定义消失时间
        Toast.alert(true, 5000, 'warn', '警告');
      } else if (check === 3) {// 不设置消失时间，主动调用close方法消失
        Toast.alert(true, 'none', 'warn', '警告');
        setTimeout(() => Toast.close(), 1000);
      } else if (check === 4) {// 不设置图片只显示文字
        Toast.alert(true, 'long', 'none', '警告警告警告警告警告警告警告警告警告警告');
      }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() =>
            this.showModal(1)
          }
        >
          <Text>点击弹窗1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.showModal(2)
          }
        >
          <Text>点击弹窗2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.showModal(3)
          }
        >
          <Text>点击弹窗3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.showModal(4)
          }
        >
          <Text>点击弹窗4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}