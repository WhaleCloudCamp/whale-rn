import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Page from '../../Page';
import ImagePicker from '..';

export default class ImagePickerDemo extends Component {
  render() {
    return (
      <Page>
        <ImagePicker />
      </Page>
    );
  }
}
