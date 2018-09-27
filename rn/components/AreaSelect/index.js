import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ModalDrawer from '../ModalDrawerView';
import Picker from './Picker';

export default class AreaSelect extends ModalDrawer {
  static propTypes = {
    ...ModalDrawer.propTypes,
  };

  static defaultProps = {
    ...ModalDrawer.defaultProps,
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.rowIndex0 = 0;
    this.rowIndex1 = 0;
    this.rowIndex2 = 0;
  }

  renderChildren() {
    return (
      <View style={{ height: 300 }}>
        <View style={styles.topView}>
          <Text style={styles.textCancel} onPress={this.props.onCancel}>
            取消
          </Text>
          <Text
            style={styles.textSure}
            onPress={() =>
              this.props.onSure(this.rowIndex0, this.rowIndex1, this.rowIndex2)
            }
          >
            确定
          </Text>
        </View>

        <View style={styles.botttomView}>
          <View style={{ flex: 0.9 }}>
            <Picker
              data={this.props.data.Province}
              ref={v => (this.selectProvince = v)}
              name="name"
              onRowChange={index => {
                this.rowIndex0 = index;
                this.rowIndex1 = 0;
                this.rowIndex2 = 0;
                this.selectCity.setDataSource(
                  this.props.data.Province[this.rowIndex0].City
                );
                this.selectArea.setDataSource(
                  this.props.data.Province[this.rowIndex0].City[0].Area
                );
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Picker
              data={this.props.data.Province[0].City}
              ref={v => (this.selectCity = v)}
              name="name"
              onRowChange={index => {
                this.rowIndex1 = index;
                this.rowIndex2 = 0;
                this.selectArea.setDataSource(
                  this.props.data.Province[this.rowIndex0].City[this.rowIndex1]
                    .Area
                );
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Picker
              data={this.props.data.Province[0].City[0].Area}
              ref={v => (this.selectArea = v)}
              name="name"
              onRowChange={index => (this.rowIndex2 = index)}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  textCancel: {
    flex: 1,
    margin: 10,
    textAlign: 'left',
    color: 'black',
  },
  textSure: {
    flex: 1,
    margin: 10,
    color: 'black',
    textAlign: 'right',
  },
  botttomView: {
    height: 200,
    flexDirection: 'row',
  },
});
