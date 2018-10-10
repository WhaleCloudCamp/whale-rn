import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

export default class AreaAcrossItem extends React.Component {
  static propTypes = {
    verticalTitle: PropTypes.string,
    verticalMax: PropTypes.number,
    verticalInputTint: PropTypes.string,
  };

  static defaultProps = {
    verticalTitle: '标题',
    verticalMax: 500,
    verticalInputTint: '请输入',
  };

  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  setText(text) {
    this.setState({
      inputText: text,
    });
  }

  getText() {
    return this.state.inputText;
  }

  render() {
    return (
      <View style={[styles.main, this.props.styleVerticalMain]}>
        <Text style={[styles.title, this.props.styleVerticalTitle]}>
          {this.props.verticalTitle}
        </Text>
        <View style={styles.leftView}>
          <TextInput
            placeholder={this.props.verticalInputTint}
            style={[styles.input, this.props.styleVerticalInput]}
            maxLength={this.props.verticalMax}
            onChangeText={text => {
              this.props.onVerticalChange(text);
              this.setText(text);
            }}
            // textAlignVertical="top"
            multiline
          />

          <View style={styles.rightView}>
            <Text style={[styles.textHint, this.props.styleVerticalHint]}>
              {this.state.inputText.length}/{this.props.verticalMax}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    height: 120,
    backgroundColor: 'white',
  },
  leftView: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  title: {
    color: 'black',
    fontSize: 14,
    padding: 10,
    backgroundColor: '#EFEEEC',
    width: '100%',
  },
  input: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
  textHint: {
    color: 'gray',
    fontSize: 8,
    textAlign: 'center'
  },
  rightView: {
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
});
