import React from 'react'
import {
    Image,
    View,
    Text,
    TouchableWithoutFeedback,
    Dimensions,
    StyleSheet,
} from 'react-native'

const window = Dimensions.get('window');

export default class NoticeBar extends React.Component {

    closeClick (){
        alert('点击了关闭')
    }

    titleClick (){
        alert('点击了标题')
    }

    render() {

        const { title, showClose} = this.props;

        const main = (
            <View style={styles.noticeBar}>
                <Image
                    style={styles.icon}
                    source={require('./assetc/horn.png')}
                />
                <Text style={styles.title} numberOfLines={1} onPress={() => {this.titleClick()}}>{this.props.title}</Text>
                {this.props.showClose && 
                    <TouchableWithoutFeedback onPress={()=>{this.closeClick()}}>
                        <Image style={styles.close} source={require('./assetc/dark_close.png')}/>
                    </TouchableWithoutFeedback>
                }
            </View>
        )

        return (
            <View>
                {main}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    noticeBar: {
        height: 36,
        flexDirection: 'row',
        backgroundColor: '#FDFCEC',
        alignItems: 'center'
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
        width: 16,
        height: 16,
        marginRight: 12,
    }
})