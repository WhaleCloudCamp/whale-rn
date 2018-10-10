import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import ItemBasics from '../ItemBasics';

export default class Item extends ItemBasics {
  static propTypes = {
    ...ItemBasics.propTypes,
  };

  static defaultProps = {
    disabled: true,
    itemStyle: {
      backgroundColor: '#F5F5F5',
    },
  };

  renderTitle(title, details) {
    //title
    if (typeof title === 'string' || typeof title === 'number') {
      title = (
        <Text
          numberOfLines={1}
          style={{
            color: '#333',
            fontSize: 14,
            // whiteSpace: 'nowrap',
            marginBottom: details ? 7 : 0,
          }}
        >
          {title}
        </Text>
      );
    }
    return <View>{title}</View>;
  }

  renderNote(note) {
    if (typeof note === 'string' || typeof note === 'number') {
      note = (
        <View
          style={{
            maxWidth: 78,
            overflow: 'hidden',
            paddingLeft: 15,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              color: '#888',
              fontSize: 13,
              // whiteSpace: 'nowrap',
            }}
          >
            {note}
          </Text>
        </View>
      );
    }
    return note;
  }
}
