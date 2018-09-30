import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Radio from '../index';

export default class RadioDemo extends React.Component {
  setCheck(type) {
    if (type === 1) {
      let check = this.checkbox1.getChecked();
      if (!check) {
        this.checkbox1.setChecked(!check);
        this.checkbox2.setChecked(check);
      }
    } else {
      let check = this.checkbox2.getChecked();
      if (!check) {
        this.checkbox2.setChecked(!check);
        this.checkbox1.setChecked(check);
      }
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <TouchableHighlight
          onPress={() => this.setCheck(1)}
          underlayColor="white"
          activeOpacity={0.5}
        >
          <View
            style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}
          >
            <Text style={{ flex: 1 }}> doctor</Text>
            <Radio
              ref={v => (this.checkbox1 = v)}
              isChecked={false}
              disabled={false}
              onChange={ischeck => {
                this.checkbox2.setChecked(!ischeck);
              }}
            />
          </View>
        </TouchableHighlight>

        <View style={{ backgroundColor: '#F5F5F5', height: 1 }} />

        <TouchableHighlight
          onPress={() => this.setCheck(2)}
          underlayColor="white"
          activeOpacity={0.5}
        >
          <View
            style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}
          >
            <Text style={{ flex: 1 }}> doctor</Text>
            <Radio
              ref={v => (this.checkbox2 = v)}
              // stytles={{ margin: 20 }}
              isChecked
              disabled={false}
              // normalImage={require('../../CheckBox/img/checkbox_selected_normal.png')}
              // checkedImage={require('../../CheckBox/img/checkbox_unselected_normal.png')}
              onChange={ischeck => {
                console.warn(ischeck);
                this.checkbox1.setChecked(!ischeck);
              }}
            />
          </View>
        </TouchableHighlight>

        <View style={{ backgroundColor: '#F5F5F5', height: 5 }} />

        <View
          style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}
        >
          <Text style={{ flex: 1, color: '#BEBEBE' }}> doctor disabled</Text>
          <Radio
            isChecked={false}
            disabled
            onChange={ischeck => {
              console.warn(ischeck);
            }}
          />
        </View>

        <View style={{ backgroundColor: '#F5F5F5', height: 1 }} />

        <View
          style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}
        >
          <Text style={{ flex: 1, color: '#BEBEBE' }}>
            {' '}
            doctor disabled true
          </Text>
          <Radio
            isChecked
            disabled
            onChange={ischeck => {
              console.warn(ischeck);
            }}
          />
        </View>

        <View style={{ backgroundColor: '#F5F5F5', height: 1 }} />

        <View
          style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}
        >
          <Text style={{ flex: 1, color: '#BEBEBE' }}> 自定义图片</Text>
          <Radio
            stytles={{ margin: 20 }}
            isChecked={false}
            disabled={false}
            normalImage={require('../../../icons/checkbox_selected_normal.png')}
            checkedImage={require('../../../icons/checkbox_unselected_normal.png')}
            onChange={ischeck => {
              console.warn(ischeck);
            }}
          />
        </View>
      </View>
    );
  }
}
