import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import Item from '../Item';
import CheckBox from '../CheckBox';
import DelectPic from '../../icons/listDelete.png';

export default class ItemCustom extends Item {
  static propTypes = {
    ...Item.propTypes,
  };

  static defaultProps = {
    ...Item.defaultProps,
  };

  renderLeftIcon(leftIcon) {
    if ((leftIcon || leftIcon === 0) && !React.isValidElement(leftIcon)) {
      switch (leftIcon) {
        case 'checkbox':
          leftIcon = (
            <CheckBox
              stytles={{ margin: 5, width: 20, height: 20 }}
              isChecked={this.props.ischeck}
              onChange={ischecked => {
                this.props.onLeftClick(ischecked);
              }}
            />
          );
          break;
        case 'delete':
          leftIcon = (
            <TouchableOpacity
              onPress={e => {
                this.props.onLeftClick();
              }}
            >
              <Image
                style={{ width: 20, height: 20, margin: 10 }}
                source={DelectPic}
              />
            </TouchableOpacity>
          );
          break;
        case 'empty':
          leftIcon = ItemCustom;
          break;
        default:
          leftIcon = null;
          break;
      }
    }
    return leftIcon;
  }
}
