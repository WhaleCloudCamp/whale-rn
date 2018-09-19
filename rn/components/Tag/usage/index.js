import React from 'react';
import Tag from '../index';
import {View} from 'react-native' 

export default () => {
    return(
        <View>
            <Tag selected={false} disabled={false} title='通用标签'></Tag>
            <Tag selected={true} disabled={false} title='选中标签'></Tag>
            <Tag selected={false} disabled={true} title='禁用标签'></Tag>
        </View>
    )
}

