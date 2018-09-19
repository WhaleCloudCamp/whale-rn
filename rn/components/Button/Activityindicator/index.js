import React from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'

export default class Activityindicator extends React.Component {

    render() {
        return(
            <Image style={styles.image} source={require('./assets/style2.png')}></Image>
        )    
    }
}

const styles = StyleSheet.create({
    image: {
        // transform: [{rotateX:'45deg'}.interpolate({inputRange: [0, 360],outputRange: ['0deg', '360deg']})]
    }
})