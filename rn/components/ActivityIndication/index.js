import React from 'react';
import { View, Text, Image, Animated, Easing, StyleSheet } from 'react-native';
import { ModalBasics, ModalView } from '../index';

class ActivityIndication {
  static spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
    }).start(() => this.spin());
  }

  static showLoading(isBox, circleOnly, textSide) {
    this.spinValue = new Animated.Value(0);
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    let loadingView;
    if (isBox) {
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
      if (circleOnly) {
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
        if (textSide === 'right') {
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
    this.spin();
    return ModalBasics.show(loadingView);
  }

  static close() {
    this.modalViewTag.close();
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
export { ActivityIndication };
