import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

export default class ItemGrid extends React.Component {
  static propTypes = {
    styleMain: PropTypes.object,
    styleSub: PropTypes.object,
    styleImg: Image.propTypes.style,
    styleText: Text.propTypes.style,
    text: PropTypes.string,
    imgPic: Image.propTypes.source,
    onClick: PropTypes.func,
  };

  render() {
    const {
      styleMain,
      styleSub,
      text,
      styleImg,
      imgPic,
      styleText,
      onClick,
    } = this.props;

    return (
      <TouchableHighlight
        underlayColor="white"
        activeOpacity={0.8}
        onPress={() => {
          onClick && onClick();
        }}
        style={[styles.main, styleMain]}
      >
        <View style={[styles.sub, styleSub]}>
          <Image style={[styles.sub, styleImg]} source={imgPic} />
          <Text style={[styles.text, styleText]}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sub: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  img: {
    width: 30,
    height: 30,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
    margin: 10,
  },
});
