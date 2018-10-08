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

  render() {
    const { files } = this.state;
    return (
      <Page>
        <ImagePicker styles={this.imagePickerStyles} files={files} />
      </Page>
    );
  }
}
