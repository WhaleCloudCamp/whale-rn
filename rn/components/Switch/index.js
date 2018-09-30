import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import SwitchItem from './SwitchItem';

const SwithThumb = Animated.createAnimatedComponent(SwitchItem);

export default class Switch extends React.Component {
  static defaultProps = {
    checkedColor: '#4CD964',
    unCheckColor: 'transparent',
    disCheckColor: '#B3E9C1',
    disUnCheckColor: '#EFEEEC',
    circleColor: '#FFFFFF',
    disCircleColor: '#F4F3F2',
    check: false,
    disable: false,
  };

  constructor(props) {
    super(props);
    let self = this;
    // 初始状态
    this.state = {
      check: this.props.checkStatu,
      disable: this.props.disableStatu,
    };

    this._animatedThumbLeft = new Animated.Value(this.state.check ? 17 : 0);
    this._animatedThumbLeft.addListener(() => {
      self.container &&
        self.container.setNativeProps({
          style: [
            self.props.style,
            {
              backgroundColor: self._getBgColor(),
            },
          ],
        });
    });
  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <TouchableWithoutFeedback onPress={this._onPress}>
          <View
            ref={ref => {
              this.container = ref;
            }}
            style={[styles.container, { backgroundColor: this._getBgColor() }]}
          >
            <SwithThumb
              style={[
                {
                  width: 14 * 2,
                  height: 14 * 2,
                  left: this._animatedThumbLeft,
                  top: 0,
                  alignItems: 'center',
                  borderRadius: 14,
                  borderColor: '#F5F5F5',
                  borderWidth: 1,
                  backgroundColor: this.disable
                    ? Switch.defaultProps.disCircleColor
                    : Switch.defaultProps.circleColor,
                },
              ]}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  _onPress = () => {
    if (this.state.disable) {
      return;
    }
    this.state.check = !this.state.check;
    this.props.onCheckChangeListener &&
      this.props.onCheckChangeListener(this.state.check);
    this._transplateX();
  };

  _getBgColor() {
    if (this.state.check && !this.state.disable) {
      return Switch.defaultProps.checkedColor;
    } else if (!this.state.check && !this.state.disable) {
      return Switch.defaultProps.unCheckColor;
    } else if (this.state.check && this.state.disable) {
      //未选中状态的禁止
      return Switch.defaultProps.disCheckColor;
    } else if (!this.state.check && this.state.disable) {
      //选中状态的禁止
      return Switch.defaultProps.disUnCheckColor;
    }
    return Switch.defaultProps.disUnCheckColor;
  }

  _getCircleColor() {
    if (this.state.disable) {
      return '#F4F3F2';
    } else {
      return '#FFFFFF';
    }
  }

  _transplateX() {
    Animated.timing(this._animatedThumbLeft, {
      toValue: this.state.check ? 45 - 28 : 0,
      duration: 200,
    }).start(() => {});
  }
}

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 28,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#cccccc',
    justifyContent: 'center',
  },
});
