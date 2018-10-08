import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import MenuPicker from '../MenuPicker';

export default class SearchBar extends React.Component {
  static propTypes = {
    showChoose: PropTypes.bool,
    showCancel: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    onFoucs: PropTypes.func,
    onCancel: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      showValue: '',
      value: ['0', '1'],
    };
  }

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
            { label: '子菜单3', value: '2' },
            { label: '子菜单4', value: '3' },
            { label: '子菜单5', value: '4' },
            { label: '子菜单6', value: '5' },
            { label: '子菜单7', value: '6' },
            { label: '子菜单8', value: '7' },
            { label: '子菜单9', value: '8' },
            { label: '子菜单10', value: '9' },
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
    const {
      showChoose = false,
      showCancel = false,
      value = '',
      placeholder = '搜索',
      onSubmit,
      onChange,
      onFoucs,
      onCancel,
    } = this.props;

    const chooseArea = () =>
      showChoose ? (
        <TouchableOpacity
          style={styles.chooseArea}
          ref="downstart"
          onPress={() =>
            this.showPopover(this.refs.downstart, 'down', 'start', true)
          }
        >
          <Text style={styles.chooseText}>
            {this.state.showValue || '选择项'}
          </Text>
          <Image
            style={styles.chooseIcon}
            source={require('../../icons/SearchBar_Down.png')}
          />
        </TouchableOpacity>
      ) : null;

    const searchArea = () => (
      <View style={styles.searchArea}>
        <Image
          style={styles.searchIcon}
          source={require('../../icons/SearchBar_Search.png')}
        />
        <TextInput
          style={styles.input}
          returnKeyType="search"
          placeholder={placeholder}
          placeholderTextColor="#888888"
          clearButtonMode="while-editing"
          onChange={onChange}
          onSubmitEditing={onSubmit}
          onFoucs={onFoucs}
        >
          {value}
        </TextInput>
      </View>
    );

    const cancelArea = () =>
      showCancel ? (
        <TouchableOpacity style={styles.cancelArea} onPress={onCancel}>
          <Text style={styles.cancelText}>取消</Text>
        </TouchableOpacity>
      ) : null;

    return (
      <View style={[styles.searchBar]}>
        {chooseArea()}
        {searchArea()}
        {cancelArea()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    height: 44,
  },
  chooseArea: {
    flex: 2,
    flexDirection: 'row',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chooseText: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 14,
    color: '#0084FF',
  },
  chooseIcon: {
    width: 10,
    height: 6,
  },
  searchArea: {
    flex: 5,
    flexDirection: 'row',
    height: 28,
    marginTop: 8,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 14,
  },
  searchIcon: {
    width: 15,
    height: 15,
    marginLeft: 15,
    marginTop: 7,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    marginTop: 4,
    marginRight: 15,
    marginBottom: 4,
    fontSize: 14,
  },
  cancelArea: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    fontSize: 14,
    color: '#0084FF',
  },
});
