import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MenuPicker from '../index';
import Page from '../../Page';
import Button from '../../Button';

export default class MenuPickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showValue: '',
      value: ['0', '1'],
    };
  }

  showPopover(view) {
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
            { label: '子菜单3', value: '2' },
            { label: '子菜单4', value: '3' },
            { label: '子菜单5', value: '4' },
            { label: '子菜单6', value: '5' },
            { label: '子菜单7', value: '6' },
            { label: '子菜单8', value: '7' },
            { label: '子菜单9', value: '8' },
            { label: '子菜单10', value: '9' },
            { label: '子菜单11', value: '10' },
            { label: '子菜单12', value: '11' },
            { label: '子菜单13', value: '12' },
            { label: '子菜单14', value: '13' },
            { label: '子菜单15', value: '14' },
            { label: '子菜单16', value: '15' },
          ],
        },
        {
          label: '菜单2',
          value: '1',
          children: [
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
          ],
        },
        {
          label: '菜单3',
          value: '2',
          children: [
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
          ],
        },
        {
          label: '菜单4',
          value: '3',
          children: [
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
          ],
        },
        {
          label: '菜单5',
          value: '4',
          children: [
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
          ],
        },
        {
          label: '菜单6',
          value: '5',
          children: [
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
          ],
        },
        {
          label: '菜单7',
          value: '6',
          children: [
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
          ],
        },
        {
          label: '菜单8',
          value: '7',
          children: [
            { label: '子菜单1', value: '0' },
            { label: '子菜单2', value: '1' },
          ],
        },
        {
          label: '菜单9',
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
        onChange: ({ value, labels }) => {
          let showValue = '';
          if (labels.length > 1) {
            showValue = labels.join('-');
          } else {
            showValue = labels[0];
          }
          this.setState({ value, showValue });
        },
        value: this.state.value,
        height: 200,
        textAlign: 'center',
      });
    });
  }

  render() {
    return (
      <Page>
        <TouchableOpacity
          style={[{ backgroundColor: '#0084FF', borderColor: '#0084FF' }]}
          onPress={() => this.showPopover(this.refs.downstart)}
          ref="downstart"
        >
          <Text>{this.state.showValue || '选择项'}</Text>
        </TouchableOpacity>
      </Page>
    );
  }
}
