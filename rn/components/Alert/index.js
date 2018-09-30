import React from 'react';
import { ModalBasics, ModalView } from '../index';
import AlertContent from './AlertContent';

export default function whaleAlert(title, content, actions) {
  if (!actions) {
    actions = [{ text: '确定', onPress: () => {} }];
  }
  const alertCon = { title, content, actions };
  //兼容web，从函数中打开this指向为无定义
  const thissupport = this || {};
  let modalViewTag = (
    <ModalView
      style={{ alignItems: 'center', justifyContent: 'center' }}
      ref={v => (thissupport.modalViewTag = v)}
    >
      <AlertContent
        {...alertCon}
        onCallback={func => {
          thissupport.modalViewTag.close();
          func && func();
        }}
      />
    </ModalView>
  );
  return ModalBasics.show(modalViewTag);
}
