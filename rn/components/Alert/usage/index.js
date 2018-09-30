import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Alert from '../index';
import Button from '../../Button';
import Page from '../../Page';

export default class AlertExample extends Component {
  showModal(text, content) {
    const defaultBtns = [
      { text: '不允许', onPress: () => console.log('不允许') },
      { text: '允许' },
    ];
    Alert(text, content, defaultBtns);
  }

  render() {
    return (
      <Page> 
        <Button
          type="normal"
          size="big"
          title="警告"
          onClick={() => this.showModal('授权提示', '“XXX”要获取你的地理位置')}
        />
      </Page>
    );
  }
}
