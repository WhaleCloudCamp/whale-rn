import React from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { ModalBasics, ModalView } from '../index';

class Toast {

    static makeToast(modal, time, pictrue, text) {
        // 参数错误或者不传参数时的默认状态
        this.path = require('./style/toast_right.png');
        this.text = '提示';
        this.time = 2000;

        if (typeof time === 'number') {
            this.time = time;
        } else {
            if (time === 'long') {
                this.time = 3500;
            } else if (time === 'short') {
                this.time = 2000;
            } else if (time === 'none') {
                this.time = 0;
            }
        }
        if (pictrue === 'success') {
            this.path = require('./style/toast_right.png');
        } else if (pictrue === 'failed') {
            this.path = require('./style/toast_error.png');
        } else if (pictrue === 'warn') {
            this.path = require('./style/toast_warning.png');
        } else if (pictrue === 'none') {
            this.path = '';
        }
        if (typeof text === 'string' && text !== '') {
            this.text = text;
        }

        const modalView = this.path !== '' ? (
            <ModalView
                style={styles.modalview}
                modal={modal}
                ref={v => (this.modalViewTag = v)}
            >
                <View style={styles.viewAround}>
                    <Image source={this.path}/>
                    <Text style={styles.textWithPic}>{this.text}</Text>
                </View>
            </ModalView>
        ) : (
            <ModalView
                style={styles.modalview}
                modal={modal}
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
        this.modalViewTag.close();
    }

}

const styles = StyleSheet.create({
    modalview: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewAround: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        width: 90,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 5,
        elevation: 4
    },
    textWithPic: {
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 1.0)',
        fontSize: 14,
        marginTop: 10
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
        elevation: 4
    }
});
export { Toast };