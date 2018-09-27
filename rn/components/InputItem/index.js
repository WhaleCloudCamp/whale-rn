import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ViewPropTypes,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { Styles } from './style';
import Input from '../Input';
import theme from '../../themes/constants';

const styles = Styles;

export default class InputItem extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    /**
     * enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad',
     * 'decimal-pad', 'twitter', 'web-search', 'visible-password')
     * Determines which keyboard to open, e.g.numeric.
     * The following values work across platforms: - default - numeric - email-address - phone-pad
     * The following values work on iOS: - ascii-capable - numbers-and-punctuation - url - number-pad - name-phone-pad - decimal-pad - twitter - web-search
     * The following values work on Android: - visible-password
     */
    keyboardType: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    labelStyle: Text.propTypes.style,
    clear: PropTypes.bool, // 是否显示 clear 按钮
    ...TextInput.propTypes,
    /**
     * {rules: [{pattern:string, message: string} | (text)=>{error: bool, message: string}], callback: (error: bool, message: string)=>{}}
     */
    validate: PropTypes.object,
    inputStyle: TextInput.propTypes.style,
    extraText: PropTypes.string,
    extraTextStyle: Text.propTypes.style,
    extraImage: Image.propTypes.source,
    extraImageStyle: Image.propTypes.style,
    onExtraClick: PropTypes.func,
  };

  static defaultProps = {
    clear: true,
    keyboardType: 'default',
  };

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorTip: null,
    };
  }

  validateCallback = (error, message) => {
    const {
      validate: { callback },
    } = this.props;
    this.setState({
      error,
      errorTip: error ? message : null,
    });
    callback && callback(error, message);
  };

  render() {
    const {
      style,
      keyboardType,
      label,
      labelStyle,
      clear,
      inputStyle,
      validate,
      extraText,
      extraTextStyle,
      extraImage,
      onExtraClick,
      ...restProps
    } = this.props;
    const { error, errorTip } = this.state;

    let rules;
    let validateCallback;
    if (validate) {
      rules = validate.rules;
      validateCallback = this.validateCallback;
    }

    return (
      <View style={[styles.container, style]}>
        {label &&
          (typeof label === 'string' ? (
            <Text style={[styles.label, labelStyle]}>{label}</Text>
          ) : (
            <View>{label}</View>
          ))}
        <Input
          style={[styles.input, inputStyle]}
          keyboardType={keyboardType}
          clearButtonMode={clear ? 'while-editing' : 'never'}
          placeholderTextColor={theme.color_text_placeholder}
          validate={rules}
          validateCallBack={validateCallback}
          {...restProps}
        />
        {error && errorTip && <Text style={[styles.errorTip]}>{errorTip}</Text>}
        {(extraText || extraImage) && (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignSelf: 'stretch',
              alignItems: 'center',
            }}
            activeOpacity={1}
            hitSlop={{ top: 0, right: 15, bottom: 0, left: 10 }}
            onPress={onExtraClick}
          >
            {extraText && (
              <Text style={[styles.extraText, extraTextStyle]}>
                {extraText}
              </Text>
            )}
            {extraImage && (
              <Image
                style={[{ marginLeft: theme.h_spacing_md }, extraImage]}
                source={extraImage}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
