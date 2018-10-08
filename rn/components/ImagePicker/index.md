# ImagePicker

图片选择器

## 属性
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| styles | 对各样式进行定制，具体哪些样式可以参考[styles](./styles/index.js) | object | {} |
| files | 已选择图片的数组 | [{url: string}] | [] |
| selectable | 是否可以添加图片 | bool | true |
| onImagePress | 当图片点击时调用 | (index, files) => {} | 无 |
| onChange | 当添加或删除图片时调用 | (newFiles, 'add' or 'remove', index) => {} | 无 |
| onAddImagePress | 点击添加图片按钮时调用，可以用来自定义图片选择器 | () => {} | 无 |
| onFail | 取消选择时调用 | (message) => {} | 无 |
| maximum | 最多选择几张图，包括 files 里已经包含的图片 | number | 9 | 


## usage

```js
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Page from '../../Page';
import ImagePicker from '..';

export default class ImagePickerDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [
        {
          url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
          id: '2121',
        },
        {
          url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
          id: '2122',
        },
      ],
    };
  }

  imagePickerStyles = {
    container: {
      marginTop: 10,
      marginHorizontal: 10,
    },
  };

  handleFileChange = files => {
    this.setState({
      files,
    });
  };

  render() {
    const { files } = this.state;
    return (
      <Page>
        <ImagePicker
          styles={this.imagePickerStyles}
          files={files}
          onChange={this.handleFileChange}
          maximum={6}
        />
      </Page>
    );
  }
}
```