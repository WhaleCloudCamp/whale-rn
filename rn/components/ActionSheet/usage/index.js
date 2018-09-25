import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import ActionSheet from '..';

const ShareItems = [
  { title: '钉钉好友', image: require('../assets/icon-ding-ding.png') },
  { title: '新浪微博', image: require('../assets/icon-weibo.png') },
  { title: '生活圈', image: require('../assets/icon-firiend.png') },
  { title: '微信好友', image: require('../assets/icon-wechat.png') },
  { title: 'QQ', image: require('../assets/icon-qq.png') },
];

const ToolItems = [
  { title: '字号', image: require('../assets/icon-font.png') },
  { title: '刷新', image: require('../assets/icon-refresh.png') },
  { title: '复制链接', image: require('../assets/icon-url.png') },
  { title: '投诉', image: require('../assets/icon-complain.png') },
];
export default class ActionSheetDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
  }

  button = (text, onPress) => (
    <TouchableOpacity
      style={{
        borderColor: 'blue',
        borderWidth: 1,
        padding: 8,
        borderRadius: 8,
      }}
      onPress={onPress}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );

  showActionSheet = () => {
    const options = [];
    for (let i = 0; i < 15; i++) {
      options.push(`选项${i + 1}`);
    }
    ActionSheet.showActionSheet({
      title: 'title',
      message: 'message',
      options,
      onOptionSelected: index => {
        this.setState({ selectedItem: options[index] });
      },
      onCancelPress: () => this.setState({ selectedItem: 'canceled' }),
    });
  };

  showShareActionSheet = () => {
    ActionSheet.showShareActionSheet({
      shareItems: ShareItems,
      toolItems: ToolItems,
    });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.button('action sheet', this.showActionSheet)}
        <Text style={{ marginTop: 6 }}>{selectedItem}</Text>
        {this.button('share action sheet', this.showShareActionSheet)}
      </View>
    );
  }
}
