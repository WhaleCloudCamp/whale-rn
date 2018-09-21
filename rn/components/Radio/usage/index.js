import React from 'react';
import { View } from 'react-native';
import Radio from '../index';

export default class RadioDemo extends React.Component {
  render() {
    return (
      <Radio
        // stytles ={{}}
        isChecked={false}
        disabled={false}
        // normalImage={require('../../CheckBox/img/checkbox_selected_normal.png')}
        // checkedImage={require('../../CheckBox/img/checkbox_unselected_normal.png')}
        onChange={ischeck => {
          console.warn(ischeck);
        }}
      />
    );
  }
}
