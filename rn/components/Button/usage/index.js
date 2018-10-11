import React from 'react';
import { View } from 'react-native';
import Button from '../index';
import Page from '../../Page';

export default class ButtonDemo extends React.Component {
  render() {
    return (
      <Page style={{ backgroundColor: '#eee' }}>
        <Button type="normal" size="big" title="主按钮 Normal" />
        <Button type="disabled" size="big" title="主按钮 Disabled" />
        <Button type="loading" size="big" title="主按钮 Loading" />
        <Button type="normal2" size="big" title="次按钮 Normal" />
        <Button type="disabled2" size="big" title="次按钮 Disabled" />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <Button type="normal" size="small" title="按钮" />
          <Button type="disabled" size="small" title="按钮" />
          <Button type="loading" size="small" title="" />
          <Button type="normal2" size="small" title="下载" />
          <Button type="disabled2" size="small" title="下载" />
        </View>
      </Page>
    );
  }
}
