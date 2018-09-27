import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Item from '../Item';

export default class ItemAvatar extends Item {
  static propTypes = {
    ...Item.propTypes,
  };

  static defaultProps = {
    ...Item.defaultProps,
  };

  renderLeftIcon(leftIcon) {
    if ((leftIcon || leftIcon === 0) && !React.isValidElement(leftIcon)) {
      leftIcon = (
        <View style={{ paddingRight: 12 }}>
          <Image style={{ width: 50, height: 50 }} source={leftIcon} />
        </View>
      );
    }
    return leftIcon;
  }
}
