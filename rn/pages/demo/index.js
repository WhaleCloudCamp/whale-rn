import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class Demo extends Component {

    static navigationOptions = {
        title: 'Whale-RN'
    }

    state = {
        dataSource: [
            { title: 'ActionSheet', routeName: 'ActionSheet' },
            { title: 'ActivityIndication', routeName: 'ActivityIndication' },
            { title: 'AreaSelect', routeName: 'AreaSelect' },
            { title: 'Badge', routeName: 'Badge' },
            { title: 'Button', routeName: 'Button' },
            { title: 'CheckBox', routeName: 'CheckBox' },
            { title: 'Input', routeName: 'Input' },
            { title: 'InputItem', routeName: 'InputItem' },
            { title: 'List', routeName: 'List' },
            { title: 'Label', routeName: 'Label' },
            { title: 'MenuPicker', routeName: 'MenuPicker' },
            { title: 'Modal', routeName: 'Modal' },
            { title: 'NavBar', routeName: 'NavBar' },
            { title: 'NoticeBar', routeName: 'NoticeBar' },
            { title: 'Pagination', routeName: 'Pagination' },
            { title: 'Popover', routeName: 'Popover' },
            { title: 'Progress', routeName: 'Progress' },
            { title: 'Radio', routeName: 'Radio' },
            { title: 'SearchBar', routeName: 'SearchBar' },
            { title: 'Slider', routeName: 'Slider' },
            { title: 'Stepper', routeName: 'Stepper' },
            { title: 'Switch', routeName: 'Switch' },
            { title: 'TabBar', routeName: 'TabBar' },
            { title: 'Tabs', routeName: 'Tabs' },
            { title: 'Tag', routeName: 'Tag' },
            { title: 'TextareaItem', routeName: 'TextareaItem' },
            { title: 'Toast', routeName: 'Toast' },
            { title: 'ImagePicker', routeName: 'ImagePicker' },
            {title:'ItemGrid',routeName:'ItemGrid'}
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