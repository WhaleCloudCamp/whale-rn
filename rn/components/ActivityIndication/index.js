import React from 'react';
import { View, Text, Animated, Easing, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ModalView } from '../index';

export default class ActivityIndication extends React.Component {

  static propTypes = {
    box: PropTypes.bool,
    notext: PropTypes.bool,
    textside: PropTypes.string,
  }

  static defaultProps = {
    box: false,
    notext: false,
    textside: '',
  }

  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
    }).start(() => this.spin());
  }

  render() {
    
    const { box, notext, textside } = this.props;
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    let loadingView;
    if (box) {
      loadingView = (
        <ModalView
          style={styles.centerView}
          modal={true}
          ref={v => (this.modalViewTag = v)}
        >
          <View style={styles.viewAround}>
            <Animated.Image
              style={{
                transform: [{ rotate: spin }],
                marginTop: 10,
              }}
              source={require('./style/loading_2.png')}
            />
            <Text style={styles.textView14}>正在加载</Text>
          </View>
        </ModalView>
      );
    } else {
      if (notext) {
        loadingView = (
          <ModalView
            style={styles.centerView}
            modal={true}
            ref={v => (this.modalViewTag = v)}
          >
            <Animated.Image
              style={{
                transform: [{ rotate: spin }],
              }}
              source={require('./style/style1.png')}
            />
          </ModalView>
        );
      } else {
        if (textside === 'right') {
          loadingView = (
            <ModalView
              style={styles.centerViewRow}
              modal={true}
              ref={v => (this.modalViewTag = v)}
            >
              <Animated.Image
                style={{
                  transform: [{ rotate: spin }],
                }}
                source={require('./style/style1.png')}
              />
              <Text style={styles.textView10}>加载中…</Text>
            </ModalView>
          );
        } else {
          loadingView = (
            <ModalView
              style={styles.centerView}
              modal={true}
              ref={v => (this.modalViewTag = v)}
            >
              <Animated.Image
                style={{
                  transform: [{ rotate: spin }],
                }}
                source={require('./style/loading_2.png')}
              />
              <Text style={styles.textView12}>加载中</Text>
            </ModalView>
          );
        }
      }
    }
    
    return(
      loadingView
    );
  }

}

const styles = StyleSheet.create({
  centerView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerViewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewAround: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: 90,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 5,
    elevation: 4,
  },
  textView10: {
    textAlign: 'center',
    color: '#888888',
    fontSize: 10,
    margin: 10,
  },
  textView12: {
    textAlign: 'center',
    color: '#888888',
    fontSize: 12,
    margin: 10,
  },
  textView14: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 14,
    margin: 10,
  },
});
