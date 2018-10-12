import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Slider from './custom';

export default class WhaleSlider extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    onAfterChange: PropTypes.func,
    defaultValue: PropTypes.number,
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    disabled: PropTypes.bool,
    maximumTrackTintColor: PropTypes.string,
    minimumTrackTintColor: PropTypes.string,
    maximumTrackTintDisabledColor: PropTypes.string,
    minimumTrackTintDisabledColor: PropTypes.string,
    showValue: PropTypes.bool,
    thumbStyle: PropTypes.object,
    thumbStyleDisabled: PropTypes.object,
  };

  static defaultProps = {
    onChange() {},
    onAfterChange() {},
    defaultValue: 0,
    disabled: false,
    maximumTrackTintColor: '#ddddddff',
    minimumTrackTintColor: '#108ee9ff',
    maximumTrackTintDisabledColor: '#ddddddaa',
    minimumTrackTintDisabledColor: '#108ee9aa',
    showValue: false,
    min: 0,
    max: 1,
  };

  render() {
    const {
      defaultValue,
      value,
      min,
      max,
      step,
      disabled,
      onChange,
      onAfterChange,
      maximumTrackTintColor,
      minimumTrackTintColor,
      maximumTrackTintDisabledColor,
      minimumTrackTintDisabledColor,
      showValue,
      thumbStyle,
      thumbStyleDisabled,
    } = this.props;
    let minimumTrackColor = minimumTrackTintColor;
    let maximumTrackColor = maximumTrackTintColor;
    let thumb = thumbStyle || styles.thumb;
    let start;
    let end;
    if (showValue) {
      start = <Text style={styles.textStyle}>{min}</Text>;
      end = <Text style={styles.textStyle}>{max}</Text>;
    }
    if (disabled) {
      minimumTrackColor = minimumTrackTintDisabledColor;
      maximumTrackColor = maximumTrackTintDisabledColor;
      thumb = thumbStyleDisabled || styles.thumbDisabled;
    }
    return (
      <View style={styles.container}>
        {start}
        <Slider
          value={defaultValue || value}
          minimumValue={min}
          maximumValue={max}
          step={step}
          minimumTrackTintColor={minimumTrackColor}
          maximumTrackTintColor={maximumTrackColor}
          disabled={disabled}
          onValueChange={onChange}
          onSlidingComplete={onAfterChange}
          thumbStyle={thumb}
          style={showValue ? styles.showValueSlider : styles.normalSlider}
        />
        {end}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumb: {
    width: 18,
    height: 18,
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: '#0084FFFF',
    borderWidth: 2,
    borderRadius: 30,
  },
  thumbDisabled: {
    width: 18,
    height: 18,
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: '#0084FFAA',
    borderWidth: 2,
    borderRadius: 30,
  },
  textStyle: {
    flex: 0.12,
    textAlign: 'center',
  },
  showValueSlider: {
    flex: 1,
  },
  normalSlider: {
    flex: 1,
    marginStart: 10,
    marginEnd: 10,
  },
});
