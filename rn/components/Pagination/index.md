# Pagination 分页器

分页指示器，用于指示当前在第几页

## 属性
| 属性 | 说明 | 类型 | 默认值 |
| -- | -- | -- | -- | -- |
| style | 设置样式 | ViewPropTypes.style | 无 |
| current | 当前页号,从0开始 | number | 0 |
| total | 总页数 | number | 无 |
| inActiveColor | 非选中状态颜色 | string | #cccccc |
| activeColor | 选中状态颜色 | string | #0084FF |
| circleSize | 圆点直径 | number | 8 |

## Usage
```js
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Pagination from 'whale-rn';

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
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPreviousPress}
          >
            <Text>上一页</Text>
          </TouchableOpacity>
          <View style={{ paddingHorizontal: 10, backgroundColor: '#0084FF' }}>
            <Pagination
              current={current}
              total={total}
              inActiveColor="rgba(255,255,255,0.5)"
              activeColor="#fff"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={this.onNextPress}>
            <Text>下一页</Text>
          </TouchableOpacity>
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


```