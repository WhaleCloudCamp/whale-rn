import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import ActionSheetView from './ActionSheetView';
import { ModalBasics } from '..';
import Themes from '../../themes';
import PopupView from './PopupView';

function maskButton(onPress) {
  return <TouchableOpacity style={styles.maskButton} onPress={onPress} />;
}

function dismissModal(modalView) {
  modalView && ModalBasics.remove(modalView);
}

function showActionSheet(params) {
  const { onOptionSelected, onCancelPress, ...restParams } = params;
  let modalView = null;

  const cancel = () => {
    dismissModal(modalView);
    onCancelPress && onCancelPress();
  };
  const onSelected = index => {
    dismissModal(modalView);
    onOptionSelected && onOptionSelected(index);
  };
  const element = (
    <View style={{ flex: 1 }}>
      {maskButton(cancel)}
      <PopupView>
        <ActionSheetView
          {...restParams}
          onOptionSelected={onSelected}
          onCancelPress={cancel}
        />
      </PopupView>
    </View>
  );
  modalView = ModalBasics.show(element);
}

const styles = StyleSheet.create({
  maskButton: {
    backgroundColor: Themes.fill_mask,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default {
  showActionSheet,
};
