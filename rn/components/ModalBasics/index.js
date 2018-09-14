//🤪
import React, { Component } from "react";
import ModalTarget from "../ModalTarget";

export default class ModalBasics {
  static show(modalView) {
    let modalKey;
    let onDisappearCompletedSave = modalView.props.onDisappearCompleted;
    let element = React.cloneElement(modalView, {
      onDisappearCompleted: () => {
        ModalTarget.remove(modalKey);
        onDisappearCompletedSave && onDisappearCompletedSave();
      }
    });
    modalKey = ModalTarget.add(element);
    return modalKey;
  }

  static remove(modalKey) {
    ModalTarget.remove(modalKey);
  }
}
