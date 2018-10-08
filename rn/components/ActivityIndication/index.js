import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ModalView from '../ModalView';

export default class ActivityIndication extends React.Component {
  static propTypes = {
    animating: PropTypes.bool,
    toast: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'small']),
    text: PropTypes.string,
    color: PropTypes.string,
    side: PropTypes.oneOf(['row', 'column']),
  };

  static defaultProps = {
    animating: true,
    color: 'gray',
    size: 'small',
    toast: false,
    side: 'row',
  };

  renderToast() {
    return (
      <ModalView
        style={styles.centerView}
        modal
        ref={v => (this.modalViewTag = v)}
      >
        <View style={[styles.container]}>
          <View style={[styles.innerContainer, { height: 89 }]}>
            <View style={[styles.wrapper]}>
              <ActivityIndicator color="white" size="large" />
              {this.props.text && (
                <Text style={[styles.toast]}>{this.props.text}</Text>
              )}
            </View>
          </View>
        </View>
      </ModalView>
    );
  }

  renderSpinner() {
    const { color, size, text, side } = this.props;
    const { spinner, spinnerRow, tip } = styles;
    return (
      <View style={side === 'row' ? spinnerRow : spinner}>
        <ActivityIndicator color={color} size={size} />
        {text && <Text style={[tip]}>{text}</Text>}
      </View>
    );
  }

  render() {
    if (this.props.animating) {
      return this.props.toast ? this.renderToast() : this.renderSpinner();
    }
    return null;
  }
}

const styles = StyleSheet.create({
  centerView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
    zIndex: 1999,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 89,
    height: 89,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, .8)',
  },
  tip: {
    color: '#000000',
    fontSize: 14,
    marginLeft: 8,
  },
  toast: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 6,
  },
  spinnerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
