import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { ModalBasics, ModalView } from '../index';
import PromptContent from './PromptContent';

export default function whalePrompt(
  title,
  content,
  actions,
  defaultValue,
  placeholders
) {
  const promptCon = { title, content, actions, defaultValue, placeholders };
  //兼容web，从函数中打开this指向为无定义
  const thissupport = this || {};
  const modalView = (
    <ModalView
      style={{ alignItems: 'center', justifyContent: 'center' }}
      ref={v => (thissupport.modalViewTag = v)}
    >
      <View style={{ position: 'relative' }}>
        <PromptContent
          {...promptCon}
          onCloseRequire={() => {
            thissupport.modalViewTag.close();
          }}
        />
      </View>
    </ModalView>
  );
  return ModalBasics.show(modalView);
}
