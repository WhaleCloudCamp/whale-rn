import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import AreaAcrossItem from './AreaAcrossItem';
import AreaVertical from './AreaVerticalItem';
import AreaAVItem from './AreaAVItem';

export default class TextAreaItem extends React.Component {
  static propTypes = {
    chooseType: PropTypes.string,
    acrossMax: PropTypes.number,
    acrossTitle: PropTypes.string,
    verticalTitle: PropTypes.string,
    verticalMax: PropTypes.number,

    avTitle: PropTypes.string,
    avMax: PropTypes.number,
  };

  static defaultProps = {
    acrossMax: 500,
    verticalMax: 500,
    acrossTitle: '标题',
    verticalTitle: '标题',
    avTitle: '标题',
    avMax: 500,
    chooseType: 'accross',
  };

  render() {
    return <View>{this.getView(this.props.chooseType)}</View>;
  }

  getView(chooseType) {
    switch (chooseType) {
      case 'accross':
        return (
          <AreaAcrossItem
            styleAcrossMain={this.props.styleAcrossMain}
            styleAcrossTitle={this.props.styleAcrossTitle}
            styleAcrossInput={this.props.styleAcrossInput}
            styleAcrossHint={this.props.styleAcrossHint}
            acrossTitle={this.props.acrossTitle}
            acrossMax={this.props.acrossMax}
            acrossInputTint={this.props.acrossInputTint}
            onAcrossChange={text => {
              this.props.onChangeText(text);
            }}
          />
        );
      case 'vertical':
        return (
          <AreaVertical
            styleVerticalMain={this.props.styleVerticalMain}
            styleVerticalTitle={this.props.styleVerticalTitle}
            styleVerticalInput={this.props.styleVerticalInput}
            styleVerticalHint={this.props.styleVerticalHint}
            verticalTitle={this.props.verticalTitle}
            verticalMax={this.props.verticalMax}
            verticalInputTint={this.props.verticalInputTint}
            onVerticalChange={text => {
              this.props.onChangeText(text);
            }}
          />
        );

      case 'acrossvertical':
        return (
          <AreaAVItem
            styleAVMain={this.props.styleAVMain}
            styleAVTitleView={this.props.styleAVTitleView}
            styleAVTitle={this.props.styleAVTitle}
            styleAVAreaTitle={this.props.styleAVAreaTitle}
            styleAVImg={this.props.styleAVImg}
            styleAVInput={this.props.styleAVInput}
            avTitle={this.props.avTitle}
            avMax={this.props.avMax}
            avInputTint={this.props.avInputTint}
            onAVChange={text => {
              this.props.onChangeText(text);
            }}
            onChangeArea={area => {
              this.props.onChangeArea(area);
            }}
          />
        );
      default:
        return null;
    }
  }
}
