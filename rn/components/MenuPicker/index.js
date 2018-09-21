import React, { Component } from 'react';
import { View } from 'react-native';

import ModalBasics from '../ModalBasics';
import MenuPickerView from './MenuPickerView';

export default class MenuPicker extends ModalBasics {
  static MenuPickerView = MenuPickerView;
  //   data	数据(isLeaf 设置后 children 无效)	Array<{label: ReactNode, value, disabled?, children<data>?}>	[]
  //   level	菜单级数，可选1/2	number	2
  //   value	初始值，一级和二级筛选数据的value组成的数组。    Array
  //   onChange	选择后的回调函数	(item: Object): void
  //   height	筛选组件的高度	number	document.documentElement.clientHeight / 2

  static show({
    fromBounds,
    data,
    level,
    onChange,
    value,
    height,
    width,
    style,
    textAlign,
  }) {
    return super.show(
      <this.MenuPickerView
        fromBounds={fromBounds}
        data={data}
        level={level}
        onChange={onChange}
        value={value}
        height={height}
        width={width}
        popoverStyle={style}
        textAlign={textAlign}
      />
    );
  }
}
