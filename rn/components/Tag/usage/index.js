import React from 'react';
import { View } from 'react-native';
import Tag from '../index';
import Page from '../../Page';

export default class TagDemo extends React.Component {
  render() {
    return (
      <Page
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          marginTop: 10,
          backgroundColor: '#eee',
        }}
      >
        <Tag
          selected={false}
          disabled={false}
          title="通用标签"
          onClick={() => {
            console.warn('点击');
          }}
        />
        <Tag selected disabled={false} title="选中标签" />
        <Tag
          selected
          disabled={false}
          styleSelected={{
            borderColor: '#FF5F2B',
            height: 25,
            paddingTop: 4,
            paddingLeft: 15,
            paddingRight: 15,
            alignSelf: 'center',
            alignItems: 'center',
            borderRadius: 4,
            margin: 5,
            borderWidth: 1,
          }}
          styleNormal={{
            borderColor: '#E0DEDB',
            height: 25,
            paddingTop: 4,
            paddingLeft: 15,
            paddingRight: 15,
            alignSelf: 'center',
            alignItems: 'center',
            borderRadius: 4,
            margin: 5,
            borderWidth: 1,
          }}
          title="选中标签(背景顔色可改)"
        />

        <Tag selected={false} disabled title="禁用标签" />
        <Tag
          selected={false}
          disabled
          styleDisabled={{ backgroundColor: '#FF5F2B' }}
          styleDisabledText={{ color: 'white' }}
          title="禁用标签"
        />
        <Tag
          selected={false}
          disabled
          delected
          onDelected={() => {
            console.warn('wewe');
          }}
          styleDisabled={{
            backgroundColor: '#FFF2F7',
            borderColor: '#FFB6D3',
            margin: 5,
          }}
          styleDisabledText={{ color: '#FF62B3' }}
          title="禁用标签"
        />
        <Tag
          selected={false}
          disabled
          delected
          disabledPic={require('../../../icons/icon-delete.png')}
          onDelected={() => {
            console.warn('wewe');
          }}
          styleDisabled={{
            backgroundColor: '#FFF2F7',
            borderColor: '#FFB6D3',
            margin: 5,
          }}
          styleDisabledText={{ color: '#FF62B3' }}
          title="禁用标签"
        />
      </Page>
    );
  }
}
