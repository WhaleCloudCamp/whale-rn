import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import Themes from '../../themes';
import ClosePic from '../../icons/SearchBar_Clear.png';

export default class Tag extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    delected: PropTypes.bool,
    // onClick: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { selected } = nextProps;
    if (selected !== this.state.selected) {
      this.setState({
        selected,
      });
    }
  }

  tagClick = () => {
    const { selected } = this.state;
    const { onClick } = this.props;
    this.setState({
      selected: !selected,
    });
    let curSelect = this.state.selected;
    onClick && onClick(curSelect);
  };

  render() {
    const { selected } = this.state;

    const {
      disabled = false,
      delected = false,
      disabledPic,
      title,
      onDelected,
    } = this.props;

    if (disabled) {
      return (
        <View style={[styles.disabled, this.props.styleDisabled]}>
          <Text style={[styles.disabledText, this.props.styleDisabledText]}>
            {title}
          </Text>
          {delected ? (
            <TouchableOpacity onPress={() => onDelected && onDelected()}>
              <Image
                style={{ width: 13, height: 13, marginRight: 5 }}
                source={disabledPic || ClosePic}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={
            selected
              ? this.props.styleSelected || styles.selected
              : this.props.styleNormal || styles.normal
          }
          onPress={this.tagClick}
        >
          <Text
            style={
              selected
                ? this.props.styleSelectedText || styles.selectedText
                : this.props.styleNormalText || styles.notmalText
            }
          >
            {title}
          </Text>
        </TouchableOpacity>
      );
    }
  }
}

const styles = StyleSheet.create({
  normal: {
    height: Themes.tag_height,
    paddingTop: 4,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Themes.tag_border_Color,
    backgroundColor: Themes.fill_base,
  },
  notmalText: {
    fontSize: Themes.font_size_base,
    color: Themes.color_text_caption,
  },
  selected: {
    height: Themes.tag_height,
    paddingTop: 4,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 4,
    margin: 5,
    borderWidth: 1,
    borderColor: '#0084FF',
    backgroundColor: Themes.fill_base,
  },
  selectedText: {
    fontSize: Themes.font_size_base,
    color: '#0084FF',
  },
  disabled: {
    flexDirection: 'row',
    height: Themes.tag_height,

    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Themes.fill_disabled,
    backgroundColor: Themes.fill_disabled,
  },
  disabledText: {
    paddingTop: 4,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: Themes.font_size_base,
    color: Themes.color_text_caption,
  },
});
