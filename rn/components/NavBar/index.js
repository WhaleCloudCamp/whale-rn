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

export default class NavBar extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    rightText: PropTypes.string,
    onLeftItemPress: PropTypes.func,
    onDelPress: PropTypes.func,
    onRightFirstItemPress: PropTypes.func,
    onRightLastItemPress: PropTypes.func,
    onRightTextPress: PropTypes.func,
    isShowBk: PropTypes.bool,
    isShowDel: PropTypes.bool,
    isShowFirstRightIcon: PropTypes.bool,
    isShowLastRightIcon: PropTypes.bool,
    isShowRightText: PropTypes.bool,
    isUnderlayColor: PropTypes.string,
  };

  static defaultProps = {
    title: '标题', //当前标题
    rightText: '提交', //右边文本
    isShowBk: false, // //返回键按钮是否展示
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
          {this.props.isShowBk ? (
            <TouchableHighlight
              style={stytles.touch}
              activeOpacity={0.5}
              underlayColor="transparent"
              onPress={() => this.props.onLeftItemPress(this)}
            >
              <Image
                source={this.props.imgBackIcon || imgBackIcon}
                style={[stytles.imgLeftIcom, this.props.imgLeftIcom]}
              />
            </TouchableHighlight>
          ) : null}

          {this.props.isShowDel ? (
            <TouchableHighlight
              underlayColor={this.props.isUnderlayColor}
              activeOpacity={0.5}
              style={stytles.touch}
              onPress={() => this.props.onDelPress(this)}
            >
              <Image
                source={this.props.imgDelIcon || imgDelIcon}
                style={[stytles.imgRightIcom, this.props.imgRightIcom]}
              />
            </TouchableHighlight>
          ) : null}
        </View>

        <View style={stytles.rightView}>
          {this.props.isShowFirstRightIcon ? (
            <TouchableHighlight
              style={stytles.touch}
              underlayColor={this.props.isUnderlayColor}
              activeOpacity={0.5}
              onPress={() => this.props.onRightFirstItemPress(this)}
              ref="firstRightIcon"
            >
              <Image
                source={this.props.imgRightFirstIcon || imgDelIcon}
                style={[stytles.imgRightIcom, this.props.imgRightIcom]}
              />
            </TouchableHighlight>
          ) : null}

          {this.props.isShowLastRightIcon ? (
            <TouchableHighlight
              style={stytles.touch}
              underlayColor={this.props.isUnderlayColor}
              activeOpacity={0.5}
              onPress={() => this.props.onRightLastItemPress(this)}
              ref="lastRightIcon"
            >
              <Image
                source={this.props.imgRightLasttIcon || imgDelIcon}
                style={[stytles.imgRightIcom, this.props.imgRightIcom]}
              />
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
  imgLeftIcom: {
    width: 15,
    height: 25,
  },
  imgRightIcom: {
    width: 20,
    height: 20,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    backgroundColor: '#0C83FF',
  },
  touch: {
    height: '100%',
    marginLeft: 10,
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
