import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { ModalBasics, ModalView } from '../index';
import AlertContent from './AlertContent';

export default function whaleAlert(title, content, actions) {
  if (!actions) {
    actions = [{ text: '确定', onPress: () => {} }];
  }
  const alertCon = { title, content, actions };
  const modalView = (
    <ModalView
      style={{ alignItems: 'center', justifyContent: 'center' }}
      ref={v => (this.modalViewTag = v)}
    >
      <AlertContent
        {...alertCon}
        onCallback={func => {
          this.modalViewTag.close();
          func && func();
        }}
      />
    </ModalView>
  );
  return ModalBasics.show(modalView);
}
