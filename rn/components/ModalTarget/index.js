import React, { Component } from 'react'
import { StyleSheet, DeviceEventEmitter, View, AppRegistry } from 'react-native'
import Theme from '../../themes'

let keyValue = 0

export default class ModalTarget extends Component {
  static add(modal) {
    let modalKey = ++keyValue
    console.log(modal)

    DeviceEventEmitter.emit('addModals', { modalKey, modal })
    return modalKey
  }
  static remove(modalKey) {
    DeviceEventEmitter.emit('removeModals', { modalKey })
  }
  static removeAll() {
    DeviceEventEmitter.emit('removeAllModals', {})
  }
  constructor(props) {
    super(props)
    this.state = {
      modals: [],
    }
  }

  componentWillMount() {
    DeviceEventEmitter.addListener('addModals', event => this.add(event))
    DeviceEventEmitter.addListener('removeModals', event => this.remove(event))
    DeviceEventEmitter.addListener('removeAllModals', event =>
      this.removeAll(event)
    )
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners('addModals')
    DeviceEventEmitter.removeAllListeners('removeModals')
    DeviceEventEmitter.removeAllListeners('removeAllModals')
  }

  add(event) {
    let { modals } = this.state
    modals.push(event)
    this.setState({ modals })
  }

  remove(event) {
    let { modals } = this.state
    for (let i = modals.length - 1; i >= 0; --i) {
      if (modals[i].modalKey === event.modalKey) {
        modals.splice(i, 1)
        break
      }
    }
    this.setState({ modals })
  }

  removeAll(event) {
    this.setState({ modals: [] })
  }

  render() {
    let { modals } = this.state
    return (
      <View style={{ backgroundColor: Theme.fill_grey, flex: 1 }}>
        {this.props.children}
        {modals.map((item, index) => {
          return (
            <View key={'modals' + item.key} style={styles.globalmodal}>
              {item.modal}
            </View>
          )
        })}
      </View>
    )
  }
}
//测试先放了一个设置 真实情况应该是rgba0000
var styles = StyleSheet.create({
  globalmodal: {
    backgroundColor: '#rgba(255,0,0,0.7)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})

if (!AppRegistry.registerComponentOld) {
  AppRegistry.registerComponentOld = AppRegistry.registerComponent
}
// by rilyu https://github.com/rilyu/teaset/blob/master/components/Overlay/TopView.js
AppRegistry.registerComponent = function(appKey, componentProvider) {
  class RootElement extends Component {
    render() {
      let Component = componentProvider()
      return (
        <ModalTarget>
          <Component {...this.props} />
        </ModalTarget>
      )
    }
  }

  return AppRegistry.registerComponentOld(appKey, () => RootElement)
}
