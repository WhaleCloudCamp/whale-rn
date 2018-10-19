import React from 'react';
import { View } from 'react-native';
import ItemGrid from '../index';
import Page from '../../Page';

export default class ItemGridDemo extends React.Component {
  render() {
    return (
      <Page>
        <View style={{ flexDirection: 'row' }}>
          <ItemGrid
            onClick={() => {
              console.warn('点击');
            }}
            imgPic={require('../../../icons/rm.png')}
            text="标题"
          />

          <ItemGrid
            styleMain={{ backgroundColor: 'blue' }}
            imgPic={require('../../../icons/rm.png')}
            text="标题1"
          />

          <ItemGrid
            styleMain={{ backgroundColor: 'gray' }}
            imgPic={require('../../../icons/rm.png')}
            styleText={{ color: 'red' }}
            text="标题1"
          />
        </View>
      </Page>
    );
  }
}
