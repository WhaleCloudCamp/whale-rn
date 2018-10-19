import React from 'react';
import {
  Image,
  View,
  ViewPropTypes,
  Text,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Themes from '../../themes';

export default class NoticeBar extends React.Component {
  static propTypes = {
    icon: Image.propTypes.source,
    title: PropTypes.string.isRequired,
    showClose: PropTypes.bool,
    onClick: PropTypes.func,
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
    disScrolled: PropTypes.bool,
    time: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      close: false,
      translateX: new Animated.Value(0),
    };
  }

  static defaultProps = {
    disScrolled: true,
    time: 5000,
  };

  layout = e => {
    if (this.props.disScrolled) {
      this.showHeadBar(0, 1, e.layout.width);
    }
  };

  showHeadBar(index, count, textWidth) {
    index++;

    Animated.timing(this.state.translateX, {
      toValue: -textWidth,
      duration: this.props.time, //动画时间
      Easing: Easing.linear,
      delay: 1500, //文字停留时间
    }).start(() => {
      //每一个动画结束后的回调
      if (index >= count) {
        index = 0;
        this.state.translateX.setValue(0);
      }
      this.showHeadBar(index, count, textWidth); //循环动画
    });
  }

  closeClick = () => {
    this.setState({
      close: true,
    });
  };

  render() {
    const { close } = this.state;

    const {
      icon = require('../../icons/NoticeBar_Horn.png'),
      closePic = require('../../icons/NoticeBar_Dark_close.png'),
      title,
      showClose = false,
      onClick,
      style,
      styleBar,
      textStyle,
      styleLeftImgView,
      disScrolled,
    } = this.props;

    const main = () => (
      <View style={[styles.noticeBar, style]}>
        <Animated.View
          style={[
            styles.wrapper,
            {
              transform: [
                {
                  translateX: this.state.translateX,
                },
              ],
            },
          ]}
        >
          <View style={[styles.bar, styleBar]}>
            <Text
              style={[styles.title, textStyle]}
              onPress={onClick}
              numberOfLines={1}
              onLayout={({ nativeEvent: e }) => {
                this.layout(e);
              }}
            >
              {title}
            </Text>
          </View>
        </Animated.View>

        {showClose && (
          <TouchableWithoutFeedback onPress={this.closeClick}>
            <Image style={styles.close} source={closePic} />
          </TouchableWithoutFeedback>
        )}

        <View style={[styles.leftImgView, styleLeftImgView]}>
          <Image style={styles.icon} source={icon} />
        </View>
      </View>
    );

    return !close ? <View>{main()}</View> : null;
  }
}

const styles = StyleSheet.create({
  noticeBar: {
    height: Themes.notice_bar_height,
    flexDirection: 'row',
    backgroundColor: Themes.notice_bar_fill,
    alignItems: 'center',
  },
  bar: {
    height: Themes.notice_bar_height,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Themes.notice_bar_fill,
  },
  wrapper: {
    flex: 1,
    marginLeft: 40,
  },
  leftImgView: {
    position: 'absolute',
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Themes.notice_bar_fill,
    height: '100%',
    width: 40,
  },
  icon: {
    width: 16,
    height: 16,
    marginLeft: 12,
  },
  title: {
    position: 'absolute',
    left: 0,

    marginRight: 5,
    fontSize: 14,
    color: '#F86E21',
    flexWrap: 'nowrap',
  },
  close: {
    tintColor: '#F86E21',
    width: 12,
    height: 12,
    marginRight: 12,
  },
});
