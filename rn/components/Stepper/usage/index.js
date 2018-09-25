import React from 'react';
import Stepper from '../index';

export default class SteppeerDemo extends React.Component {
  render() {
    return (
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
    );
  }
}
