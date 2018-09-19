import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'

export default class Tag extends React.Component {

    static propTypes = {
        selected: PropTypes.boolean,
        disabled: PropTypes.boolean,
        title: PropTypes.string.isRequired,
        onClick: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected
        }
    }

    componentWillReceiveProps(nextProps) {
        const { selected } = nextProps;
        if (selected !== this.state.selected) {
            this.setState({
                selected
            })
        }
    }

    tagClick = () => {
        const { selected, onClick} = this.state;
        this.setState({
            selected: !selected
        })
        // let curSelect = this.state.selected
        // onClick(curSelect)
    }

    render() {

        const { disabled, title } = this.props;
        const { selected } = this.state;

        if (disabled) {
            return (
                <View style={styles.disabled}>
                    <Text style={styles.disabledText}>{title}</Text>
                </View>
            )
        }
        else {
            if (selected) {
                return (
                    <TouchableOpacity onPress={this.tagClick}>
                        <View style={styles.selected}>
                            <Text style={styles.selectedText}>{title}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
            else if (!selected) {
                return (
                    <TouchableOpacity onPress={this.tagClick}>
                        <View style={styles.normal}>
                            <Text style={styles.notmalText}>{title}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
            else {
                return null
            }
        }
    }
};

const styles = StyleSheet.create({
    normal: {
        height: 25,
        paddingTop: 4,
        paddingLeft: 15,
        paddingRight: 15,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#888888',
        backgroundColor: '#ffffff'
    },
    notmalText: {
        fontSize: 14,
        color: '#888888'
    },
    selected: {
        height: 25,
        paddingTop: 4,
        paddingLeft: 15,
        paddingRight: 15,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#0084FF',
        backgroundColor: '#ffffff'
    },
    selectedText: {
        fontSize: 14,
        color: '#0084FF'
    },
    disabled: {
        height: 25,
        paddingTop: 4,
        paddingLeft: 15,
        paddingRight: 15,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#DDDDDD'
    },
    disabledText: {
        fontSize: 14,
        color: '#888888'
    }
})
