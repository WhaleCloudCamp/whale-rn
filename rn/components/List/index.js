import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Theme from '../../themes';

export default class List extends Component {
  static propTypes = {
    // lines: PropTypes.oneOf(['full', 'inset', 'none']),
    header: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number,
    ]),
  };

  static defaultProps = {
    // lines: 'full',
  };

  render() {
    let { header, children, style } = this.props;
    if (typeof header === 'string' || typeof header === 'number') {
      header = (
        <Text
          style={{
            borderColor: Theme.border_color_base,
            borderBottomWidth: StyleSheet.hairlineWidth,
            padding: 5,
            color: '#888',
            fontSize: 13,
          }}
        >
          {header}
        </Text>
      );
    }
    style = [
      {
        borderColor: Theme.border_color_base,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
    ].concat(style);

    return (
      <View>
        {header && header}
        <View style={style}>
          {React.Children.map(children, (child, index) => {
            let childStyle = {
              borderColor: Theme.border_color_base,
              borderBottomWidth: StyleSheet.hairlineWidth,
            };
            return <View style={childStyle}>{child}</View>;
          })}
        </View>
      </View>
    );
  }
}
