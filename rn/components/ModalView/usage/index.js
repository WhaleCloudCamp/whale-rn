import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ModalBasics, ModalView } from '../../index'

export default class ModalViewExample extends Component {
  showModal(modal, text, modalOpacity = 0.7) {
    const modalView = (
      <ModalView
        style={{ alignItems: 'center', justifyContent: 'center' }}
        modal={modal}
        modalOpacity={modalOpacity}
        ref={v => (this.modalView = v)}
      >
        <View
          style={{
            backgroundColor: '#00FF00',
            padding: 40,
            borderRadius: 15,
            alignItems: 'center',
          }}
        >
          {modal ? (
            <TouchableOpacity
              onPress={() => this.modalView && this.modalView.close()}
            >
              <Text>点我关闭</Text>
            </TouchableOpacity>
          ) : (
            <Text>任意点击关闭</Text>
          )}
        </View>
      </ModalView>
    )
    return ModalBasics.show(modalView)
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.showModal(true, 'isModal', 0.5)}>
        <Text>显示自定义弹窗，点击按钮关闭</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.showModal(false, 'isNoModal', 0.3)}
        >
        <Text>显示模态窗，点击背景关闭</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
