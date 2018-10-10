import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Theme from '../../themes';

export default class MenuPickerItem extends Component {
  static propTypes = {
    ...TouchableOpacity.propTypes,
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number,
    ]),
    selected: PropTypes.bool,
  };

  buildProps() {
    let {
      style,
      title,
      textAlign = 'left',
      accessory,
      isSub,
      selected,
      ...others
    } = this.props;

    style = [
      {
        backgroundColor:
          !isSub && !selected ? Theme.fill_grey : Theme.poppItemColor,
        paddingLeft: Theme.poppItemPaddingLeft,
        paddingRight: Theme.poppItemPaddingRight,
        paddingTop: Theme.poppItemPaddingTop,
        paddingBottom: Theme.poppItemPaddingBottom,
        borderColor: Theme.poppItemSeparatorColor,
        borderBottomWidth: !isSub ? null : Theme.poppItemSeparatorWidth,
        flexDirection: 'row',
        alignItems: 'center',
      },
    ].concat(style);
    let imageStyle = {
      width: Theme.poppAccessoryWidth,
      height: Theme.poppAccessoryHeight,
      tintColor: Theme.poppAccessoryCheckColor,
    };
    accessory = (
      <View style={{ paddingLeft: Theme.poppAccessoryPaddingLeft }}>
        {selected &&
          isSub && (
            <Image
              style={imageStyle}
              source={require('../../icons/check.png')}
            />
          )}
      </View>
    );
    if (typeof title === 'string' || typeof title === 'number') {
      let titleStyle = {
        textAlign,
        color: Theme.poppItemTitleColor,
        fontSize: Theme.poppItemFontSize,
        overflow: 'hidden',
        flexGrow: 1,
        flexShrink: 1,
      };
      title = (
        <Text style={titleStyle} numberOfLines={1}>
          {title}
        </Text>
      );
    }

    this.props = { style, title, accessory, selected, ...others };
  }

  render() {
    this.buildProps();

    let { title, accessory, ...others } = this.props;
    return (
      <TouchableOpacity {...others}>
        {title}
        {accessory}
      </TouchableOpacity>
    );
  }
}
