import React from 'react'
import ModalTarget from '../ModalTarget'

export default class ModalBasics {
  static show(modalView) {
    let modalKey
    const onDisappearCompletedSave = modalView.props.onDisappearCompleted
    const element = React.cloneElement(modalView, {
      onDisappearCompleted: () => {
        ModalTarget.remove(modalKey)
        if (onDisappearCompletedSave) {
          onDisappearCompletedSave()
        }
      },
    })
    modalKey = ModalTarget.add(element)
    return modalKey
  }

  static remove(modalKey) {
    return ModalTarget.remove(modalKey)
  }
}
