import React from 'react';
import { View, Text } from 'react-native';
import CheckBox from '../index';

export default class CheckBoxDemo extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox
            stytles={{ margin: 10 }}
            disable={false}
            checkedImage={require('../../../icons/checkbox_selected_normal.png')}
            normalImage={require('../../../icons/checkbox_unselected_normal.png')}
            onChange={ischeck => {
              console.warn(ischeck);
            }}
          />

          <Text> LuCi</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox
            stytles={{ margin: 10 }}
            disable={false}
            isChecked
            checkedImage={require('../../../icons/checkbox_selected_normal.png')}
            normalImage={require('../../../icons/checkbox_unselected_normal.png')}
            onChange={ischeck => {
              console.warn(ischeck);
            }}
          />

          <Text> KangKang</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox
            stytles={{ margin: 10 }}
            disable
            isChecked={false}
            normalImage={require('../../../icons/checkbox_selected_normal.png')}
            checkedImage={require('../../../icons/checkbox_unselected_normal.png')}
            onChange={ischeck => {
              console.warn(ischeck);
            }}
          />
          <Text> （disable）下的未选中状态</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox
            stytles={{ margin: 10 }}
            disable
            isChecked
            onChange={ischeck => {
              console.warn(ischeck);
            }}
          />
          <Text> （disable）下的选中状态</Text>
        </View>
      </View>
    );
  }
}
