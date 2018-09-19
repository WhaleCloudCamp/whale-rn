import React from 'react';
import { View } from 'react-native';
import Tag from '../index';

export default () => (
  <View>
    <Tag selected={false} disabled={false} title="通用标签" />
    <Tag selected disabled={false} title="选中标签" />
    <Tag selected={false} disabled title="禁用标签" />
  </View>
);
