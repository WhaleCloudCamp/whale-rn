import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Pagination from '..';
import Button from '../../Button';

export default class PaginationDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      total: 5,
    };
  }

  onPreviousPress = () => {
    this.setState(prevState => ({
      current: Math.max(prevState.current - 1, 0),
    }));
  };

  onNextPress = () => {
    this.setState(prevState => ({
      current: Math.min(prevState.current + 1, prevState.total - 1),
    }));
  };

  render() {
    const { current, total } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Pagination current={current} total={total} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Button
            style={{ paddingHorizontal: 8 }}
            title="上一页"
            onClick={this.onPreviousPress}
          />
          <View style={{ paddingHorizontal: 10, backgroundColor: '#0084FF' }}>
            <Pagination
              current={current}
              total={total}
              inActiveColor="rgba(255,255,255,0.5)"
              activeColor="#fff"
            />
          </View>
          <Button
            style={{ paddingHorizontal: 8 }}
            title="下一页"
            onClick={this.onNextPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
});
