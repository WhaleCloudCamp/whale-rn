import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Slider from '..';
import Page from '../../Page';

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
      <Page style={{ marginStart: 5, marginEnd: 5 }}>
        <View style={{ marginTop: 5 }}>
          <Text>Default settings</Text>
          <Slider />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>Default value settings</Text>
          <Slider showValue max={100} step={1} />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>step: 0.25</Text>
          <Slider step={0.25} value={0.25} />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>disabled</Text>
          <Slider disabled defaultValue={0.25} />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>onChange value: {this.state.changingValue}</Text>
          <Slider
            defaultValue={0.25}
            onChange={value => this.handleChange(value)}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>onAfterChange value: {this.state.changedValue}</Text>
          <Slider
            defaultValue={0.15}
            onAfterChange={value => this.onAfterChange(value)}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>custom color: </Text>
          <Slider
            defaultValue={0.15}
            minimumTrackTintColor="red"
            maximumTrackTintColor="blue"
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>custom thumb: </Text>
          <Slider
            defaultValue={0.15}
            minimumTrackTintColor="red"
            maximumTrackTintColor="blue"
            thumbStyle={styles.thumb}
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
