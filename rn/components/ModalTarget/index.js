import React, { Component } from 'react';
import { StyleSheet, View, AppRegistry } from 'react-native';
import Theme from '../../themes';
import DeviceEventEmitter from './EventEmitter';
import Page from '../Page';

let keyValue = 0;

export default class ModalTarget extends Component {
  static add(modal) {
    const modalKey = ++keyValue;
    DeviceEventEmitter.emit('addModals', { modalKey, modal });
    return modalKey;
  }

  static remove(modalKey) {
    DeviceEventEmitter.emit('removeModals', { modalKey });
  }

  static removeAll() {
    DeviceEventEmitter.emit('removeAllModals', {});
  }

  constructor(props) {
    super(props);
    this.state = {
      modals: [],
    };
  }

  componentWillMount() {
    console.log(DeviceEventEmitter.addListener);

    DeviceEventEmitter.addListener('addModals', event => this.add(event));
    DeviceEventEmitter.addListener('removeModals', event => this.remove(event));
    DeviceEventEmitter.addListener('removeAllModals', event =>
      this.removeAll(event)
    );
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners('addModals');
    DeviceEventEmitter.removeAllListeners('removeModals');
    DeviceEventEmitter.removeAllListeners('removeAllModals');
  }

  add(event) {
    const { modals } = this.state;
    modals.push(event);
    this.setState({ modals });
  }

  remove(event) {
    const { modals } = this.state;
    for (let i = modals.length - 1; i >= 0; --i) {
      if (modals[i].modalKey === event.modalKey) {
        modals.splice(i, 1);
        break;
      }
    }
    this.setState({ modals });
  }

  removeAll() {
    this.setState({ modals: [] });
  }

  render() {
    const { modals } = this.state;
    return (
      <Page style={{ backgroundColor: Theme.fill_base, flex: 1 }}>
        {this.props.children}
        {modals.map(item => (
          <View key={`modals${item.key}`} style={styles.globalmodal}>
            {item.modal}
          </View>
        ))}
      </Page>
    );
  }
}
//测试先放了一个设置 真实情况应该是rgba0000
let styles = StyleSheet.create({
  globalmodal: {
    backgroundColor: '#rgba(0,0,0,0)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

if (!AppRegistry.registerComponentOld) {
  AppRegistry.registerComponentOld = AppRegistry.registerComponent;
}
// by rilyu https://github.com/rilyu/teaset/blob/master/components/Overlay/TopView.js
AppRegistry.registerComponent = (appKey, componentProvider) => {
  class RootElement extends Component {
    render() {
      const ComponentPro = componentProvider();
      return (
        <ModalTarget>
          <ComponentPro {...this.props} />
        </ModalTarget>
      );
    }
  }

  return AppRegistry.registerComponentOld(appKey, () => RootElement);
};
