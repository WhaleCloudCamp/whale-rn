import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { ModalBasics, ModalView } from '../index';
import FooterBtn from '../FooterButtons';
import Theme from '../../themes';

const maxHeight = StyleSheet.create({
  maxHeight: {
    maxHeight: Dimensions.get('window').height,
  },
}).maxHeight;

export default function whaleAlert(modal, title, content, actions) {
  if (actions) {
    actions.map(item => {
      if (!item.onPress) {
        item.onPress = () => this.modalViewTag.close();
      }
      return item;
    });
  } else {
    actions = [{ text: '确定', onPress: () => this.modalViewTag.close() }];
  }
  const modalView = (
    <ModalView
      style={{ alignItems: 'center', justifyContent: 'center' }}
      modal={modal}
      ref={v => (this.modalViewTag = v)}
    >
      <View
        style={{
          width: 270,
          position: 'relative',
        }}
      >
        <View
          style={{
            backgroundColor: '#FFF',
            borderRadius: 7,
            alignItems: 'center',
            paddingTop: 15,
            border: 0,
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          <View
            style={{
              paddingTop: 6,
              paddingBottom: 15,
              paddingLeft: 15,
              paddingRight: 15,
            }}
          >
            <Text
              style={{
                margin: 0,
                fontSize: 18,
                color: '#000',
                textAlign: 'center',
              }}
            >
              {title}
            </Text>
          </View>
          <View
            style={{
              paddingTop: 0,
              paddingBottom: 15,
              paddingLeft: 15,
              paddingRight: 15,
              fontSize: 15,
              lineHeight: 1.5,
              overflow: 'scroll',
            }}
          >
            <Text style={{ overflow: 'hidden', color: '#888' }}>{content}</Text>
          </View>
          <View
            style={{
              width: 270,
            }}
          >
            <FooterBtn actions={actions} />
          </View>
        </View>
      </View>
    </ModalView>
  );
  return ModalBasics.show(modalView);
}
