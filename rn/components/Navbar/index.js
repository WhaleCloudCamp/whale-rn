import React from 'react'
import { Image, View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import imgBackIcon from './img/icon_fh.png'
import imgDelIcon from './img/icon_del.png'

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
  }

  static defaultProps = {
    title: '标题', //当前标题
    rightText: '提交', //右边文本
    isShowDel: false, // //左边删除按钮是否展示
    isShowFirstRightIcon: false, // //右边第一个视图是否展示
    isShowLastRightIcon: false, // //右边第二个视图是否展示
    isShowRightText: false, // //右边文本是否展示

    isUnderlayColor: '0C83FF',
  }

  onSelected() {
    if (this.props.onSelected) {
      this.props.onSelected(this.props.title, this.props.rightText)
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
            underlayColor={this.props.isUnderlayColor}
            activeOpacity={0.8}
            onPress={this.props.onLeftItemPress}
          >
            <Image
              source={this.props.imgBackIcon || imgBackIcon}
              style={stytles.imgBack}
            />
          </TouchableHighlight>

          {this.props.isShowDel ? (
            <TouchableHighlight
              underlayColor={this.props.isUnderlayColor}
              activeOpacity={0.8}
              onPress={this.props.onDelPress}
            >
              <Image
                source={this.props.imgDelIcon || imgDelIcon}
                style={stytles.imgBack}
              />
            </TouchableHighlight>
          ) : null}
        </View>

        <View style={stytles.rightView}>
          {this.props.isShowFirstRightIcon ? (
            <TouchableHighlight
              underlayColor={this.props.isUnderlayColor}
              activeOpacity={0.8}
              onPress={this.props.onRightFirstItemPress}
            >
              <Image
                source={this.props.imgRightFirstIcon || imgDelIcon}
                style={stytles.imgBack}
              />
            </TouchableHighlight>
          ) : null}

          {this.props.isShowLastRightIcon ? (
            <TouchableHighlight
              underlayColor={this.props.isUnderlayColor}
              activeOpacity={0.8}
              onPress={this.props.onRightLastItemPress}
            >
              <Image
                source={this.props.imgRightLasttIcon || imgDelIcon}
                style={stytles.imgBack}
              />
            </TouchableHighlight>
          ) : null}
          {this.props.isShowRightText ? (
            <Text
              style={[stytles.rightText, this.props.styleRightText]}
              onPress={this.props.onRightTextPress}
            >
              {this.props.rightText}
            </Text>
          ) : null}
        </View>
      </View>
    )
  }
}

const stytles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    backgroundColor: '#0C83FF',
  },
  imgBack: {
    width: 15,
    height: 20,
    margin: 5,
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
    left: 10,
    alignItems: 'center',
  },
  rightView: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    alignItems: 'center',
  },
  rightText: {
    color: '#FFFFFF',
    fontSize: 13,
  },
})
