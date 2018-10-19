import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const alias = {
  around: 'space-around',
  between: 'space-between',
  end: 'flex-end',
  start: 'flex-start',
  center: 'center',
};
export default class Button extends React.Component {
  static propTypes = {
    direction: PropTypes.oneOf([
      'row',
      'column',
      'row-reverse',
      'column-reverse',
    ]),
    wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
    alignItems: PropTypes.oneOf([
      'start',
      'end',
      'center',
      'stretch',
      'baseline',
    ]),
    align: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
  };

  static defaultProps = {
    direction: 'row',
    wrap: 'nowrap',
    alignItems: 'center',
    align: 'around',
  };

  render() {
    const { direction, wrap, alignItems, align, children } = this.props;
    const styles = {
      flex: 1,
      flexDirection: direction,
      flexWrap: wrap,
      alignItems: alias[alignItems] || alignItems,
      justifyContent: alias[align] || align,
    };

    return <View style={styles}>{children}</View>;
  }
}
