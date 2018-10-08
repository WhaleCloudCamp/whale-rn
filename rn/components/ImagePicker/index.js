import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import ImagePickerStyles from './styles';

const Styles = StyleSheet.create(ImagePickerStyles);

export default class ImagePicker extends Component {
  static propTypes = {
    styles: PropTypes.object,
    files: PropTypes.arrayOf(PropTypes.object),
    selectable: PropTypes.bool,
    onImagePress: PropTypes.func,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    styles: {},
    files: [],
    selectable: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onImagePress = index => {
    const { files, onImagePress } = this.props;
    onImagePress && onImagePress(index, files);
  };

  removeImage = index => {
    const newImages = [];
    const { files, onChange } = this.props;
    files.forEach((item, idx) => {
      idx !== index && newImages.push(item);
    });
    onChange && onChange(newImages, 'remove', index);
  };

  renderFilesView = () => {
    const { files, styles } = this.props;
    const filesView = files.map((item, index) => (
      <View
        key={`r-${index}`}
        style={[Styles.item, Styles.size, styles.item, styles.size]}
      >
        <TouchableOpacity
          onPress={() => this.onImagePress(index)}
          activeOpacity={0.6}
        >
          <Image
            source={item.url}
            style={[Styles.image, Styles.size, styles.size, styles.image]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.closeWrap, styles.closeWrap]}
          activeOpacity={0.6}
          onPress={() => this.removeImage(index)}
        >
          <Text style={[Styles.closeText, styles.closeText]}>x</Text>
        </TouchableOpacity>
      </View>
    ));
    return filesView;
  };

  renderAddButton = () => {
    const { styles } = this.props;
    return (
      <TouchableOpacity style={[Styles.size, styles.size]} activeOpacity={0.6}>
        <Text>+</Text>
      </TouchableOpacity>
    );
  };

  renderImagePicker = () => (
    <Modal visible>
      <View />
    </Modal>
  );

  render() {
    const { selectable } = this.props;
    const { visible } = this.state;
    return (
      <View style={Styles.container}>
        {this.renderFilesView()}
        {selectable && this.renderAddButton()}
        {visible && this.renderImagePicker()}
      </View>
    );
  }
}
