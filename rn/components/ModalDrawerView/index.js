import React from 'react'
import PropTypes from 'prop-types'
import { View, ViewPropTypes } from 'react-native'

import ModalView from '../ModalView'

export default class OverlayPullView extends ModalView {
  static propTypes = {
    ...ModalView.propTypes,
    side: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    containerStyle: ViewPropTypes.style,
    marginValue: PropTypes.number,
  }

  static defaultProps = {
    ...ModalView.defaultProps,
    side: 'bottom',
    marginValue: 300,
  }

  constructor(props) {
    super(props)
    this.viewLayout = { x: 0, y: 0, width: 0, height: 0 }
    this.state = {
      marginValue: this.marginSize,
    }
  }

  get marginSize() {
    const { side } = this.props
    if (side === 'left' || side === 'right') return -this.viewLayout.width
    else return -this.viewLayout.height
  }

  buildProps() {
    super.buildProps()
    let { style, containerStyle } = this.props
    const { side, ...others } = this.props
    let sideStyle
    let contentStyle
    switch (side) {
      case 'top':
        sideStyle = {
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        }
        contentStyle = { marginTop: this.state.marginValue }
        break
      case 'left':
        sideStyle = {
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        }
        contentStyle = { marginLeft: this.state.marginValue }
        break
      case 'right':
        sideStyle = {
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'stretch',
        }
        contentStyle = { marginRight: this.state.marginValue }
        break
      default:
        sideStyle = {
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'stretch',
        }
        contentStyle = { marginBottom: this.state.marginValue }
    }
    style = [].concat(style).concat(sideStyle)
    containerStyle = [
      {
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
    ]
      .concat(containerStyle)
      .concat(contentStyle)

    this.props = { ...others, side, style, containerStyle }
  }

  renderChildren() {
    return this.props.children
  }

  renderContent() {
    const { containerStyle } = this.props
    return <View style={containerStyle}>{this.renderChildren()}</View>
  }
}
