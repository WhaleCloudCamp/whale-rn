import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, ViewPropTypes, TouchableOpacity } from 'react-native';

export default class ItemBasics extends Component {
  static propTypes = {
    ...TouchableOpacity.propTypes,
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
    itemStyle: ViewPropTypes.style,
  };

  static defaultProps = {};

  renderLeftIcon(leftIcon) {
    return null;
  }

  renderRightIcon(rightIcon) {
    return null;
  }

  renderTitle(title, details) {
    return null;
  }

  renderNote(note) {
    return null;
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
