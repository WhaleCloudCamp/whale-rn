import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import imgBackIcon from '../../icons/dark_back.png';
import imgDelIcon from '../../icons/dark_close.png';

export default class Navbar extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    rightText: PropTypes.string,
    onLeftItemPress: PropTypes.func,
    onDelPress: PropTypes.func,
    onRightFirstItemPress: PropTypes.func,
    onRightLastItemPress: PropTypes.func,
    onRightTextPress: PropTypes.func,
    isShowDel: PropTypes.bool,
    isShowFirstRightIcon: PropTypes.bool,
    isShowLastRightIcon: PropTypes.bool,
    isShowRightText: PropTypes.bool,
    isUnderlayColor: PropTypes.string,
  };

  static defaultProps = {
    title: '标题', //当前标题
    rightText: '提交', //右边文本
    isShowDel: false, // //左边删除按钮是否展示
    isShowFirstRightIcon: false, // //右边第一个视图是否展示
    isShowLastRightIcon: false, // //右边第二个视图是否展示
    isShowRightText: false, // //右边文本是否展示
    isUnderlayColor: 'transparent',
  };

  onSelected() {
    if (this.props.onSelected) {
      this.props.onSelected(this.props.title, this.props.rightText);
    }
  }

  render() {
    return (
      <View style={[stytles.main, this.props.style]}>
        <Text style={[stytles.title, this.props.styleTitle]}>
          {this.props.title}
        </Text>

        <View style={stytles.leftView}>
          <TouchableHighlight
            style={stytles.touch}
            activeOpacity={0.5}
            underlayColor="transparent"
            onPress={this.props.onLeftItemPress}
          >
            <Image
              source={this.props.imgBackIcon || imgBackIcon}
              style={[this.stytlesImgBack]}
            />
          </TouchableHighlight>

          {this.props.isShowDel ? (
            <TouchableHighlight
              underlayColor={this.props.isUnderlayColor}
              activeOpacity={0.5}
              style={stytles.touch}
              onPress={this.props.onDelPress}
            >
              <Image source={this.props.imgDelIcon || imgDelIcon} />
            </TouchableHighlight>
          ) : null}
        </View>

        <View style={stytles.rightView}>
          {this.props.isShowFirstRightIcon ? (
            <TouchableHighlight
              style={stytles.touch}
              underlayColor={this.props.isUnderlayColor}
              activeOpacity={0.5}
              onPress={this.props.onRightFirstItemPress}
            >
              <Image source={this.props.imgRightFirstIcon || imgDelIcon} />
            </TouchableHighlight>
          ) : null}

          {this.props.isShowLastRightIcon ? (
            <TouchableHighlight
              style={stytles.touch}
              underlayColor={this.props.isUnderlayColor}
              activeOpacity={0.5}
              onPress={this.props.onRightLastItemPress}
            >
              <Image source={this.props.imgRightLasttIcon || imgDelIcon} />
            </TouchableHighlight>
          ) : null}
          {this.props.isShowRightText ? (
            <TouchableHighlight
              underlayColor={this.props.isUnderlayColor}
              activeOpacity={0.5}
              onPress={this.props.onRightTextPress}
            >
              <Text style={[stytles.rightText, this.props.styleRightText]}>
                {this.props.rightText}
              </Text>
            </TouchableHighlight>
          ) : null}
        </View>
      </View>
    );
  }
}

const stytles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    backgroundColor: '#0C83FF',
  },
  touch: {
    height: '100%',
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#FFFFFF',

    fontSize: 18,
    textAlign: 'center',
    width: '100%',
    position: 'absolute',
  },
  leftView: {
    flexDirection: 'row',
    position: 'absolute',
    height: '100%',
    alignItems: 'center',
  },
  rightView: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    height: '100%',
    alignItems: 'center',
  },
  rightText: {
    color: '#FFFFFF',
    fontSize: 13,
  },
});
