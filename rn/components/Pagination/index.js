import React, { Component } from 'react';
import {
    View,
    ViewPropTypes,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Themes from '../../themes';

export default class Pagination extends Component {

    static propTypes = {
        style: ViewPropTypes.style,
        current: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        inActiveColor: PropTypes.string,
        activeColor: PropTypes.string,
        circleSize: PropTypes.number
    }

    static defaultProps = {
        inActiveColor: Themes.pagination_inActive_color,
        activeColor: Themes.pagination_active_olor,
        circleSize: 8
    }

    render() {
        const { style, current, total, inActiveColor, activeColor, circleSize } = this.props;
        const images = [];
        for (let i = 0; i < total; i++) {
            const selected = current === i;
            images.push(<Circle inActiveColor={inActiveColor} activeColor={activeColor} circleSize={circleSize} selected={selected} />)
        }
        return (
            <View style={[styles.container, style]}>
                <View style={styles.innerContainer}>{images}</View>
            </View>
        )
    }
}

class Circle extends Component {
    render() {
        let { circleSize, activeColor, inActiveColor, selected } = this.props;
        const circleStyle = {
            margin: 4,
            width: circleSize,
            height: circleSize,
            borderRadius: circleSize / 2
        };
        const full = {
            backgroundColor: activeColor
        };
        const empty = {
            backgroundColor: inActiveColor
        }
        const extraStyle = selected ? full : empty;
        return <View style={[circleStyle, extraStyle]} />;
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerContainer: {
        flexDirection: 'row'
    }
})