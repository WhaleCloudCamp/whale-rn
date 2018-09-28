import React from 'react';
import { View } from 'react-native';
import Switch from '../index';

export default class SwtichDemo extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Switch
          checkStatu={false}
          disableStatu={false}
          onCheckChangeListener={isCheck => {
            if (isCheck) {
              console.log('选中');
            } else {
              console.log('未选中');
            }
          }}
        />
        <Switch
          checkStatu
          disableStatu={false}
          onCheckChangeListener={isCheck => {
            if (isCheck) {
              console.log('选中');
            } else {
              console.log('未选中');
            }
          }}
        />
        <Switch
          checkStatu={false}
          disableStatu
          onCheckChangeListener={isCheck => {
            if (isCheck) {
              console.log('选中');
            } else {
              console.log('未选中');
            }
          }}
        />

        <Switch
          checkStatu
          disableStatu
          onCheckChangeListener={isCheck => {
            if (isCheck) {
              console.log('选中');
            } else {
              console.log('未选中');
            }
          }}
        />
      </View>
    );
  }
}
