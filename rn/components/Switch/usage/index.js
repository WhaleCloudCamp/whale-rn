import React from 'react';
import { View, Text } from 'react-native';
import Switch from '../index';
import Page from '../../Page';

export default class SwtichDemo extends React.Component {
  render() {
    return (
      <Page>
        <View style={{ backgroundColor: 'white' }}>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}
          >
            <Text style={{ flex: 1 }}> Off</Text>
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
          </View>
          <View style={{ backgroundColor: '#F5F5F5', height: 1 }} />
          <View
            style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}
          >
            <Text style={{ flex: 1 }}> On</Text>
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
          </View>
          <View style={{ backgroundColor: '#F5F5F5', height: 1 }} />
          <View
            style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}
          >
            <Text style={{ flex: 1 }}> Disabled off</Text>
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
          </View>
          <View style={{ backgroundColor: '#F5F5F5', height: 1 }} />
          <View
            style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}
          >
            <Text style={{ flex: 1 }}> Disabled on</Text>

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
        </View>
      </Page>
    );
  }
}
