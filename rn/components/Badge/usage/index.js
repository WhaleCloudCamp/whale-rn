import React, { Component } from 'react';
import { View } from 'react-native';
import Badge from '../index';

export default () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Badge dot style={{ margin: 30 }}>
      <View style={{ height: 35, width: 35, backgroundColor: '#ddd' }} />
    </Badge>

    <Badge text={'new'} style={{ margin: 30 }} />

    <Badge text={103} overflowCount={99} style={{ margin: 30 }} />

    <Badge text={42} overflowCount={99} style={{ margin: 30 }} />
  </View>
);
