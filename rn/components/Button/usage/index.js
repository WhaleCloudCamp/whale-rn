import React from 'react';
import { View } from 'react-native';
import Button from '../index';

export default () => (
  <View>
    <Button
      style={{ marginTop: 10 }}
      type="normal"
      size="big"
      title="主按钮 Normal"
      onClick={() => {
        console.log(123);
      }}
    />
    <Button
      style={{ marginTop: 10 }}
      type="disabled"
      size="big"
      title="主按钮 Disabled"
    />
    <Button
      style={{ marginTop: 10 }}
      type="loading"
      size="big"
      title="主按钮 Loading"
    />
    <Button
      style={{ marginTop: 10 }}
      type="normal2"
      size="big"
      title="次按钮 Normal"
    />
    <Button
      style={{ marginTop: 10 }}
      type="disabled2"
      size="big"
      title="次按钮 Disabled"
    />
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
      }}
    >
      <Button
        style={{ marginTop: 10 }}
        type="normal"
        size="small"
        title="按钮"
      />
      <Button
        style={{ marginTop: 10 }}
        type="disabled"
        size="small"
        title="按钮"
      />
      <Button style={{ marginTop: 10 }} type="loading" size="small" title="" />
      <Button
        style={{ marginTop: 10 }}
        type="normal2"
        size="small"
        title="下载"
      />
      <Button
        style={{ marginTop: 10 }}
        type="disabled2"
        size="small"
        title="下载"
      />
    </View>
  </View>
);
