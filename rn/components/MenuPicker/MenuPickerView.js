import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';

import Theme from '../../themes';
import Modal from '../Modal';
import MenuPickerItem from './MenuPickerItem';

export default class PopoverPickerView extends Modal.PopoverView {
  // show(fromBounds, data, level,onChange, value,height
  static propTypes = {
    ...Modal.PopoverView.propTypes,
    data: PropTypes.array.isRequired,
    value: PropTypes.array,
    level: PropTypes.number,
    height: PropTypes.number,
    width: PropTypes.number,
    onChange: PropTypes.func,
    textAlign: PropTypes.string,
  };

  static defaultProps = {
    ...Modal.PopoverView.defaultProps,
    direction: 'down',
    align: 'center',
    showArrow: false,
    level: 1,
    height: 500,
    width: 375,
    textAlign: 'left',
    value: [],
  };

  static Item = MenuPickerItem;

  constructor(props) {
    super(props);
    const { value = [], data } = props;
    const labels = [];
    Object.values(data).map(item => {
      if (item.value === value[0]) {
        labels[0] = item.label;
      }
      return item;
    });
    this.state = {
      value,
      labels,
      data,
    };
  }

  getFirstValue(data, value) {
    let firstValue = '';
    if (value && value.length) {
      firstValue = value[0];
    } else if (data && data.length) {
      firstValue = data[0].value;
    }
    return firstValue;
  }

  onItemPress(item, level) {
    const { value, labels } = this.state;
    const { onChange } = this.props;
    if (level === 1) {
      value.length = 1;
      value[0] = item.value;
      labels[0] = item.label;
    } else {
      value[1] = item.value;
      labels[1] = item.label;
    }
    this.close(false);
    onChange && onChange({ value, labels });
  }

  onMenuPress(item) {
    const { value, labels } = this.state;
    value[0] = item.value;
    value[1] = '-111asd';
    labels[0] = item.label;
    this.setState({
      value,
      labels,
    });
  }

  buildProps() {
    let {
      popoverStyle,
      level,
      height = 500,
      width,
      children,
      textAlign,
      ...others
    } = this.props;
    const { data, value } = this.state;
    const firstSelectValue = this.getFirstValue(data, value);
    let subData = data;
    let thisSubValue = '';
    let subSelectValue = firstSelectValue;
    let pickerStyle = {
      backgroundColor: Theme.poppItemColor,
      width,
      maxHeight: height,
      flex: 1,
      flexDirection: 'row',
    };
    popoverStyle = [pickerStyle].concat(popoverStyle).concat({ left: 0 });

    if (level === 2) {
      let parent = data;
      if (firstSelectValue && firstSelectValue !== '') {
        parent = data.filter(dataItem => dataItem.value === firstSelectValue);
      }
      // tslint:disable-next-line:prefer-conditional-expression
      if (parent[0] && parent[0].children) {
        subData = parent[0].children;
      } else {
        subData = [];
      }
      thisSubValue = parent[0].value;
      if (value && value.length > 1) {
        subSelectValue = value[1];
      }
    }

    children = (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}
      >
        {level === 2 && (
          <ScrollView>
            {data &&
              data.map((item, index) => (
                <this.constructor.Item
                  key={`item${index}`}
                  title={item.label}
                  selected={item.value === firstSelectValue}
                  onPress={() => this.onMenuPress(item)}
                />
              ))}
          </ScrollView>
        )}
        <ScrollView>
          {subData &&
            subData.map((item, index) => (
              <this.constructor.Item
                key={`item${index}`}
                title={item.label}
                isSub
                textAlign={textAlign}
                selected={
                  item.value === subSelectValue &&
                  (!thisSubValue || thisSubValue === firstSelectValue)
                }
                onPress={() => this.onItemPress(item, level)}
              />
            ))}
        </ScrollView>
      </View>
    );

    this.props = { popoverStyle, children, ...others };

    super.buildProps();
  }
}
