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
  const modalView = (
    <ModalView
      style={{ alignItems: 'center', justifyContent: 'center' }}
      ref={v => (this.modalViewTag = v)}
    >
      <View style={{ position: 'relative' }}>
        <PromptContent
          {...promptCon}
          onCloseRequire={() => {
            this.modalViewTag.close();
          }}
        />
      </View>
    </ModalView>
  );
  return ModalBasics.show(modalView);
}
