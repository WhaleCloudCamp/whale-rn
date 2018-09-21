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
    data: PropTypes.Array.isRequired,
    value: PropTypes.Array,
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
    this.state = {
      value: props.value || [],
      data: props.data,
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

  onItemPress(item) {
    const { value } = this.state;
    const { onChange } = this.props;
    value[1] = item.value;
    this.close(false);
    onChange && onChange(value);
  }

  onMenuPress(item) {
    const { value } = this.state;
    value[0] = item.value;
    this.setState({
      value,
    });
  }

  buildProps() {
    let {
      popoverStyle,
      level,
      height,
      width,
      children,
      textAlign,
      ...others
    } = this.props;
    const { data, value } = this.state;
    const firstSelectValue = this.getFirstValue(data, value);
    let subData = data;
    let subSelectValue = firstSelectValue;
    let pickerStyle = {
      backgroundColor: Theme.poppItemColor,
      width,
      maxHeight: height,
      flex: 1,
      flexDirection: 'row',
    };
    popoverStyle = [pickerStyle].concat(popoverStyle);
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
                selected={item.value === subSelectValue}
                onPress={() => this.onItemPress(item)}
              />
            ))}
        </ScrollView>
      </View>
    );

    this.props = { popoverStyle, children, ...others };

    super.buildProps();
  }
}
