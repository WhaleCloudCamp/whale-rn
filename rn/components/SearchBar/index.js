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
import { Styles } from '../InputItem/style';

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
    disabled: PropTypes.bool,
  };

  render() {
    const {
      showChoose = true,
      showCancel = true,
      value = '',
      placeholder = '搜索',
      onSubmit,
      onChange,
      onFoucs,
      onCancel,
      disabled,
    } = this.props;

    const chooseArea = () =>
      showChoose ? (
        <TouchableOpacity style={styles.chooseArea}>
          <Text style={styles.chooseText}>选择项</Text>
          <Image
            style={styles.chooseIcon}
            source={require('./assets/Rectangle.png')}
          />
        </TouchableOpacity>
      ) : null;

    const searchArea = () => (
      <View style={styles.searchArea}>
        <Image
          style={styles.searchIcon}
          source={require('./assets/searchbar_search.png')}
        />
        <TextInput
          style={styles.input}
          returnKeyType="search"
          placeholder={placeholder}
          placeholderTextColor="#888888"
          clearButtonMode="while-editing"
        >
          {value}
        </TextInput>
      </View>
    );

    const cancelArea = () =>
      showCancel ? (
        <TouchableOpacity style={styles.cancelArea}>
          <Text style={styles.cancelText}>取消</Text>
        </TouchableOpacity>
      ) : null;

    return (
      <View style={styles.searchBar}>
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
    backgroundColor: '#F1F1F1',
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
