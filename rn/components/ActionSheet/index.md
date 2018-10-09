# ActionSheet

从底部弹出的模态框，提供和当前场景相关的 2 个以上的操作动作，也支持提供标题和描述。

## API
### showActionSheet(params)
`params` 包含以下一个或多个参数：
| 属性             | 说明               | 类型          | 默认值 |
| ---------------- | ------------------ | ------------- | ------ |
| title            | 标题               | string        | 无     |
| message          | 描述               | string        | 无     |
| options          | 选择列表(required) | [string]      | 无     |
| onOptionSelected | 选择回调           | (index) => {} | 无     |
| onCancelPress    | 取消回调           | () => {}      | 无     |

### showShareActionSheet(params)
`params` 包含以下一个或多个参数：
| 属性          | 说明           | 类型                       | 默认值 |
| ------------- | -------------- | -------------------------- | ------ |
| shareItems    | 第一行分享列表 | [{title, image}]           | 无     |
| toolItems     | 第二行操作列表 | [{title, image}]           | 无     |
| onCancelPress | 取消回调       | () => {}                   | 无     |
| callback      | 选择回调       | (item, index, items) => {} | 无     |

## usage
```js
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import ActionSheet from '..';
import Button from '../../Button';

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
      selectedShareItem: null
    };
  }

  button = (text, onPress) => (
    <Button
      style={{ width: '80%' }}
      title={text}
      onClick={onPress}
    />
  );

  showActionSheet = () => {
    const options = [];
    for (let i = 0; i < 6; i++) {
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
      callback: (item) => this.setState({ selectedShareItem: item }),
    });
  };

  render() {
    const { selectedItem, selectedShareItem } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.button('Action Sheet', this.showActionSheet)}
        <Text style={{ marginTop: 6 }}>{selectedItem}</Text>
        <View style={{ height: 10 }} />
        {this.button('Share', this.showShareActionSheet)}
        <View style={{ height: 10 }} />
        {selectedShareItem && <Text style={{ marginTop: 6 }}>{selectedShareItem.title}</Text>}
      </View>
    );
  }
}
```