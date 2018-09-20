import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ModalBasics, ModalView } from '../../index';
import { Toast } from '../index';

export default class ToastExample extends Component {
  showModal(check) {
      if (check === 1) {// short消失时间为2000ms，long为3500ms
        Toast.makeToast(true, 'short', 'warn', '警告');
      } else if (check === 2) {// 自定义消失时间
        Toast.makeToast(true, 5000, 'warn', '警告');
      } else if (check === 3) {// 不设置消失时间，主动调用close方法消失
        Toast.makeToast(true, 'none', 'warn', '警告');
        setTimeout(() => Toast.close(), 1000);
      } else if (check === 4) {// 不设置图片只显示文字
        Toast.makeToast(true, 'long', 'none', '警告警告警告警告警告警告警告警告警告警告');
      } else if (check === 5) {
        Toast.makeToast(true);
      }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() =>
            this.showModal(1)
          }
          style={{ margin: 10 }}
        >
          <Text>使用预设消失时间</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.showModal(2)
          }
          style={{ margin: 10 }}
        >
          <Text>使用自定义消失时间5s</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.showModal(3)
          }
          style={{ margin: 10 }}
        >
          <Text>使用主动消失</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.showModal(4)
          }
          style={{ margin: 10 }}
        >
          <Text>只显示文字</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.showModal(5)
          }
          style={{ margin: 10 }}
        >
          <Text>不传参数使用默认</Text>
        </TouchableOpacity>
      </View>
    );
  }
}