import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ModalBasics, ModalView } from '../../index';
import Modal from '../index';
import Page from '../../Page';

export default class ModalExample extends Component {
  showAlert(title, content, actions) {
    const defaultBtns = [
      { text: '取消', onPress: () => console.log('取消') },
      { text: '确定' },
    ];
    Modal.alert(title, content, actions || defaultBtns);
  }

  showPopover(view, direction, align, showArrow) {
    const content = (
      <View
        style={{ width: 230, height: 300, backgroundColor: 'rgba(0,255,0,1)' }}
      >
        <Text>12312</Text>
      </View>
    );
    Modal.popover(content, view, direction, align, showArrow, {
      backgroundColor: 'rgba(0,0,255,1)',
    });
  }

  showPrompt(
    title,
    content,
    actions,
    defaultValue = '',
    placeholders = '请随意输入'
  ) {
    const defaultBtns = [
      {
        text: '确定',
        onPress: e => {
          alert(e);
        },
      },
    ];
    Modal.prompt(title, content, defaultBtns, defaultValue, placeholders);
  }

  showView(modal, modalOpacity = 0.7) {
    const modalView = (
      <Modal.View
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
      </Modal.View>
    );
    return Modal.show(modalView);
  }

  showDrawerView(side, modal = true, modalOpacity = 0.7) {
    const modalView = (
      <Modal.DrawerView
        side={side}
        modal={modal}
        modalOpacity={modalOpacity}
        ref={v => (this.modalDrawerView = v)}
      >
        <View
          style={{
            backgroundColor: 'rgba(0,0,255,0.7)',
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
      </Modal.DrawerView>
    );
    return Modal.show(modalView);
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.showAlert('警告弹窗', '一个按钮', [
              {
                text: '确定',
                onPress: e => {
                  alert('确定');
                },
              },
            ])
          }
        >
          <Text>警告弹窗(1)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.showAlert('警告弹窗', '两个按钮', [
              {
                text: '取消',
                onPress: e => {
                  alert('取消');
                },
              },
              {
                text: '确定',
                onPress: e => {
                  alert('确定');
                },
              },
            ])
          }
        >
          <Text>警告弹窗(2)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.showAlert('警告弹窗', '三个按钮', [
              {
                text: '上',
                onPress: e => {
                  alert('上');
                },
              },
              {
                text: '中',
                onPress: e => {
                  alert('中');
                },
              },
              {
                text: '下',
                onPress: e => {
                  alert('下');
                },
              },
            ])
          }
        >
          <Text>警告弹窗(3)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.showPrompt('输入弹窗', '没有默认值', [{ text: '确定' }])
          }
        >
          <Text>输入弹窗(1)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.showPrompt(
              '输入弹窗',
              '默认值:1234',
              [{ text: '确定' }],
              '1234'
            )
          }
        >
          <Text>输入弹窗(2)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showView(true)}>
          <Text>打开模态弹窗</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showView(false)}>
          <Text>打开非模态弹窗</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showDrawerView('bottom', false)}>
          <Text>抽屉底部出现</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showDrawerView('top', true)}>
          <Text>抽屉顶部出现</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showDrawerView('right', true)}>
          <Text>抽屉右边出现</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showDrawerView('left', false)}>
          <Text>抽屉左边出现</Text>
        </TouchableOpacity>
        <TouchableOpacity
          ref="downstart"
          onPress={() =>
            this.showPopover(this.refs.downstart, 'down', 'start', true)
          }
        >
          <Text>定点提示</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
