import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, Platform } from "react-native";
import PropTypes from 'prop-types';
import Theme from '../../themes';

export default class Badge extends React.Component {
    static propTypes = {
        // size: 'large' | 'small',
        overflowCount: PropTypes.number,
        corner: PropTypes.boolean,// 暂时不实现Corner
        dot: PropTypes.boolean,
        text: PropTypes.any,
    }

    static defaultProps = {
        // size: 'small',
        overflowCount: 99,
        dot: false,
        corner: false,
        text: '100',
        // styles: BadgeStyles
    }

    render() {
        let text = this.props.text,
            overflowCount = this.props.overflowCount,
            dot = this.props.dot,
            children = this.props.children,
            corner = this.props.corner;
        text = typeof text === 'number' && text > overflowCount ? '· · ·' : text;
        // Alert.alert('' + text);
        if (dot) {
            this.props.text = '';
        }
        let view = dot ? (
            <View style={[styles.wrap, this.props.style]}>
                <View >
                    {children}
                    <View style={styles.dot}></View>
                </View>
            </View>
        ) : (
            <View style={[styles.wrap, this.props.style]}>
                <View style={styles.textDom}>
                    {children}
                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>
        );
        return(
            view
        )
    }
}

const grid = 4;
const styles = StyleSheet.create({
    wrap: {
        flexDirection: 'row'
    },
    textCornerWrap: {
        overflow: 'hidden'
    },
    dot: {
        width: 2 * grid,
        height: 2 * grid,
        borderRadius: grid,
        backgroundColor: Theme.brand_important,
        position: 'absolute',
        top: -1 * grid,
        right: -1 * grid
    },
    dotSizelarge: {
        width: 4 * grid,
        height: 4 * grid,
        borderRadius: 2 * grid
    },
    textDom: {
        paddingVertical: 0.5 * grid,
        paddingHorizontal: (Platform.OS === 'ios' ? 1.5 : 2) * grid,
        backgroundColor: Theme.brand_important,
        borderRadius: 4 * Theme.radius_sm,
        borderStyle: 'solid',
        // position: 'absolute',
        // top: -10,
        // right: -15
        
    },
    textCorner: {
        width: 18 * grid,
        backgroundColor: Theme.brand_important,
        transform: [{
            rotate: '45deg'
        }],
        position: 'absolute',
        top: 2 * grid
    },
    textCornerlarge: {
        width: 26 * grid,
        top: 3 * grid
    },
    text: {
        color: Theme.color_text_base_inverse,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});