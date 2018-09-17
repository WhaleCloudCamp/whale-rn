import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Touchable from './Touchable'
import Theme from '../../themes'

const Button = ({ text, children, style, textStyle, ...rest }) => (
  <Touchable style={[styles.button, style]} {...rest}>
    <Text style={[styles.text, textStyle]}>{text || children}</Text>
  </Touchable>
)

const styles = StyleSheet.create({
  button: {
    paddingVertical: Theme.btnPaddingVertical,
    paddingHorizontal: Theme.btnPaddingHorizontal,
    borderRadius: Theme.btnBorderRadius,
    backgroundColor: Theme.btnBackgroundColor,
    alignItems: Theme.alignItems,
    justifyContent: Theme.btnJustifyContent,
    borderColor: Theme.btnBorderColor,
    borderWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: Theme.btnTextFontSize,
    color: Theme.btnTextColor,
  },
})

export default Button
