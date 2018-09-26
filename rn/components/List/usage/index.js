import React, { Component } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';

import List from '../index';

export default class ListExample extends Component {
  render() {
    return (
      <List header="123" lines="inset">
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
        <Text>5</Text>
        <Text>6</Text>
        <Text>7</Text>
      </List>
    );
  }
}
