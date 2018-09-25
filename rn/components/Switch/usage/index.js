import React from 'react';
import Switch from '../index';

export default class SwtichDemo extends React.Component {
  render() {
    return (
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
    );
  }
}
