import React from 'react';
import {
  Image,
  View,
  ViewPropTypes,
  Text,
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
  };

  constructor(props) {
    super(props);
    this.state = {
      close: false,
    };
  }

  closeClick = () => {
    this.setState({
      close: true,
    });
  };

  render() {
    const { close } = this.state;

    const {
      icon = require('./assets/horn.png'),
      title,
      showClose = false,
      onClick,
      style,
      textStyle,
    } = this.props;

    const main = () => (
      <View style={[styles.noticeBar, style]}>
        <Image style={styles.icon} source={icon} />
        <Text
          style={[styles.title, textStyle]}
          numberOfLines={1}
          onPress={onClick}
        >
          {title}
        </Text>
        {showClose && (
          <TouchableWithoutFeedback onPress={this.closeClick}>
            <Image
              style={styles.close}
              source={require('./assets/dark_close.png')}
            />
          </TouchableWithoutFeedback>
        )}
      </View>
    );

    return !close ? <View>{main()}</View> : <View />;
  }
}

const styles = StyleSheet.create({
  noticeBar: {
    height: Themes.notice_bar_height,
    flexDirection: 'row',
    backgroundColor: Themes.notice_bar_fill,
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
    marginLeft: 12,
  },
  title: {
    marginLeft: 12,
    marginRight: 5,
    fontSize: 14,
    color: '#F86E21',
    flex: 1,
  },
  close: {
    tintColor: '#F86E21',
    width: 12,
    height: 12,
    marginRight: 12,
  },
});
