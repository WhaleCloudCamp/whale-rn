import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';
import checkedImage from './img/normal.png';
import normalImage from './img/disabled.png';

export default class Radio extends React.Component {
  static propTypes = {
    onChange: PropTypes.number,
    isChecked: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.isChecked || false,
      disabled: this.props.disabled || false,
    };
  }

  onChange = () => {
    if (this.state.disabled) {
      return;
    }
    const { isChecked } = this.state;
    this.props.onChange(!isChecked);
    this.setState({
      isChecked: !isChecked,
    });
  };

  getChecked() {
    return this.state.isChecked;
  }

  setChecked(isChecked) {
    this.setState({
      isChecked,
    });
  }

  render() {
    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.onChange}>
        <Image
          source={
            this.state.isChecked
              ? this.props.checkedImage || checkedImage
              : this.props.normalImage || normalImage
          }
          style={[this.props.stytles]}
        />
      </TouchableHighlight>
    );
  }
}
