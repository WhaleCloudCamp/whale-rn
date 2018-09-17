import React, { Component } from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'
import Navbar from '../index'

export default class NavbarTest extends React.Component {
  render() {
    return (
      <View>
        <Navbar
          title={'cell'} //标题
          style={{ backgroundColor: '#0C83FF' }} //主样式
          styleRightText={{ color: 'white' }} //右文本样式
          styleTitle={{ color: 'white' }} //标题样式
          rightText={'提交'} //右文本
          isShowDel={false} //是否显示左边第二个图标
          isShowRightText={false} //是否显示右边文本
          isShowFirstRightIcon={false} //是否显示右边第一个图标
          isShowLastRightIcon={false} //是否显示右边第二个图标
          // imgBackIcon={require('../img/icon_fh.png')}//左边第一个图标
          // imgDelIcon={require('../img/icon_fh.png')}//左边第二个图标
          // imgRightFirstIcon={require('../img/icon_fh.png')}//右边第一个图标
          // imgRightLasttIcon={require('../img/icon_fh.png')}//右边第二个图标

          onLeftItemPress={
            //返回点击事件
            () => {
              console.warn('返回点击事件')
            }
          }
          onDelPress={
            //删除事件
            () => {
              console.warn('删除事件')
            }
          }
          onRightFirstItemPress={
            //右边第一个图标事件
            () => {
              console.warn('右边第一个图标事件')
            }
          }
          onRightLastItemPress={
            //右边第二个图标事件
            () => {
              console.warn('右边第二个图标事件')
            }
          }
          onRightTextPress={
            //右边文本事件
            () => {
              console.warn('右边文本事件')
            }
          }
        />
      </View>
    )
  }
}
