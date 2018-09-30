import React from 'react';
import { View } from 'react-native';
import NavBar from '../index';

export default class NavBarTest extends React.Component {
  render() {
    return (
      <View>
        <NavBar
          title="标题" //标题
          style={{ backgroundColor: '#0C83FF' }} //主样式
          styleRightText={{ color: 'white' }} //右文本样式
          styleTitle={{ color: 'white' }} //标题样式
          isShowDel //是否显示左边第二个图标
          isShowFirstRightIcon //是否显示右边第一个图标
          isShowLastRightIcon //是否显示右边第二个图标
          // imgBackIcon={require('../img/icon_fh.png')}//左边第一个图标
          // imgDelIcon={require('../img/icon_fh.png')}//左边第二个图标
          // imgRightFirstIcon={require('../img/icon_fh.png')}//右边第一个图标
          // imgRightLasttIcon={require('../img/icon_fh.png')}//右边第二个图标

          onLeftItemPress={
            //返回点击事件
            () => {
              console.warn('返回点击事件');
            }
          }
          onDelPress={
            //删除事件
            () => {
              console.warn('删除事件');
            }
          }
          onRightFirstItemPress={
            //右边第一个图标事件
            () => {
              console.warn('右边第一个图标事件');
            }
          }
          onRightLastItemPress={
            //右边第二个图标事件
            () => {
              console.warn('右边第二个图标事件');
            }
          }
        />

        <NavBar
          title="标题" //标题
          style={{ backgroundColor: '#1E90FF', marginTop: 10 }} //主样式
          styleTitle={{ color: 'white' }} //标题样式
          isShowFirstRightIcon //是否显示右边第一个图标
          onLeftItemPress={
            //返回点击事件
            () => {
              console.warn('返回点击事件');
            }
          }
          onRightFirstItemPress={
            //右边第一个图标事件
            () => {
              console.warn('右边第一个图标事件');
            }
          }
        />

        <NavBar
          title="标题" //标题
          style={{ backgroundColor: 'white', marginTop: 10 }} //主样式
          styleTitle={{ color: 'black' }} //标题样式
          isShowFirstRightIcon //是否显示右边第一个图标
          isShowLastRightIcon //是否显示右边第二个图标
          imgBackIcon={require('../../../icons/arrow-back.png')}
          imgRightFirstIcon={require('../../../icons/create.png')} //右边第一个图标
          imgRightLasttIcon={require('../../../icons/create.png')} //右边第二个图标
          onLeftItemPress={
            //返回点击事件
            () => {
              console.warn('返回点击事件');
            }
          }
          onRightFirstItemPress={
            //右边第一个图标事件
            () => {
              console.warn('右边第一个图标事件');
            }
          }
          onRightLastItemPress={
            //右边第二个图标事件
            () => {
              console.warn('右边第二个图标事件');
            }
          }
        />
        <NavBar
          title="标题" //标题
          style={{ backgroundColor: 'white', marginTop: 10 }} //主样式
          styleRightText={{ color: 'black' }} //右文本样式
          styleTitle={{ color: 'black' }} //标题样式
          rightText="文本" //右文本
          isShowRightText //是否显示右边文本
          imgBackIcon={require('../../../icons/arrow-back.png')}
          onLeftItemPress={
            //返回点击事件
            () => {
              console.warn('返回点击事件');
            }
          }
          onRightTextPress={
            //右边文本事件
            () => {
              console.warn('右边文本事件');
            }
          }
        />
      </View>
    );
  }
}
