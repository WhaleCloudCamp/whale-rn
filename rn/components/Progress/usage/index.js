import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
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
              marginTop: 10,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button title="减掉" onPress={this.remove} />
            <Button title="增加" onPress={this.add} />
          </View>
        </View>
      </Page>
    );
  }

  add = () => {
    const self = this;
    self.currProgress += 1;
    self.progressBar.progress = self.currProgress / 10;

    self.progressBar1.progress = self.currProgress / 10;
  };

  remove = () => {
    const self = this;
    self.currProgress -= 1;
    self.progressBar.progress = self.currProgress / 10;

    self.progressBar1.progress = self.currProgress / 10;
  };
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
