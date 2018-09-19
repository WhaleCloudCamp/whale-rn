import React from 'react'
import {View} from 'react-native'
import Button from '../index'

export default () => {
    return (
        <View>  
            <Button type='normal' size='big' title='正常按钮'></Button>
            <Button type='loading' size='big' title='加载按钮'></Button>
        </View>
    )
}
