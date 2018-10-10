import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import AreaSelect from '../index';
import ModalBasics from '../../ModalBasics';
import areaDataSouce from '../CityCode';
import Page from '../../Page';
import imgBack from '../../../icons/icon_right.png';

export default class AreaSelectDemo extends React.Component {
  constructor(props) {
    super(props);
    this.isCalled = false;
    this.dataSouce = areaDataSouce.CityZoneCode.China;
    this.state = {
      address: '请选择地址',
    };
  }

  render() {
    return (
      <Page>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ color: 'black', margin: 10 }}>地区选择：</Text>

          <TouchableHighlight
            underlayColor="white"
            activeOpacity={0.5}
            style={{ flex: 1, justifyContent: 'center' }}
            onPress={() =>
              this.HandlerOnceTap(() => this.getView('bottom', false))
            }
          >
            <Text
              style={{ color: 'gray', marginRight: 10, alignSelf: 'flex-end' }}
            >
              {this.state.address}
            </Text>
          </TouchableHighlight>

          <Image style={{ margin: 10 }} source={imgBack} />
        </View>
      </Page>
    );
  }

  HandlerOnceTap = (functionTobeCalled, interval = 3000) => {
    if (!this.isCalled) {
      this.isCalled = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.isCalled = false;
      }, interval);
      return functionTobeCalled();
    }
    return null;
  };

  getView(side, modal, modalOpacity = 0.7) {
    const modalVIew = (
      <AreaSelect
        containerStyle={{ height: 230 }}
        side={side}
        modal={modal}
        modalOpacity={modalOpacity}
        ref={v => (this.modalDrawerView = v)}
        data={areaDataSouce.CityZoneCode.China}
        onCancel={() => {
          this.modalDrawerView && this.modalDrawerView.close();
        }}
        onSure={(x1, x2, x3) => {
          let area = this.dataSouce.Province[x1].name
            .concat('-')
            .concat(this.dataSouce.Province[x1].City[x2].name)
            .concat('-')
            .concat(this.dataSouce.Province[x1].City[x2].Area[x3].name);

          this.setState({
            address: area,
          });
          console.warn(area);
          this.modalDrawerView && this.modalDrawerView.close();
        }}
      />
    );
    return ModalBasics.show(modalVIew);
  }
}
