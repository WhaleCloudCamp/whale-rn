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
    style: {
      color: '#222',
      fontWeight: 'bold',
    },
    itemStyle: {
      backgroundColor: '#F5F5F5',
    },
  };

  renderTitle(title, details) {
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
    return <View>{title}</View>;
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
}
