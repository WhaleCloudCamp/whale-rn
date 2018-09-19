import React from 'react'
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Text,
} from 'react-native'
import Activityindicator from './Activityindicator/index'

export default class Button extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {

		const { type, size, title, onClick } = this.props

		if (type == 'normal') {
			if (size == 'big') {	
				return (
					<TouchableWithoutFeedback >
						<View style={styles.normalBig}>
							<Text style={styles.titleBig}>{title}</Text>
						</View>
					</TouchableWithoutFeedback>
				)
			}
			else if (size == 'small') {
				return (
					<TouchableWithoutFeedback>
						<View >
	
						</View>
					</TouchableWithoutFeedback>
				)
			}
		}
		else if (type == 'loading') {
			if (size == 'big') {	
				return (
					<TouchableWithoutFeedback>
						<View style={styles.loadingBig}>
							<Activityindicator/>
							<Text style={styles.titleBig}>{title}</Text>
						</View>
					</TouchableWithoutFeedback>
				)
			}
			else if (size == 'small') {
				return (
					<TouchableWithoutFeedback>
						<View >
	
						</View>
					</TouchableWithoutFeedback>
				)
			}
		}
		else if (type == 'disabled') {
			if (size == 'big') {	
				return (
					<TouchableWithoutFeedback>
						<View >
	
						</View>
					</TouchableWithoutFeedback>
				)
			}
			else if (size == 'small') {
				return (
					<TouchableWithoutFeedback>
						<View >
	
						</View>
					</TouchableWithoutFeedback>
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
		marginLeft: 5
	},
	titleSmall: {

	},

	normalBig: {
		height:45,
        paddingTop: 13,
        paddingLeft: 20,
        paddingRight: 20,
        // alignSelf: 'center',
        alignItems:'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#0084FF',
        backgroundColor: '#0084FF'
	},
	disabledBig: {

	},
	loadingBig: {
		flexDirection: 'row',
		height:45,
        // paddingTop: 8,
        paddingLeft: 20,
        paddingRight: 20,
        // alignSelf: 'center',
        alignItems:'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#0084FF',
		backgroundColor: '#0084FF',
		alignSelf: 'center'
	},

	normalSmall: {

	},
	disabledSmall: {

	},
	loadingSmall: {

	}
})