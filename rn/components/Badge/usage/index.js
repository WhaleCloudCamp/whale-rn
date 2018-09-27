import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Badge from '../../Badge';

export default class BadgeExample extends React.Component {

  render() {
    return (
      <ScrollView >
        <View style={styles.containView}>
          <Text style={{ fontSize: 21 }}>Default badge</Text>
          <Badge />
        </View>
        <View style={styles.lineView}></View>
        <View style={styles.containView}>
          <Text style={{ fontSize: 21 }}>Dot badge</Text>
          <Badge dot>
            <View style={{ height: 35, width: 35, backgroundColor: '#ddd' }} />
          </Badge>
        </View>
        <View style={styles.lineView}></View>
        <View style={styles.containView}>
          <Text style={{ fontSize: 21 }}>Word in badge</Text>
          <Badge text="new"/>
        </View>
        <View style={styles.lineView}></View>
        <View style={styles.containView}>
          <Text style={{ fontSize: 21 }}>Number in badge</Text>
          <View style={{ flexDirection: 'row' }}>
            <Badge text={103} overflowCount={99} style={{ marginEnd: 10 }}/>
            <Badge text={42} overflowCount={99}/>
            <Badge text={0} overflowCount={99} />
          </View>
        </View>
        <View style={styles.lineView}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containView: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingStart: 20,
    paddingEnd: 20,
  },
  lineView: {
    flex: 1,
    height: 1,
    backgroundColor: '#333333',
  },
});
