import React, { Component, PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Themes from '../../themes';

export default class ShareActionSheetView extends Component {
  static propTypes = {
    shareItems: PropTypes.arrayOf(PropTypes.object),
    toolItems: PropTypes.arrayOf(PropTypes.object),
    onCancelPress: PropTypes.func,
    callback: PropTypes.func,
  };

  onCancelPress = () => {
    const { onCancelPress } = this.props;
    onCancelPress && onCancelPress();
  };

  onItemPress = (item, index, items) => {
    const { callback } = this.props;
    callback && callback(item, index, items);
  };

  renderItem = (title, image, onPress) => (
    <ListItem title={title} image={image} onPress={onPress} />
  );

  renderShareItem = ({ item, index }) => {
    const { title, image } = item;
    const onPress = () => this.onItemPress(item, index, this.props.shareItems);
    return this.renderItem(title, image, onPress);
  };

  separator = () => <View style={{ width: 12 }} />;

  shareItemsList = () => {
    const { shareItems } = this.props;
    return (
      <FlatList
        contentContainerStyle={styles.listContent}
        data={shareItems}
        keyExtractor={(item, index) => `r-${index}`}
        renderItem={this.renderShareItem}
        horizontal
        ItemSeparatorComponent={this.separator}
      />
    );
  };

  renderToolItem = ({ item, index }) => {
    const { title, image } = item;
    const onPress = () => this.onItemPress(item, index, this.props.toolItems);
    return this.renderItem(title, image, onPress);
  };

  toolItemsList = () => {
    const { toolItems } = this.props;
    return (
      <FlatList
        contentContainerStyle={styles.listContent}
        data={toolItems}
        keyExtractor={(item, index) => `r-${index}`}
        renderItem={this.renderToolItem}
        horizontal
        ItemSeparatorComponent={this.separator}
      />
    );
  };

  cancelButton = () => (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.cancelButton}
      onPress={this.onCancelPress}
    >
      <Text style={styles.cancelText}>取消</Text>
    </TouchableOpacity>
  );

  vSpace = height => <View style={{ height }} />;

  render() {
    const { toolItems } = this.props;
    const showToolItems = toolItems && toolItems.length > 0;
    return (
      <View>
        <View style={styles.topContainer}>
          {this.shareItemsList()}
          {showToolItems && (
            <View>
              <View style={styles.hSeparator} />
              {this.toolItemsList()}
            </View>
          )}
        </View>
        {this.cancelButton()}
      </View>
    );
  }
}

class ListItem extends PureComponent {
  render() {
    const { title, image, onPress } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.item}
        onPress={() => onPress()}
      >
        <Image style={styles.itemImage} source={image} />
        <Text style={styles.itemTitle}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    paddingVertical: 22,
    backgroundColor: '#F5F5F9',
  },
  cancelButton: {
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cancelText: {
    fontSize: 16,
    color: '#333333',
  },
  listContent: {
    paddingHorizontal: 12,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
  },
  itemTitle: {
    marginTop: Themes.v_spacing_md,
    color: Themes.color_text_caption,
    fontSize: Themes.font_size_icontext,
  },
  hSeparator: {
    backgroundColor: Themes.border_color_base,
    height: 1,
    marginVertical: 20,
  },
});
