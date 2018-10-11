import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Progress from '../index';
import Page from '../../Page';

export default class ProgressTest extends React.Component {
  constructor(props) {
    super(props);
    this.currProgress = 0;
  }

  render() {
    return (
      <Page>
        <View style={styles.main}>
          <Progress
            ref={c => {
              this.progressBar = c;
            }}
            style={{
              marginTop: 10,
            }}
          />
          <Progress
            ref={c => {
              this.progressBar1 = c;
            }}
            isShowPercent
            style={{
              marginTop: 20,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}
          >
            <TouchableHighlight
              style={{ flex: 1, height: 40 }}
              underlayColor="white"
              activeOpacity={0.8}
              onPress={this.remove}
            >
              <Text style={styles.button}>减掉 </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ flex: 1, height: 40 }}
              underlayColor="white"
              activeOpacity={0.8}
              onPress={this.add}
            >
              <Text style={styles.button1}>增加 </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Page>
    );
  }

  add = () => {
    const self = this;
    self.currProgress += 1;
    if (self.currProgress <= 10) {
      self.progressBar.progress = self.currProgress / 10;
      self.progressBar1.progress = self.currProgress / 10;
    } else {
      self.currProgress -= 1;
    }
  };

  remove = () => {
    const self = this;
    self.currProgress -= 1;
    if (self.currProgress >= 0) {
      self.progressBar.progress = self.currProgress / 10;
      self.progressBar1.progress = self.currProgress / 10;
    } else {
      self.currProgress = 0;
    }
  };
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: '#0084FF',
    textAlign: 'center',
    flex: 1,
    color: 'white',
    padding: 10,
  },
  button1: {
    backgroundColor: 'gray',
    textAlign: 'center',
    flex: 1,
    color: 'white',
    padding: 10,
  },
});
