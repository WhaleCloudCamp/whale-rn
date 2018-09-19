import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

export default class NoticeBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            close: false
        }
    }

    titleClick() {
        alert('标题被点击')
    }

    closeClick() {
        this.setState({ close: true })
    }

  render() {
        const { title, showClose } = this.props;
        const { close } = this.state;

        const main = (
            <View style={styles.noticeBar}>
                <Image
                    style={styles.icon}
                    source={require('./assets/horn.png')}
                />
                <Text style={styles.title} numberOfLines={1} onPress={() => { this.titleClick() }}>{this.props.title}</Text>
                {this.props.showClose &&
                    <TouchableWithoutFeedback onPress={() => { this.closeClick() }}>
                        <Image style={styles.close} source={require('./assets/dark_close.png')} />
                    </TouchableWithoutFeedback>
                }
            </View>
        )

        return !close ? (
            <View>
                {main}
            </View>
        ) : null;
    }
}

const styles = StyleSheet.create({
  noticeBar: {
    height: 36,
    flexDirection: 'row',
    backgroundColor: '#FDFCEC',
    alignItems: 'center',
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
  },
});
