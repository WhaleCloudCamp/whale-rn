import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Themes from '../../themes';

export default class Tag extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
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
    // const { onClick } = this.props;
    this.setState({
      selected: !selected,
    });
    let curSelect = this.state.selected;
    // onClick(curSelect);
  };

  render() {
    const { selected } = this.state;

    const { disabled = false, title } = this.props;

    if (disabled) {
      return (
        <View style={styles.disabled}>
          <Text style={styles.disabledText}>{title}</Text>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={selected ? styles.selected : styles.normal}
          onPress={this.tagClick}
        >
          <Text style={selected ? styles.selectedText : styles.notmalText}>
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
    borderWidth: 1,
    borderColor: '#0084FF',
    backgroundColor: Themes.fill_base,
  },
  selectedText: {
    fontSize: Themes.font_size_base,
    color: '#0084FF',
  },
  disabled: {
    height: Themes.tag_height,
    paddingTop: 4,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Themes.fill_disabled,
    backgroundColor: Themes.fill_disabled,
  },
  disabledText: {
    fontSize: Themes.font_size_base,
    color: Themes.color_text_caption,
  },
});
