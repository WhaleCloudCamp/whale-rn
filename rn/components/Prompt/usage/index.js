import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ModalBasics, ModalView } from '../../index';
import Prompt from '../index';
import FooterButtons from '../../FooterButtons';

export default class PromptExample extends Component {
  showModal(text, content) {
    const defaultBtns = [
      {
        text: '确定',
        onPress: e => {
          console.log(e);
        },
      },
    ];
    Prompt(text, content, defaultBtns, 'defaultValue', 'placeholders');
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.showModal(
              '大三大四撒打阿斯顿会撒娇和德国撒的撒简单撒撒娇很简单丷说的算的',
              'hahsdhh阿挂电话就挂电话就打噶好多个哈根达斯结婚的噶说的给大伙世界各地很简单噶大家赶紧哈给大家上度过会撒娇的过到家啊帅哥到家啊会给大家更多就是娇很多洒哥仨的撒过的噶事阿加得甘撒娇和感受多少啊阿所看见的撒撒的撒打算ah',
              [{}, {}]
            )
          }
        >
          <Text>点击弹窗1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
