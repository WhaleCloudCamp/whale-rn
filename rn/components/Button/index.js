import React from 'react';
import {
  View,
  StyleSheet,
  ViewPropTypes,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
    } else if (type === 'loading') {
      if (size === 'big') {
        return (
          <TouchableWithoutFeedback
            style={[styles.loadingBig, style]}
            disabled={disabled}
          >
            <Activityindicator
              image={require('./Activityindicator/assets/style2.png')}
            />
            <Text style={[styles.titleBig, textStyle]}>{title}</Text>
          </TouchableWithoutFeedback>
        );
      } else if (size === 'small') {
        return (
          <TouchableWithoutFeedback
            style={[styles.loadingSmall, style]}
            disabled={disabled}
          >
            <Activityindicator
              image={require('./Activityindicator/assets/style2.png')}
            />
            <Text style={[styles.titleSmall, textStyle]} />
          </TouchableWithoutFeedback>
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
  titleSmall: {
    fontSize: Themes.button_font_size_sm,
    color: Themes.fill_base,
    marginLeft: 2,
  },
  normalBig: {
    height: Themes.button_height,
    paddingTop: 13,
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0084FF',
    backgroundColor: '#0084FF',
  },
  disabledBig: {
    height: Themes.button_height,
    paddingTop: 13,
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,132,255,0.5)',
    backgroundColor: 'rgba(0,132,255,0.5)',
  },
  loadingBig: {
    flexDirection: 'row',
    height: Themes.button_height,
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0084FF',
    backgroundColor: '#0084FF',
  },

  normalSmall: {
    height: Themes.button_height_sm,
    paddingTop: 7,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0084FF',
    backgroundColor: '#0084FF',
  },
  disabledSmall: {
    height: Themes.button_height_sm,
    paddingTop: 7,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,132,255,0.5)',
    backgroundColor: 'rgba(0,132,255,0.5)',
  },
  loadingSmall: {
    flexDirection: 'row',
    height: Themes.button_height_sm,
    paddingLeft: 12,
    paddingRight: 12,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0084FF',
    backgroundColor: '#0084FF',
  },
});
