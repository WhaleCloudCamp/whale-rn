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
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
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
      style,
      textStyle,
    } = this.props;

    if (type === 'normal') {
      if (size === 'big') {
        return (
          <TouchableOpacity
            style={[styles.normalBig, style]}
            disabled={disabled}
            onPress={onClick}
          >
            <Text style={[styles.titleBig, textStyle]}>{title}</Text>
          </TouchableOpacity>
        );
      } else if (size === 'small') {
        return (
          <TouchableOpacity
            style={[styles.normalSmall, style]}
            disabled={disabled}
            onPress={onClick}
          >
            <Text style={[styles.titleSmall, textStyle]}>{title}</Text>
          </TouchableOpacity>
        );
      }
    } else if (type === 'normal2') {
      if (size === 'big') {
        return (
          <TouchableOpacity
            style={[styles.normal2Big, style]}
            disabled={disabled}
            onPress={onClick}
          >
            <Text style={[styles.title2Big, textStyle]}>{title}</Text>
          </TouchableOpacity>
        );
      } else if (size === 'small') {
        return (
          <TouchableOpacity
            style={[styles.normal2Small, style]}
            disabled={disabled}
            onPress={onClick}
          >
            <Text style={[styles.title2Small, textStyle]}>{title}</Text>
          </TouchableOpacity>
        );
      }
    } else if (type === 'loading') {
      if (size === 'big') {
        return (
          <TouchableOpacity style={[styles.loadingBig, style]} disabled>
            <Activityindicator
              image={require('../../icons/Button_Loading.png')}
            />
            <Text style={[styles.titleBig, textStyle]}>{title}</Text>
          </TouchableOpacity>
        );
      } else if (size === 'small') {
        return (
          <TouchableOpacity style={[styles.loadingSmall, style]} disabled>
            <Activityindicator
              image={require('../../icons/Button_Loading.png')}
            />
            <Text style={[styles.titleSmall, textStyle]} />
          </TouchableOpacity>
        );
      }
    } else if (type === 'disabled') {
      if (size === 'big') {
        return (
          <View style={[styles.disabledBig, style]} disabled={disabled}>
            <Text style={[styles.titleBig, textStyle]}>{title}</Text>
          </View>
        );
      } else if (size === 'small') {
        return (
          <View style={[styles.disabledSmall, style]} disabled={disabled}>
            <Text style={[styles.titleSmall, textStyle]}>{title}</Text>
          </View>
        );
      }
    } else if (type === 'disabled2') {
      if (size === 'big') {
        return (
          <View style={[styles.disabled2Big, style]} disabled={disabled}>
            <Text style={[styles.title3Big, textStyle]}>{title}</Text>
          </View>
        );
      } else if (size === 'small') {
        return (
          <View style={[styles.disabled2Small, style]} disabled={disabled}>
            <Text style={[styles.title3Small, textStyle]}>{title}</Text>
          </View>
        );
      }
    }
    return <View />;
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
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
  },
  disabledBig: {
    height: Themes.button_height,
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
