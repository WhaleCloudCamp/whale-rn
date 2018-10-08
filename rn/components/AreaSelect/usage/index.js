import React from 'react';
import { View, Text } from 'react-native';
import AreaSelect from '../index';
import ModalBasics from '../../ModalBasics';
import areaDataSouce from '../CityCode';
import Page from '../../Page';

export default class AreaSelectDemo extends React.Component {
  constructor(props) {
    super(props);
    this.dataSouce = areaDataSouce.CityZoneCode.China;
  }

  render() {
    return (
      <Page>
        <Text onPress={() => this.getView('bottom', false)}> 33333333</Text>
      </Page>
    );
  }

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

          console.warn(area);
        }}
      />
    );
    return ModalBasics.show(modalVIew);
  }
}
