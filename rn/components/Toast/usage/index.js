import React, { Component } from 'react';
import { Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Toast } from '..';

export default class ToastExample extends Component {
  showModal(check, side) {
    if (check === 1) {
      Toast.toastText('short', '这是一个纯文本Toast', side);
    } else if (check === 2) {
      Toast.toastSucess('long');
    } else if (check === 3) {
      Toast.toastSucess('short');
    } else if (check === 4) {
      Toast.toastSucess(5000);
    } else if (check === 5) {
      Toast.toastSucess('none');
      setTimeout(() => Toast.close(), 5000);
    } else if (check === 6) {
      Toast.toastFail('short');
    } else if (check === 7) {
      Toast.toastWarn('short');
    } else if (check === 8) {
      Toast.toastWarn('short', '一个警告');
    } else if (check === 9) {
      Toast.toastText('short', '太长怎么办太长怎么办太长怎么办太长怎么办', side);
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Text style={{ margin: 10, fontSize: 19 }}>纯文本</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.showModal(1, 'top')}
        >
          <Text style={{ fontSize: 19 }}>顶部Toast</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.showModal(1)}
        >
          <Text style={{ fontSize: 19 }}>中间Toast</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.showModal(1, 'bottom')}
        >
          <Text style={{ fontSize: 19 }}>底部Toast</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.showModal(9, 'center')}
        >
          <Text style={{ fontSize: 19 }}>长文本</Text>
        </TouchableOpacity>

        <Text style={{ margin: 10, fontSize: 19 }}>成功提示</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.showModal(2)}
        >
          <Text style={{ fontSize: 19 }}>默认时间long</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.showModal(3)}
        >
          <Text style={{ fontSize: 19 }}>默认时间short</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.showModal(4)}
        >
          <Text style={{ fontSize: 19 }}>自定义时间5秒</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.showModal(5)}
        >
          <Text style={{ fontSize: 19 }}>不定义时间</Text>
        </TouchableOpacity>

        <Text style={{ margin: 10, fontSize: 19 }}>失败提示</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.showModal(6)}
        >
          <Text style={{ fontSize: 19 }}>失败提示</Text>
        </TouchableOpacity>
        
        <Text style={{ margin: 10, fontSize: 19 }}>警告提示</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.showModal(7)}
        >
          <Text style={{ fontSize: 19 }}>警告提示</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.showModal(8)}
        >
          <Text style={{ fontSize: 19 }}>警告自定义文字提示</Text>
        </TouchableOpacity>
      </ScrollView>
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
