import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Badge from '..';
import Page from '../../Page';

export default class BadgeExample extends React.Component {
  render() {
    return (
      <Page>
        <View style={styles.containView}>
          <Text style={{ fontSize: 21 }}>Default badge</Text>
          <Badge />
        </View>
        <View style={styles.lineView} />
        <View style={styles.containView}>
          <Text style={{ fontSize: 21 }}>Dot badge</Text>
          <Badge dot />
        </View>
        <View style={styles.lineView} />
        <View style={styles.containView}>
          <Text style={{ fontSize: 21 }}>Dot badge corner</Text>
          <Badge dot>
            <View style={{ height: 35, width: 35, backgroundColor: '#ddd' }} />
          </Badge>
        </View>
        <View style={styles.lineView} />
        <View style={styles.containView}>
          <Text style={{ fontSize: 21 }}>Number badge corner</Text>
          <Badge text={42} overflowCount={99}>
            <View style={{ height: 35, width: 35, backgroundColor: '#ddd' }} />
          </Badge>
        </View>
        <View style={styles.lineView} />
        <View style={styles.containView}>
          <Text style={{ fontSize: 21 }}>Word in badge</Text>
          <Badge text="new" />
        </View>
        <View style={styles.lineView} />
        <View style={styles.containView}>
          <Text style={{ fontSize: 21 }}>Number in badge</Text>
          <View style={{ flexDirection: 'row' }}>
            <Badge text={103} overflowCount={99} style={{ marginEnd: 10 }} />
            <Badge text={42} overflowCount={99} />
            <Badge text={0} overflowCount={99} />
          </View>
        </View>
        <View style={styles.lineView} />
      </Page>
    );
  }
}
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  containView: {
    width: 375,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingStart: 20,
    paddingEnd: 20,
  },
  lineView: {
    width: 375,
    height: 1,
    backgroundColor: '#333333',
  },
});
