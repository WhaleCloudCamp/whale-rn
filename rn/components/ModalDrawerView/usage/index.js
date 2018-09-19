import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ModalBasics from '../../ModalBasics';
import ModalDrawerView from '../index';

export default class ModalDrawerViewExample extends Component {
  showModal(side, modal, modalOpacity = 0.7) {
    const modalView = (
      <ModalDrawerView
        side={side}
        modal={modal}
        modalOpacity={modalOpacity}
        ref={v => (this.modalDrawerView = v)}
      >
        <View
          style={{
            backgroundColor: 'rgba(0,255,0,0.7)',
            minWidth: 300,
            minHeight: 260,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {modal ? (
            <TouchableOpacity
              onPress={() =>
                this.modalDrawerView && this.modalDrawerView.close()
              }
            >
              <Text>点我关闭</Text>
            </TouchableOpacity>
          ) : (
            <View>
              <Text>任意点击关闭</Text>
              <Text>任意点击关闭</Text>
              <Text>任意点击关闭</Text>
              <Text>任意点击关闭</Text>
              <Text>任意点击关闭</Text>
              <Text>任意点击关闭</Text>
              <Text>任意点击关闭</Text>
            </View>
          )}
        </View>
      </ModalDrawerView>
    );
    return ModalBasics.show(modalView);
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.showModal('bottom', false)}>
          <Text>底部出现</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showModal('top', true)}>
          <Text>顶部出现</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showModal('right', true)}>
          <Text>右边出现</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showModal('left', false)}>
          <Text>左边出现</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
