import React from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from '..';
import Page from '../../Page';
import Label from '../../Label';

export default class SliderDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changingValue: 0.25,
      changedValue: 0.15,
    };
  }

  handleChange = value => {
    this.setState({
      changingValue: value,
    });
  };

  onAfterChange = value => {
    this.setState({
      changedValue: value,
    });
  };

  render() {
    return (
      <Page style={{ paddingStart: 5, paddingEnd: 5 }}>
        <Label type="default" size="xl" text="基本" style={{ margin: 20 }} />

        <View style={{ marginTop: 5, marginStart: 20, marginEnd: 20 }}>
          <Label type="default" text="Default settings" />
          <Slider />
        </View>

        <View style={{ marginTop: 10, marginStart: 20, marginEnd: 20 }}>
          <Label type="default" text="Default value settings" />
          <Slider showValue max={100} step={1} />
        </View>

        <View style={{ marginTop: 10, marginStart: 20, marginEnd: 20 }}>
          <Label type="default" text="step: 0.25" />
          <Slider step={0.25} value={0.25} />
        </View>

        <View style={{ marginTop: 10, marginStart: 20, marginEnd: 20 }}>
          <Label type="default" text="disabled" />
          <Slider disabled defaultValue={0.25} />
        </View>

        <View style={{ marginTop: 10, marginStart: 20, marginEnd: 20 }}>
          <Label
            type="default"
            text={`onChange value: ${this.state.changingValue}`}
          />
          <Slider
            defaultValue={0.25}
            onChange={value => this.handleChange(value)}
          />
        </View>

        <View style={{ marginTop: 10, marginStart: 20, marginEnd: 20 }}>
          <Label
            type="default"
            text={`onAfterChange value: ${this.state.changedValue}`}
          />
          <Slider
            defaultValue={0.15}
            onAfterChange={value => this.onAfterChange(value)}
          />
        </View>
      </Page>
    );
  }
}
const styles = StyleSheet.create({
  thumb: {
    width: 18,
    height: 18,
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: '#33FF00',
    borderWidth: 2,
    borderRadius: 30,
  },
});
