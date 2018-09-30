import React, { Component } from 'react';
import { View, ViewPropTypes } from 'react-native';
import Theme from '../../themes';

export default class Page extends Component {
  static propTypes = {
    ...ViewPropTypes,
  };

  static defaultProps = {
    ...View.defaultProps,
  };

  buildProps() {
    let { style, ...others } = this.props;
    style = [
      {
        flex: 1,
        height: '100%',
        backgroundColor: Theme.fill_base
      },
    ].concat(style);
    return { style, ...others };
  }

  render() {
    let { children, ...newProps } = this.buildProps();
    return <View {...newProps}>{children}</View>;
  }
}
