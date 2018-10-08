import React from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { ModalBasics, ModalView } from '..';

class Toast {
  static toastSucess(time, text, side) {
    this.text = '成功';
    this.time = 2000;
    this.success = require('../../icons/toast_right.png');

    if (typeof time === 'number') {
      this.time = time;
    } else if (time === 'long') {
      this.time = 3500;
    } else if (time === 'short') {
      this.time = 2000;
    } else if (time === 'none') {
      this.time = 0;
    } else {
      this.time = 0;
    }
    if (typeof text === 'string' && text !== '') {
      this.text = text;
    }

    let mStyle;
    switch (side) {
      case 'top':
        mStyle = styles.modalviewTop;
        break;
      case 'bottom':
        mStyle = styles.modalviewBottom;
        break;
      default:
        mStyle = styles.modalview;
        break;
    }

    const modalView = (
      <ModalView
        style={mStyle}
        modalOpacity={0}
        modal
        ref={v => (this.modalViewTag = v)}
      >
        <View style={styles.viewAround}>
          <Image source={this.success} />
          <Text style={styles.textWithPic}>{this.text}</Text>
        </View>
      </ModalView>
    );
    if (this.time !== 0) {
      setTimeout(() => this.modalViewTag.close(), this.time);
    }
    return ModalBasics.show(modalView);
  }

  static toastFail(time, text, side) {
    this.text = '失败';
    this.time = 2000;
    this.fail = require('../../icons/toast_error.png');

    if (typeof time === 'number') {
      this.time = time;
    } else if (time === 'long') {
      this.time = 3500;
    } else if (time === 'short') {
      this.time = 2000;
    } else if (time === 'none') {
      this.time = 0;
    } else {
      this.time = 0;
    }
    if (typeof text === 'string' && text !== '') {
      this.text = text;
    }

    let mStyle;
    switch (side) {
      case 'top':
        mStyle = styles.modalviewTop;
        break;
      case 'bottom':
        mStyle = styles.modalviewBottom;
        break;
      default:
        mStyle = styles.modalview;
        break;
    }

    const modalView = (
      <ModalView
        style={mStyle}
        modalOpacity={0}
        modal
        ref={v => (this.modalViewTag = v)}
      >
        <View style={styles.viewAround}>
          <Image source={this.fail} />
          <Text style={styles.textWithPic}>{this.text}</Text>
        </View>
      </ModalView>
    );
    if (this.time !== 0) {
      setTimeout(() => this.modalViewTag.close(), this.time);
    }
    return ModalBasics.show(modalView);
  }

  static toastWarn(time, text, side) {
    this.text = '警告';
    this.time = 2000;
    this.warn = require('../../icons/toast_warning.png');

    if (typeof time === 'number') {
      this.time = time;
    } else if (time === 'long') {
      this.time = 3500;
    } else if (time === 'short') {
      this.time = 2000;
    } else if (time === 'none') {
      this.time = 0;
    } else {
      this.time = 0;
    }
    if (typeof text === 'string' && text !== '') {
      this.text = text;
    }

    let mStyle;
    switch (side) {
      case 'top':
        mStyle = styles.modalviewTop;
        break;
      case 'bottom':
        mStyle = styles.modalviewBottom;
        break;
      default:
        mStyle = styles.modalview;
        break;
    }

    const modalView = (
      <ModalView
        style={mStyle}
        modalOpacity={0}
        modal
        ref={v => (this.modalViewTag = v)}
      >
        <View style={styles.viewAround}>
          <Image source={this.warn} />
          <Text style={styles.textWithPic}>{this.text}</Text>
        </View>
      </ModalView>
    );
    if (this.time !== 0) {
      setTimeout(() => this.modalViewTag.close(), this.time);
    }
    return ModalBasics.show(modalView);
  }

  static toastText(time, text, side) {
    this.text = '提示';
    this.time = 2000;

    if (typeof time === 'number') {
      this.time = time;
    } else if (time === 'long') {
      this.time = 3500;
    } else if (time === 'short') {
      this.time = 2000;
    } else if (time === 'none') {
      this.time = 0;
    } else {
      this.time = 0;
    }
    if (typeof text === 'string' && text !== '') {
      this.text = text;
    }

    let mStyle;
    switch (side) {
      case 'top':
        mStyle = styles.modalviewTop;
        break;
      case 'bottom':
        mStyle = styles.modalviewBottom;
        break;
      default:
        mStyle = styles.modalview;
        break;
    }

    const modalView = (
      <ModalView
        style={mStyle}
        modalOpacity={0}
        modal
        ref={v => (this.modalViewTag = v)}
      >
        <Text style={styles.textwithoutPic}>{this.text}</Text>
      </ModalView>
    );
    if (this.time !== 0) {
      setTimeout(() => this.modalViewTag.close(), this.time);
    }
    return ModalBasics.show(modalView);
  }

  static close() {
    if (this.time === 0) {
      this.modalViewTag.close();
    }
  }
}

const styles = StyleSheet.create({
  modalview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalviewTop: {
    alignItems: 'center',
    paddingTop: 20,
  },
  modalviewBottom: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  viewAround: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 90,
    minWidth: 90,
    maxWidth: 243,
    paddingEnd: 12,
    paddingStart: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 5,
    elevation: 4,
  },
  textWithPic: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1.0)',
    fontSize: 14,
    marginTop: 10,
  },
  textwithoutPic: {
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'rgba(255, 255, 255, 1.0)',
    maxWidth: 243,
    paddingEnd: 12,
    paddingStart: 12,
    paddingTop: 8,
    paddingBottom: 8,
    elevation: 4,
  },
});
export { Toast };
