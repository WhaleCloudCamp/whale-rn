import React from 'react';
import { View } from 'react-native';
import TextAreaItem from '../index';

export default class TextAreaDemo extends React.Component {
  render() {
    return (
      <View>
        <TextAreaItem
          chooseType="acrossvertical" //accross ||vertical ||acrossvertical
          //  styleAcrossMain={{}}
          //  styleAcrossTitle={{}}
          //  styleAcrossInput={{}}
          //  styleAcrossHint={{}}
          //  acrossTitle ='项目名称'
          //  acrossMax ={10}
          //  acrossInputTint ='请输入项目名称'

          //  verticalTitle ='项目名称1'
          //  verticalMax ={13}
          //  verticalInputTint ='请输入项目名称1'
          //  styleVerticalMain={{}}
          //  styleVerticalTitle={{}}
          //  styleVerticalInput={{}}
          //  styleVerticalHint={{}}

          avTitle="项目名称2"
          avMax={19}
          avInputTint="请输入项目2"
          styleAVMain={{}}
          styleAVTitleView={{}}
          styleAVTitle={{}}
          styleAVAreaTitle={{}}
          styleAVImg={{}}
          styleAVInput={{}}
          onChangeText={text => {
            console.warn('当前文本：'.concat(text));
          }}
          onChangeArea={area => {
            console.warn('当前区域：'.concat(area));
          }}
        />
        <TextAreaItem
          chooseType="accross" //accross ||vertical ||acrossvertical
          styleAcrossMain={{ marginTop: 10 }}
          styleAcrossTitle={{}}
          styleAcrossInput={{}}
          styleAcrossHint={{}}
          acrossTitle="项目名称"
          acrossMax={10}
          acrossInputTint="请输入项目名称"
          onChangeText={text => {
            console.warn('当前文本：'.concat(text));
          }}
          onChangeArea={area => {
            console.warn('当前区域：'.concat(area));
          }}
        />
        <TextAreaItem
          chooseType="vertical" //accross ||vertical ||acrossvertical
          verticalTitle="项目名称2"
          verticalMax={13}
          verticalInputTint="请输入项目名称1"
          styleVerticalMain={{}}
          styleVerticalTitle={{}}
          styleVerticalInput={{}}
          styleVerticalHint={{}}
          onChangeText={text => {
            console.warn('当前文本：'.concat(text));
          }}
          onChangeArea={area => {
            console.warn('当前区域：'.concat(area));
          }}
        />
      </View>
    );
  }
}
