import React from 'react';
import { View, Text } from 'react-native';
import Stepper from '../index';

export default class SteppeerDemo extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'center', margin: 20 }}
        >
          <Text style={{ flex: 1 }}>Show number value</Text>
          <Stepper
            max={100}
            min={0}
            number={50}
            //   disable={true}
            // addImg={require('../img/rm.png')}
            // styleImg ={{width: 100}}
            // styleText ={{width: 100}}
            step={10}
            onChange={number => {
              console.warn(number);
            }}
          />
        </View>
        <View style={{ backgroundColor: '#F5F5F5', height: 1 }} />

        <View
          style={{ flexDirection: 'row', justifyContent: 'center', margin: 20 }}
        >
          <Text style={{ flex: 1 }}>Disabled</Text>
          <Stepper
            max={100}
            min={0}
            number={50}
            disable
            // addImg={require('../img/rm.png')}
            // styleImg ={{width: 100}}
            // styleText ={{width: 100}}
            step={10}
            onChange={number => {
              console.warn(number);
            }}
          />
        </View>
      </View>
    );
  }
}
