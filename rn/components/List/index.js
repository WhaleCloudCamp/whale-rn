import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, ViewPropTypes } from 'react-native';
import Theme from '../../themes';

export default class List extends Component {
  static propTypes = {
    lines: PropTypes.oneOf(['full', 'inset', 'none']),
    header: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number,
    ]),
    itemStyle: ViewPropTypes.style,
    style: ViewPropTypes.style,
  };

  static defaultProps = {
    lines: 'full',
  };

  render() {
    let { header, children, style, itemStyle, lines } = this.props;
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
        backgroundColor: '#fff',
      },
    ].concat(style);

    const itemLine = {
      borderColor: Theme.border_color_base,
      borderBottomWidth: StyleSheet.hairlineWidth,
      paddingTop: 11,
      paddingBottom: 12,
    };
    const noLine = {
      paddingTop: 11,
      paddingBottom: 12,
    };
    itemStyle = [
      {
        paddingLeft: 15,
        paddingRight: 15,
      },
    ]
      .concat(lines === 'full' ? itemLine : null)
      .concat(lines === 'none' ? noLine : null)
      .concat(itemStyle);

    return (
      <View>
        {header && header}
        <View style={style}>
          {React.Children.map(children, (child, index) => {
            if (lines === 'inset') {
              return (
                <View style={itemStyle}>
                  <View style={itemLine}>{child}</View>
                </View>
              );
            }
            return <View style={itemStyle}>{child}</View>;
          })}
        </View>
      </View>
    );
  }
}
