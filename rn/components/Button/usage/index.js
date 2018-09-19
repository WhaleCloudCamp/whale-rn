import React from 'react';
import { View } from 'react-native';
import Button from '../index';

export default () => (
  <View>
    <Button type="normal" size="big" title="正常按钮" />
    <Button type="loading" size="big" title="加载按钮" />
    <Button type="disabled" size="big" title="禁用按钮" />
    <Button type="normal" size="small" title="按钮" />
    <Button type="loading" size="small" title="" />
    <Button type="disabled" size="small" title="按钮" />
  </View>
);
