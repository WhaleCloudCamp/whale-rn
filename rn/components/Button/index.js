import React from 'react'
import {
	View,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Text,
} from 'react-native'
import Activityindicator from './Activityindicator/index'
import PropTypes from 'prop-types';

export default class Button extends React.Component {

	static PropTypes = {
		type: PropTypes.string.isRequired,
		size: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired	
	};

	constructor(props) {
		super(props);

	}

	render() {

		const { type, size, title } = this.props

		if (type == 'normal') {
			if (size == 'big') {	
				return (
					<TouchableOpacity >
						<View style={styles.normalBig}>
							<Text style={styles.titleBig}>{title}</Text>
						</View>
					</TouchableOpacity>
				)
			}
			else if (size == 'small') {
				return (
					<TouchableOpacity>
						<View style={styles.normalSmall}>
							<Text style={styles.titleSmall}>{title}</Text>
						</View>
					</TouchableOpacity>
				)
			}
		}
		else if (type == 'loading') {
			if (size == 'big') {	
				return (
					<TouchableWithoutFeedback>
						<View style={styles.loadingBig}>
							<Activityindicator image={require('./Activityindicator/assets/style2.png')}/>
							<Text style={styles.titleBig}>{title}</Text>
						</View>
					</TouchableWithoutFeedback>
				)
			}
			else if (size == 'small') {
				return (
					<TouchableWithoutFeedback>
						<View style={styles.loadingSmall}>
							<Activityindicator image={require('./Activityindicator/assets/style2.png')}/>
							<Text style={styles.titleSmall}></Text>
						</View>
					</TouchableWithoutFeedback>
				)
			}
		}
		else if (type == 'disabled') {
			if (size == 'big') {	
				return (
					<View style={styles.disabledBig}>
						<Text style={styles.titleBig}>{title}</Text>
					</View>
				)
			}
			else if (size == 'small') {
				return (
					<View style={styles.disabledSmall}>
						<Text style={styles.titleSmall}>{title}</Text>
					</View>
				)
			}
		}
		else 
			return null
	}
}

const styles = StyleSheet.create({
	titleBig: {
		fontSize: 16,
		color: '#ffffff',
		marginLeft: 2
	},
	titleSmall: {
		fontSize: 13,
		color: '#ffffff',
		marginLeft: 2
	},
	normalBig: {
		height:45,
        paddingTop: 13,
        paddingLeft: 20,
        paddingRight: 20,
        alignSelf: 'center',
        alignItems:'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#0084FF',
        backgroundColor: '#0084FF'
	},
	disabledBig: {
		height:45,
        paddingTop: 13,
        paddingLeft: 20,
        paddingRight: 20,
        alignSelf: 'center',
        alignItems:'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgba(0,132,255,0.5)',
		backgroundColor: 'rgba(0,132,255,0.5)'
	},
	loadingBig: {
		flexDirection: 'row',
		height:45,
        paddingLeft: 20,
        paddingRight: 20,
        alignSelf: 'center',
        alignItems:'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#0084FF',
		backgroundColor: '#0084FF'
	},

	normalSmall: {
		height:30,
        paddingTop: 7,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'center',
        alignItems:'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#0084FF',
        backgroundColor: '#0084FF'
	},
	disabledSmall: {
		height:30,
        paddingTop: 7,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'center',
        alignItems:'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgba(0,132,255,0.5)',
		backgroundColor: 'rgba(0,132,255,0.5)'
	},
	loadingSmall: {
		flexDirection: 'row',
		height:30,
        paddingLeft: 12,
        paddingRight: 12,
        alignSelf: 'center',
        alignItems:'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#0084FF',
		backgroundColor: '#0084FF',
	}
})