import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Button, ModalBasics } from '../../index'
import ModalDrawerView from '../index'
export default class ModalDrawerViewExample extends Component {
  showModal(side, modal, modalOpacity = 0.7) {
    let modalView = (
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
    )
    ModalBasics.show(modalView)
  }

  render() {
    return (
      <View>
        <Button onPress={() => this.showModal('bottom', false)}>
          底部出现
        </Button>
        <Button onPress={() => this.showModal('top', true)}>顶部出现</Button>
        <Button onPress={() => this.showModal('right', true)}>右边出现</Button>
        <Button onPress={() => this.showModal('left', false)}>左边出现</Button>
      </View>
    )
  }
}
