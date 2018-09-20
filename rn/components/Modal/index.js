import React from 'react';
import ModalBasics from '../ModalBasics';
import ModalDrawerView from '../ModalDrawerView';
import ModalPopoverView from '../ModalPopoverView';
import ModalView from '../ModalView';
import Alert from '../Alert';
import Prompt from '../Prompt';

export default class Modal {
  static View = ModalView;

  static DrawerView = ModalDrawerView;

  static PopoverView = ModalPopoverView;

  static alert = Alert;

  static prompt = Prompt;

  static show = ModalBasics.show;

  static remove = ModalBasics.remove;

  static popover = (content, view, direction, align, showArrow, style = {}) => {
    let defaultStyle = {
      backgroundColor: '#FFF',
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 12,
      paddingRight: 12,
    };
    let popoverStyle = [].concat(defaultStyle).concat(style);
    return view.measure((x, y, width, height, pageX, pageY) => {
      let fromBounds = { x: pageX, y: pageY, width, height };
      let modalView = (
        <ModalPopoverView
          popoverStyle={popoverStyle}
          fromBounds={fromBounds}
          direction={direction}
          align={align}
          directionInsets={4}
          showArrow={showArrow}
        >
          {content}
        </ModalPopoverView>
      );
      return ModalBasics.show(modalView);
    });
  };
}
