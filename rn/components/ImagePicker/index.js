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
import ImageRoll from './ImageRoll';

const Styles = StyleSheet.create(ImagePickerStyles);

export default class ImagePicker extends Component {
  static propTypes = {
    styles: PropTypes.object,
    files: PropTypes.arrayOf(PropTypes.object),
    selectable: PropTypes.bool,
    onImagePress: PropTypes.func,
    onChange: PropTypes.func,
    onAddImagePress: PropTypes.func,
    onFail: PropTypes.func,
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
            source={{ uri: item.url }}
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

  showPicker = () => {
    const { onAddImagePress } = this.props;
    if (onAddImagePress) {
      onAddImagePress();
      return;
    }
    this.setState({
      visible: true,
    });
  };

  renderAddButton = () => {
    const { styles } = this.props;
    return (
      <TouchableOpacity
        style={[Styles.size, Styles.plusWrap, styles.size, styles.plusWrap]}
        activeOpacity={0.6}
        onPress={this.showPicker}
      >
        <Text style={[Styles.plusText, styles.plusText]}>+</Text>
      </TouchableOpacity>
    );
  };

  hideImageRoll = () => {
    this.setState({
      visible: false,
    });
    if (this.props.onFail) {
      this.props.onFail('cancel image selection');
    }
  };

  addImage(imageObj) {
    if (!imageObj.url) {
      imageObj.url = imageObj.uri;
      delete imageObj.uri;
    }
    const { files = [] } = this.props;
    const newImages = files.concat(imageObj);
    if (this.props.onChange) {
      this.props.onChange(newImages, 'add');
    }
  }

  renderImagePicker = () => (
    <ImageRoll onCancel={this.hideImageRoll} onSelected={this.addImage} />
  );

  render() {
    const { selectable, styles } = this.props;
    const { visible } = this.state;
    return (
      <View style={[Styles.container, styles.container]}>
        {this.renderFilesView()}
        {selectable && this.renderAddButton()}
        {visible && this.renderImagePicker()}
      </View>
    );
  }
}
