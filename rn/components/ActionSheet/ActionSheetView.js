import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  Dimensions,
  PixelRatio,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Themes from '../../themes';

function screenHeight() {
  return Dimensions.get('window').height;
}

export default class ActionSheetView extends Component {
  static propTypes = {
    title: PropTypes.string, // 顶部标题
    message: PropTypes.string, // 顶部标题下的简要消息
    options: PropTypes.arrayOf(PropTypes.string).isRequired, // 按钮标题列表 (required)
    onOptionSelected: PropTypes.func, // 选择回调
    onCancelPress: PropTypes.func, // 取消回调
  };

  renderButton = (text, index, onPress) => (
    <TouchableOpacity key={`r-${index}`} style={styles.cell} onPress={onPress}>
      <Text style={styles.optionText}>{text}</Text>
    </TouchableOpacity>
  );

  renderItem = ({ item, index }) => {
    const onPress = () => {
      const { onOptionSelected } = this.props;
      onOptionSelected && onOptionSelected(index);
    };
    return this.renderButton(item, index, onPress);
  };

  onCancelPress = () => {
    const { onCancelPress } = this.props;
    onCancelPress && onCancelPress();
  };

  renderCancelButton = () => this.renderButton('取消', 0, this.onCancelPress);

  separator = () => (
    <View
      style={{ height: 2 / PixelRatio.get(), backgroundColor: '#D8D8D8' }}
    />
  );

  render() {
    const { title, message, options } = this.props;
    return (
      <View style={[styles.container]}>
        <View style={{ alignItems: 'center' }}>
          {title && <Text style={styles.title}>{title}</Text>}
          {message && <Text style={styles.message}>{message}</Text>}
        </View>
        <FlatList
          style={{ maxHeight: screenHeight() * 0.7, flexGrow: null }}
          data={options}
          keyExtractor={(item, index) => `r-${index}`}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.separator}
        />
        <View style={{ height: 6, backgroundColor: '#F5F5F9' }} />
        {this.renderCancelButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    backgroundColor: 'white',
  },
  title: {
    color: Themes.color_text_paragraph,
    fontSize: Themes.font_size_heading,
    marginBottom: 6,
  },
  message: {
    color: Themes.color_text_secondary,
    fontSize: Themes.font_size_subhead,
    marginBottom: 6,
  },
  cell: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#333333',
  },
});
