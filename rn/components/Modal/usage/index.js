import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import NavBar from '../../NavBar';
import Button from '../../Button';
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
    const content = <Text>泡泡</Text>;
    Modal.popover(content, view, direction, align, showArrow, {});
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
            backgroundColor: '#FFF',
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
      <Page>
        <NavBar
          title="标题" //标题
          style={{ backgroundColor: '#0C83FF' }} //主样式
          styleTitle={{ color: 'white' }} //标题样式
          isShowFirstRightIcon //是否显示右边第一个图标
          imgRightFirstIcon={require('../../../icons/NoticeBar_Horn.png')} //右边第一个图标
          onRightFirstItemPress={
            //右边第一个图标事件
            target => {
              this.showPopover(target.refs.firstRightIcon, 'down', 'end', true);
            }
          }
        />
        <ScrollView>
          <Button
            style={{ marginTop: 10 }}
            type="normal"
            size="big"
            title="警告弹窗(1)"
            onClick={() =>
              this.showAlert('警告弹窗', '一个按钮', [
                {
                  text: '确定',
                  onPress: e => {
                    alert('确定');
                  },
                },
              ])
            }
          />
          <Button
            style={{ marginTop: 10 }}
            type="normal"
            size="big"
            title="警告弹窗(2)"
            onClick={() =>
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
          />
          <Button
            style={{ marginTop: 10 }}
            type="normal"
            size="big"
            title="警告弹窗(3)"
            onClick={() =>
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
          />
          <Button
            style={{ marginTop: 10 }}
            type="normal"
            size="big"
            title="输入弹窗(1)"
            onClick={() =>
              this.showPrompt('输入弹窗', '没有默认值', [{ text: '确定' }])
            }
          />
          <Button
            style={{ marginTop: 10 }}
            type="normal"
            size="big"
            title="输入弹窗(2)"
            onClick={() =>
              this.showPrompt(
                '输入弹窗',
                '默认值:1234',
                [{ text: '确定' }],
                '1234'
              )
            }
          />
          <Button
            style={{ marginTop: 10 }}
            type="normal"
            size="big"
            title="打开模态弹窗"
            onClick={() => this.showView(true)}
          />
          <Button
            style={{ marginTop: 10 }}
            type="normal"
            size="big"
            title="打开非模态弹窗"
            onClick={() => this.showView(false)}
          />
          <Button
            style={{ marginTop: 10 }}
            type="normal"
            size="big"
            title="抽屉底部出现"
            onClick={() => this.showDrawerView('bottom', false)}
          />
          <Button
            style={{ marginTop: 10 }}
            type="normal"
            size="big"
            title="抽屉顶部出现"
            onClick={() => this.showDrawerView('top', true)}
          />
          <Button
            style={{ marginTop: 10 }}
            type="normal"
            size="big"
            title="抽屉右边出现"
            onClick={() => this.showDrawerView('right', true)}
          />
          <Button
            style={{ marginTop: 10 }}
            type="normal"
            size="big"
            title="抽屉左边出现"
            onClick={() => this.showDrawerView('left', false)}
          />
        </ScrollView>
      </Page>
    );
  }
}
