import React, { Component } from 'react'
import { View, StyleSheet, Animated, Easing, Text } from 'react-native'
import PropTypes from 'prop-types'
export default class Progress extends React.Component {
  static propTypes = {
    ...View.propTypes,
    //当前进度
    progress: PropTypes.number,

    //进度条颜色
    progressColor: PropTypes.string,

    //进度动画时长
    progressAniDuration: PropTypes.number,
  }
  static defaultProps = {
    //进度条颜色
    progressColor: '#0084FF',

    //进度条动画时长
    progressAniDuration: 300,
  }
  // 构造
  constructor(props) {
    super(props)
    this._progressAni = new Animated.Value(0)

    this.state = {
      progressNum: 0,
    }
  }

  componentWillReceiveProps(nextProps) {
    this._progress = nextProps.progress
  }

  componentWillMount() {
    this._progress = this.props.progress
  }

  render() {
    return (
      <View style={[styles.main, this.props.style]}>
        <View style={styles.container} onLayout={this._onLayout.bind(this)}>
          <Animated.View
            ref="progress"
            style={{
              position: 'absolute',
              width: this._progressAni,
              backgroundColor: this.props.progressColor,
            }}
          />
        </View>

        <Text style={styles.precent}>{this.state.progressNum}%</Text>
      </View>
    )
  }

  _onLayout({
    nativeEvent: {
      layout: { width, height },
    },
  }) {
    //防止多次调用,当第一次获取后,后面就不再去获取了
    if (width > 0 && this.totalWidth !== width) {
      //获取progress控件引用
      let progress = this._getProgress()

      //获取父布局宽度
      this.totalWidth = width
      //给progress控件设置高度
      progress.setNativeProps({
        style: {
          height: height,
        },
      })

      //开始执行进度条动画
      this._startAniProgress(this.progress)
    }
  }

  _startAniProgress(progress) {
    if (this._progress >= 0 && this.totalWidth != 0) {
      if (progress > 1 || process < 0) {
        return
      }
      this.setState({
        progressNum: progress * 100,
      })
      Animated.timing(this._progressAni, {
        toValue: progress * this.totalWidth,
        duration: this.props.progressAniDuration,
        easing: Easing.linear,
      }).start()
    }
  }

  _getProgress() {
    if (typeof this.refs.progress.refs.node !== 'undefined') {
      return this.refs.progress.refs.node
    }
    return this.refs.progress._component
  }
}
Object.defineProperty(Progress.prototype, 'progress', {
  set(value) {
    if (value >= 0 && this._progress != value) {
      this._progress = value
      this._startAniProgress(value)
    }
  },
  get() {
    return this._progress
  },
  enumerable: true,
})

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 2,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
  },
  precent: {
    color: '#0C83FF',
    width: 20,
    fontSize: 10,
    marginRight: 10,
  },
})
