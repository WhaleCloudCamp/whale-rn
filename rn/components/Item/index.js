import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity } from 'react-native';

export default class Item extends Component {
  static propTypes = {
    leftIcon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.shape({ uri: PropTypes.string }),
      PropTypes.number,
    ]),
    rightIcon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.shape({ uri: PropTypes.string }),
      PropTypes.number,
      PropTypes.oneOf(['none', 'empty', 'check', 'indicator']),
    ]),
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    note: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number,
    ]),
    details: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number,
    ]),
  };

  static defaultProps = {
    rightIcon: 'indicator',
  };

  renderLeftIcon(leftIcon) {
    if ((leftIcon || leftIcon === 0) && !React.isValidElement(leftIcon)) {
      leftIcon = (
        <View style={{ paddingRight: 12 }}>
          <Image style={{ width: 22, height: 22 }} source={leftIcon} />
        </View>
      );
    }
    return leftIcon;
  }

  renderRightIcon(rightIcon) {
    if (rightIcon === 'none') rightIcon = null;
    if (rightIcon && !React.isValidElement(rightIcon)) {
      let imageSource;
      let tintColor;
      let width = 8;
      let height = 12.5;
      switch (rightIcon) {
        case 'empty':
          imageSource = null;
          break;
        case 'check':
          imageSource = require('../../icons/check.png');
          tintColor = '#007aff';
          break;
        case 'indicator':
          imageSource = require('../../icons/indicator.png');
          tintColor = '#bebebe';
          width = 8;
          height = 12.5;
          break;
        default:
          imageSource = rightIcon;
      }
      let imageStyle = {
        width,
        height,
        tintColor,
      };
      rightIcon = (
        <View style={{ paddingLeft: 15 }}>
          <Image style={imageStyle} source={imageSource} />
        </View>
      );
    }
    return rightIcon;
  }

  renderTitle(title, details) {
    const contentStyle = {
      flex: 1,
      overflow: 'hidden',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      width: 225,
    };

    //title
    if (typeof title === 'string' || typeof title === 'number') {
      title = (
        <Text
          style={{
            color: '#333',
            fontSize: 14,
            maxHeight: 14,
            marginBottom: details ? 7 : 0,
          }}
        >
          {title}
        </Text>
      );
    }

    //detail
    if (typeof details === 'string' || typeof details === 'number') {
      details = (
        <Text
          style={{
            color: '#888',
            fontSize: 12,
            maxHeight: 12,
          }}
        >
          {details}
        </Text>
      );
    }
    return (
      <View style={contentStyle}>
        {title}
        {details}
      </View>
    );
  }

  renderNote(note) {
    if (typeof note === 'string' || typeof note === 'number') {
      note = (
        <View
          style={{
            maxWidth: 78,
            maxHeight: 13,
            overflow: 'hidden',
            paddingLeft: 15,
          }}
        >
          <Text
            style={{
              color: '#888',
              fontSize: 13,
            }}
          >
            {note}
          </Text>
        </View>
      );
    }
    return note;
  }

  render() {
    let {
      leftIcon,
      rightIcon,
      title,
      note,
      details,
      children,
      ...other
    } = this.props;
    const leftIconCont = this.renderLeftIcon(leftIcon);
    const rightIconCont = this.renderRightIcon(rightIcon);
    const titleCont = this.renderTitle(title, details);
    const noteCont = this.renderNote(note);
    const contentStyle = {
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    };
    return (
      <TouchableOpacity {...other}>
        <View style={contentStyle}>
          {leftIconCont}
          {titleCont}
          {children && children}
          {!children && noteCont}
          {!children && rightIconCont}
        </View>
      </TouchableOpacity>
    );
  }
}
