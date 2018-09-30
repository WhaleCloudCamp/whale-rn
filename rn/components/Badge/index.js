import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, Platform } from 'react-native';
import PropTypes from 'prop-types';
import Theme from '../../themes';

export default class Badge extends React.Component {
  static propTypes = {
    // size: 'large' | 'small',
    overflowCount: PropTypes.number,
    corner: PropTypes.bool, // 暂时不实现Corner
    dot: PropTypes.bool,
    text: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    // size: 'small',
    overflowCount: 99,
    dot: false,
    corner: false,
    text: 'new',
    // styles: BadgeStyles
  };

  render() {
    let text = this.props.text;
    let overflowCount = this.props.overflowCount;
    let dot = this.props.dot;
    let children = this.props.children;
    let corner = this.props.corner;
    text = typeof text === 'number' && text > overflowCount ? '· · ·' : text;
    // Alert.alert('' + text);
    if (dot) {
      this.props.text = '';
    }
    if (text === 0) {
      return null;
    }
    let view = dot ? (
      <View style={[styles.wrap, this.props.style]}>
        <View>
          {children}
          <View style={styles.dot} />
        </View>
      </View>
    ) : (
      <View style={[styles.wrap, this.props.style]}>
        <View>
          {children}
          <Text
            style={[
              styles.text,
              styles.textDom,
              children ? styles.textAbsolute : null,
            ]}
          >
            {text}
          </Text>
        </View>
      </View>
    );
    return view;
  }
}

const grid = 4;
const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
  },
  textCornerWrap: {
    overflow: 'hidden',
  },
  dot: {
    width: 2 * grid,
    height: 2 * grid,
    borderRadius: grid,
    backgroundColor: Theme.brand_important,
    position: 'absolute',
    top: -1 * grid,
    right: -1 * grid,
  },
  dotSizelarge: {
    width: 4 * grid,
    height: 4 * grid,
    borderRadius: 2 * grid,
  },
  textDom: {
    paddingVertical: 0.5 * grid,
    paddingHorizontal: (Platform.OS === 'ios' ? 1.5 : 2) * grid,
    backgroundColor: Theme.brand_important,
    borderRadius: 4 * Theme.radius_sm,
    borderStyle: 'solid',
  },
  textAbsolute: {
    position: 'absolute',
    top: -10,
    right: -15,
  },
  textCorner: {
    width: 18 * grid,
    backgroundColor: Theme.brand_important,
    transform: [
      {
        rotate: '45deg',
      },
    ],
    position: 'absolute',
    top: 2 * grid,
  },
  textCornerlarge: {
    width: 26 * grid,
    top: 3 * grid,
  },
  text: {
    color: Theme.color_text_base_inverse,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
