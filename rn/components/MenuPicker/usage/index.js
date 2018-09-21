import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MenuPicker from '../index';

export default class MenuPickerExample extends Component {
  showPopover(view, direction, align, showArrow) {
    view.measure((x, y, width, height, pageX, pageY) => {
      let fromBounds = { x: pageX, y: pageY, width, height };
      // Array<{label: ReactNode, value, disabled?, children<data>?}>
      const data = [
        {
          label: '菜单1',
          value: '0',
          children: [
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
          ],
        },
        {
          label: '菜单1',
          value: '1',
          children: [
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
          ],
        },
        {
          label: '菜单1',
          value: '2',
          children: [
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
          ],
        },
        {
          label: '菜单1',
          value: '3',
          children: [
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
          ],
        },
        {
          label: '菜单1',
          value: '4',
          children: [
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
          ],
        },
        {
          label: '菜单1',
          value: '5',
          children: [
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
          ],
        },
        {
          label: '菜单1',
          value: '6',
          children: [
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
          ],
        },
        {
          label: '菜单1',
          value: '7',
          children: [
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
          ],
        },
        {
          label: '菜单2',
          value: '8',
          children: [
            { label: '2子菜单1', value: '0' },
            { label: '2子菜单2', value: '1' },
          ],
        },
      ];
      return MenuPicker.show({
        fromBounds,
        data,
        level: 2,
        onChange: e => {
          console.log(e);
        },
        value: ['0', '1'],
        height: 200,
        textAlign: 'center',
      });
    });
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          ref="downstart"
          onPress={() =>
            this.showPopover(this.refs.downstart, 'down', 'start', true)
          }
        >
          <Text>菜单弹出</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
