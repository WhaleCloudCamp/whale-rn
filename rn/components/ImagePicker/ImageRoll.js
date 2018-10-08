import React, { Component } from 'react';
import {
  View,
  Modal,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import themes from '../../themes';

const styles = StyleSheet.create({
  statusBarBg: {
    height: 5 * 4,
  },
  naviBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    height: 11 * 4,
  },
  barTitle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '500',
    marginLeft: 7 * 4,
    fontSize: 16,
  },
  rightBtn: {
    width: 14 * 4,
    color: themes.brand_primary,
    fontSize: 16,
  },
});

export default class ImageRoll extends Component {
  static propTypes = {
    onCancel: PropTypes.func,
    onSelected: PropTypes.func,
  };

  render() {
    const { onCancel, onSelected } = this.props;
    return (
      <Modal
        animationType="slide"
        visible
        onRequestClose={() => {}}
        transparent={false}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" />
          <View style={[styles.naviBar]}>
            <Text style={[styles.barTitle]}>Photos</Text>
            <TouchableOpacity onPress={onCancel}>
              <Text style={styles.rightBtn}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}
