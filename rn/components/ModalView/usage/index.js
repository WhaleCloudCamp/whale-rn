import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button, ModalBasics, ModalView } from '../../index'

export default class ModalViewExample extends Component {
  showModal(modal, text, modalOpacity = 0.7) {
    let modalView = (
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
    ModalBasics.show(modalView)
  }

  render() {
    return (
      <View>
        <Button onPress={() => this.showModal(true, 'isModal', 0.5)}>
          显示自定义弹窗，点击按钮关闭
        </Button>

        <Button onPress={() => this.showModal(false, 'isNoModal', 0.3)}>
          显示模态窗，点击背景关闭
        </Button>
      </View>
    )
  }
}
