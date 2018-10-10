import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

export default class AreaAcrrossItem extends React.Component {
  static propTypes = {
    acrossTitle: PropTypes.string,
    acrossMax: PropTypes.number,
    acrossInputTint: PropTypes.string,
  };

  static defaultProps = {
    acrossTitle: '标题',
    acrossMax: 500,
    acrossInputTint: '请输入',
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
      <View style={[styles.main, this.props.styleAcrossMain]}>
        <Text style={[styles.title, this.props.styleAcrossTitle]}>
          {this.props.acrossTitle}
        </Text>
        <View style={styles.leftView}>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.input, this.props.styleAcrossInput]}
            onPress={() => this.TextInput.focus()}
          >
            <TextInput
              ref={textInput => (this.TextInput = textInput)}
              placeholder={this.props.acrossInputTint}
              maxLength={this.props.acrossMax}
              onChangeText={text => {
                this.props.onAcrossChange(text);
                this.setText(text);
              }}
              multiline
            />
          </TouchableOpacity>

          <View style={styles.rightView}>
            <Text style={[styles.textHint, this.props.styleAcrossHint]}>
              {this.state.inputText.length}/{this.props.acrossMax}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    height: 100,
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
    marginLeft: 10,
    marginRight: 15,
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: '100%',
    marginTop: 8,
  },
  textHint: {
    color: 'gray',
    fontSize: 8,
    textAlign: 'center',
  },
  rightView: {
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
});
