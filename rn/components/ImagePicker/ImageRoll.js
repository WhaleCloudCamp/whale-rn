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
import CameraRollPicker from '../CameraRollPicker';

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
  leftButton: {
    width: 14 * 4,
    color: themes.brand_primary,
    fontSize: 16,
    textAlign: 'right',
  },
  barTitle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '500',
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
    onFinished: PropTypes.func,
    maximum: PropTypes.number,
  };

  static defaultProps = {
    maximum: 4,
  };

  selectedImages = [];

  callback = (selectedImages, currentImage) => {
    this.selectedImages = selectedImages;
  };

  onDonePress = () => {
    const { onFinished, onCancel } = this.props;
    onFinished && onFinished(this.selectedImages);
    onCancel && onCancel();
  };

  render() {
    const { onCancel, maximum } = this.props;
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
            <TouchableOpacity onPress={onCancel}>
              <Text style={styles.leftButton}>取消</Text>
            </TouchableOpacity>
            <Text style={[styles.barTitle]}>Photos</Text>
            <TouchableOpacity onPress={this.onDonePress}>
              <Text style={styles.rightBtn}>完成</Text>
            </TouchableOpacity>
          </View>
          <CameraRollPicker
            selected={[]}
            maximum={maximum}
            callback={this.callback}
          />
        </SafeAreaView>
      </Modal>
    );
  }
}
