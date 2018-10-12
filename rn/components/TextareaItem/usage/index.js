import React from 'react';
import { View } from 'react-native';
import TextAreaItem from '../index';
import Page from '../../Page';

export default class TextAreaDemo extends React.Component {
  render() {
    return (
      <Page style={{ backgroundColor: '#EFEEEC' }}>
        <TextAreaItem
          chooseType="acrossvertical" //accross ||vertical ||acrossvertical
          avTitle="项目名称2"
          avInputTint="请输入项目2"
          styleAVMain={{}}
          styleAVTitleView={{}}
          styleAVTitle={{}}
          styleAVAreaTitle={{}}
          styleAVImg={{}}
          styleAVInput={{}}
          onChangeText={text => {}}
          onChangeArea={area => {}}
        />
        <TextAreaItem
          chooseType="accross" //accross ||vertical ||acrossvertical
          styleAcrossMain={{ marginTop: 10 }}
          styleAcrossTitle={{}}
          styleAcrossInput={{}}
          styleAcrossHint={{}}
          acrossTitle="项目名称"
          acrossMax={100}
          acrossInputTint="请输入项目名称"
          onChangeText={text => {}}
          onChangeArea={area => {}}
        />
        <TextAreaItem
          chooseType="vertical" //accross ||vertical ||acrossvertical
          verticalTitle="项目名称2"
          verticalMax={100}
          verticalInputTint="请输入项目名称1"
          styleVerticalMain={{}}
          styleVerticalTitle={{}}
          styleVerticalInput={{}}
          styleVerticalHint={{}}
          onChangeText={text => {}}
          onChangeArea={area => {}}
        />
      </Page>
    );
  }
}
