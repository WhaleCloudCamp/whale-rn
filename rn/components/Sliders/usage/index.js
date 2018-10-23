import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import Sliders from '../index';
import Page from '../../Page';

const screenWidth = Dimensions.get('window').width;
const images = [
  'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
];

export default class SlidesDemo extends React.Component {
  renderTitle(title) {
    return <Text style={{ backgroundColor: 'gray' }}>{title}</Text>;
  }

  renderRow(obj, index) {
    return (
      <View
        style={[
          styles.cell,
          { backgroundColor: index % 2 === 0 ? 'red' : 'yellow' },
        ]}
      >
        <Text>{obj}</Text>
      </View>
    );
  }

  renderImageRow(obj, index) {
    return (
      <Page>
        <View
          style={[styles.cell, { backgroundColor: 'gray', overflow: 'hidden' }]}
        >
          <Image
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: undefined,
              height: undefined,
            }}
            resizeMode="stretch"
            source={{ uri: obj }}
          />
          <Text
            style={{
              backgroundColor: 'transparent',
              color: 'black',
              position: 'absolute',
              bottom: 5,
              right: 5,
            }}
          >
            {''
              .concat(index + 1)
              .concat('/')
              .concat(images.length)}
          </Text>
        </View>
      </Page>
    );
  }

  onPressRow(obj, index) {
    alert(
      'onPressRow=>obj:'
        .concat(obj)
        .concat(' ,index:')
        .concat(index)
    );
  }

  onWillChange(obj, index) {
    // alert('onWillChange=>obj:'+ obj + ' ,index:' + index);
  }

  onDidChange(obj, index) {
    // alert('onDidChange=>obj:'+ obj + ' ,index:' + index);
  }

  render() {
    return (
      <ScrollView
        style={[styles.container]}
        contentInsetAdjustmentBehavior="automatic"
      >
        {this.renderTitle('test')}
        <Sliders
          style={{ backgroundColor: 'white', width: screenWidth, height: 150 }}
          dataSource={images}
          width={screenWidth}
          height={150}
          renderRow={this.renderImageRow}
          onPress={this.onPressRow}
          onWillChange={this.onWillChange}
          onDidChange={this.onDidChange}
          ratio={0.6}
          index={2}
          horizontal
          loop
          autoplayTimeout={5}
        />
        {this.renderTitle('正常模式下')}
        <Sliders
          style={{ backgroundColor: 'white', width: screenWidth, height: 150 }}
          dataSource={images}
          width={screenWidth}
          height={150}
          renderRow={this.renderImageRow}
          onPress={this.onPressRow}
        />
        {this.renderTitle('卡片模式，压缩比：0.867')}
        <Sliders
          style={{ backgroundColor: 'white', width: screenWidth, height: 150 }}
          dataSource={images}
          width={screenWidth}
          height={150}
          renderRow={this.renderImageRow}
          onPress={this.onPressRow}
          ratio={0.867}
        />
        {this.renderTitle(
          '卡片模式，压缩比：0.867,不循环，默认指向第二个，宽度等于屏幕宽-100'
        )}
        <Sliders
          style={{
            backgroundColor: 'white',
            width: screenWidth - 100,
            height: 150,
            marginHorizontal: 50,
          }}
          dataSource={['0', '1', '2', '3', '4']}
          width={screenWidth - 100}
          height={150}
          renderRow={this.renderRow}
          onPress={this.onPressRow}
          ratio={0.867}
          loop={false}
          index={2}
        />
       
        {this.renderTitle('卡片模式，压缩比：0.867,不循环，默认指向第二个，宽度等于屏幕宽-100,竖直方向')}
        <Sliders
          style={{ backgroundColor: 'white', width: screenWidth, height: 200 }}
          dataSource={['0', '1', '2', '3']}
          width={screenWidth}
          height={200}
          renderRow={this.renderRow}
          onPress={this.onPressRow}
          ratio={0.867}
          horizontal={false}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  cell: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
