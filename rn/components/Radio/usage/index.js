import React from 'react';
import { View } from 'react-native';
import Radio from '../index';

export default class RadioDemo extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
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
        <Radio
          stytles={{ margin: 20 }}
          isChecked
          disabled={false}
          // normalImage={require('../../CheckBox/img/checkbox_selected_normal.png')}
          // checkedImage={require('../../CheckBox/img/checkbox_unselected_normal.png')}
          onChange={ischeck => {
            console.warn(ischeck);
          }}
        />

        <Radio
          stytles={{ margin: 20 }}
          isChecked
          disabled
          // normalImage={require('../../CheckBox/img/checkbox_selected_normal.png')}
          // checkedImage={require('../../CheckBox/img/checkbox_unselected_normal.png')}
          onChange={ischeck => {
            console.warn(ischeck);
          }}
        />

        <Radio
          stytles={{ margin: 20, width: 40, hieght: 20 }}
          isChecked
          disabled
          onChange={ischeck => {
            console.warn(ischeck);
          }}
        />
        <Radio
          stytles={{ margin: 20 }}
          isChecked={false}
          disabled={false}
          normalImage={require('../../CheckBox/img/checkbox_selected_normal.png')}
          checkedImage={require('../../CheckBox/img/checkbox_unselected_normal.png')}
          onChange={ischeck => {
            console.warn(ischeck);
          }}
        />
      </View>
    );
  }
}
