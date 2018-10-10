import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import defaultAddPic from '../../icons/create.png';
import defaultRmPic from '../../icons/rm.png';
import defaultDisableRmPic from '../../icons/rm_disable.png';
import defaultDisableAddPic from '../../icons/create_disable.png';

export default class Stepper extends React.Component {
  static propTypes = {
    number: PropTypes.number,
    defaultValue: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    disable: PropTypes.bool,
  };

  static defaultProps = {
    defaultValue: 0,
    min: 0,
    max: 100,
    step: 1,
    disable: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      number: this.props.number || this.props.defaultValue,
    };
  }

  render() {
    return (
      <View style={stytles.main}>
        <TouchableHighlight
          disabled={this.props.disable}
          activeOpacity={0.5}
          underlayColor="white"
          onPress={this.sub}
        >
          <Image
            source={
              this.props.disable
                ? this.props.rmDisableImg || defaultDisableRmPic
                : this.props.rmImg || defaultRmPic
            }
            style={[stytles.img, this.props.styleImg]}
          />
        </TouchableHighlight>

        <Text style={[stytles.text, this.props.styleText]}>
          {this.state.number}
        </Text>
        <TouchableHighlight
          disabled={this.props.disable}
          activeOpacity={0.5}
          underlayColor="white"
          onPress={this.add}
        >
          <Image
            source={
              this.props.disable
                ? this.props.addDisablePic || defaultDisableAddPic
                : this.props.addImg || defaultAddPic
            }
            style={[stytles.img, this.props.styleImg]}
          />
        </TouchableHighlight>
      </View>
    );
  }

  getNumber() {
    //获取当前数量
    return this.state.number;
  }

  setNumber(number) {
    //设置当前数量
    this.setState({
      number,
    });
  }

  add = () => {
    //加
    if (this.props.disable) {
      return;
    }
    let numbers;
    numbers = this.state.number + this.props.step;
    if (numbers < this.props.max) {
      this.props.onChange(numbers);
      this.setState({
        number: numbers,
      });
    } else {
      this.props.onChange(this.props.max);
      this.setState({
        number: this.props.max,
      });
    }
  };

  sub = () => {
    //减
    if (this.props.disable) {
      return;
    }
    let numbers;
    numbers = this.state.number - this.props.step;
    if (numbers > this.props.min) {
      this.props.onChange(numbers);
      this.setState({
        number: numbers,
      });
    } else {
      this.props.onChange(this.props.min);
      this.setState({
        number: this.props.min,
      });
    }
  };
}

const stytles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  img: {
    margin: 5,
    width: 25,
    height: 25,
  },
  text: {
    width: 40,
    textAlign: 'center',
  },
});
