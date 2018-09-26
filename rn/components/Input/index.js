import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class Input extends Component {
  static propTypes = {
    ...TextInput.propTypes,
    validate: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    ), // validate数组包含的对象 可以是{ pattern: string 正则表达式字符串, message: string 报错信息 }类型，也可以是函数，当为函数时，入参为 text:string， 返回 { error: bool 是否错误, message: string 报错信息 }
    validateCallBack: PropTypes.func, // 当验证完成时调用该函数, 入参为(error: bool, message)
  };

  validate = text => {
    const { validate = [], validateCallBack } = this.props;
    let error = false;
    let errorMessage;
    for (let i = 0; i < validate.length; i++) {
      const item = validate[i];
      if (typeof item === 'object') {
        const { pattern, message } = item;
        let regex = new RegExp(pattern);
        error = !regex.test(text);
        error && (errorMessage = message);
      } else if (typeof item === 'function') {
        let result = item(text);
        error = result.error;
        error && (errorMessage = result.message);
      }
      if (error) {
        break;
      }
    }
    validateCallBack && validateCallBack(error, errorMessage);
  };

  onEndEditing = e => {
    const {
      nativeEvent: { text },
    } = e;
    const { onEndEditing, validate } = this.props;
    onEndEditing && onEndEditing(e);
    validate && this.validate(text);
  };

  render() {
    const { style, onEndEditing, ...restProps } = this.props;
    return (
      <TextInput
        style={[styles.input, style]}
        allowFontScaling={false}
        underlineColorAndroid="transparent"
        onEndEditing={this.onEndEditing}
        {...restProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 0,
  },
});
