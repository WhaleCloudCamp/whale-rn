import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    NativeModules,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class Demo extends Component {

    static navigationOptions = {
        title: 'Whale-RN'
    }

    state = {
        dataSource: [
            { title: 'Button', routeName: 'button' },
            { title: 'NavBar', routeName: 'navbar' },
            { title: 'Progress', routeName: 'progress' },
            { title: 'Tag', routeName:'tag'}
            { title: 'Pagination', routeName: 'pagination' }
        ]
    }

    onCellPress = (item) => {
        const { navigation: { navigate } } = this.props;
        const { title, routeName } = item;
        navigate(routeName, { title });
    }

    renderItem = ({ item, index }) => {
        const { title } = item;
        return (
            <TouchableOpacity style={{ paddingHorizontal: 15, paddingVertical: 10 }} onPress={() => this.onCellPress(item)}>
                <Text>{title}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => 'r-' + index}
                />
            </View>
        )
    }
}