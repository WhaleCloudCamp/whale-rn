import React from 'react';
import {
  View,
  StyleSheet,
  ViewPropTypes,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Activityindicator from './Activityindicator/index';
import Themes from '../../themes';

export default class Button extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    color: PropTypes.string,
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
  };

  render() {
    const {
      type = 'normal',
      size = 'big',
      disabled = false,
      title,
      onClick,
      color,
      style,
      textStyle,
    } = this.props;

    let typeStyle;
    let texTypeStyle;
    let tmpDisabled;
    let tmpType = disabled ? 'disabled2' : type;

    switch (tmpType) {
      case 'normal2':
        if (size === 'big') {
          typeStyle = styles.normal2Big;
          texTypeStyle = styles.title2Big;
        } else {
          typeStyle = styles.normal2Small;
          texTypeStyle = styles.title2Small;
        }
        tmpDisabled = false;
        break;
      case 'disabled':
        if (size === 'big') {
          typeStyle = styles.disabledBig;
          texTypeStyle = styles.titleBig;
        } else {
          typeStyle = styles.disabledSmall;
          texTypeStyle = styles.titleSmall;
        }
        tmpDisabled = true;
        break;
      case 'disabled2':
        if (size === 'big') {
          typeStyle = styles.disabled2Big;
          texTypeStyle = styles.title3Big;
        } else {
          typeStyle = styles.disabled2Small;
          texTypeStyle = styles.title3Small;
        }
        tmpDisabled = true;
        break;
      case 'loading':
        if (size === 'big') {
          typeStyle = styles.loadingBig;
          texTypeStyle = styles.titleBig;
        } else {
          typeStyle = styles.loadingSmall;
          texTypeStyle = styles.titleSmall;
        }
        tmpDisabled = true;
        break;
      default:
        if (size === 'big') {
          typeStyle = styles.normalBig;
          texTypeStyle = styles.titleBig;
        } else {
          typeStyle = styles.normalSmall;
          texTypeStyle = styles.titleSmall;
        }
        tmpDisabled = false;
        break;
    }

    return (
      <TouchableOpacity
        style={[
          { backgroundColor: color, borderColor: color },
          typeStyle,
          style,
        ]}
        disabled={tmpDisabled}
        onPress={onClick}
      >
        {type === 'loading' ? (
          <Activityindicator
            image={require('../../icons/Button_Loading.png')}
          />
        ) : null}
        <Text style={[texTypeStyle, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  titleBig: {
    fontSize: Themes.button_font_size,
    color: Themes.fill_base,
    marginLeft: 2,
  },
  title2Big: {
    fontSize: Themes.button_font_size,
    color: '#333333',
    marginLeft: 2,
  },
  title3Big: {
    fontSize: Themes.button_font_size,
    color: '#bbbbbb',
    marginLeft: 2,
  },
  titleSmall: {
    fontSize: Themes.button_font_size_sm,
    color: Themes.fill_base,
    marginLeft: 2,
  },
  title2Small: {
    fontSize: Themes.button_font_size_sm,
    color: '#0084ff',
    marginLeft: 2,
  },
  title3Small: {
    fontSize: Themes.button_font_size_sm,
    color: '#bbbbbb',
    marginLeft: 2,
  },
  normalBig: {
    height: Themes.button_height,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0084FF',
    backgroundColor: '#0084FF',
  },
  normal2Big: {
    height: Themes.button_height,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333333',
    backgroundColor: '#ffffff',
  },
  disabledBig: {
    height: Themes.button_height,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,132,255,0.5)',
    backgroundColor: 'rgba(0,132,255,0.5)',
  },
  disabled2Big: {
    height: Themes.button_height,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#979797',
    backgroundColor: '#dddddd',
  },
  loadingBig: {
    flexDirection: 'row',
    height: Themes.button_height,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0084FF',
    backgroundColor: '#0084FF',
  },
  normalSmall: {
    height: Themes.button_height_sm,
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0084FF',
    backgroundColor: '#0084FF',
  },
  normal2Small: {
    height: Themes.button_height_sm,
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0084FF',
    backgroundColor: '#ffffff',
  },
  disabledSmall: {
    height: Themes.button_height_sm,
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,132,255,0.5)',
    backgroundColor: 'rgba(0,132,255,0.5)',
  },
  disabled2Small: {
    height: Themes.button_height_sm,
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#DDDDDD',
  },
  loadingSmall: {
    flexDirection: 'row',
    height: Themes.button_height_sm,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0084FF',
    backgroundColor: '#0084FF',
  },
});
