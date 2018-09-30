import React, { Component } from 'react';
import { Toast } from '..';
import Button from '../../Button';
import Label from '../../Label';
import Page from '../../Page';

export default class ToastExample extends Component {
  showModal(check, side) {
    if (check === 1) {
      Toast.toastText('short', '这是一个纯文本Toast', side);
    } else if (check === 2) {
      Toast.toastSucess('long');
    } else if (check === 3) {
      Toast.toastSucess('short');
    } else if (check === 4) {
      Toast.toastSucess(5000);
    } else if (check === 5) {
      Toast.toastSucess('none');
      setTimeout(() => Toast.close(), 5000);
    } else if (check === 6) {
      Toast.toastFail('short');
    } else if (check === 7) {
      Toast.toastWarn('short');
    } else if (check === 8) {
      Toast.toastWarn('short', '一个警告');
    } else if (check === 9) {
      Toast.toastText(
        'short',
        '太长怎么办太长怎么办太长怎么办太长怎么办',
        side
      );
    }
  }

  render() {
    return (
      <Page>
        <Label type="default" size="xl" text="基本" />
        <Button
          type="normal"
          size="big"
          title="Text Only"
          onClick={() => this.showModal(1)}
        />
        <Button
          type="normal"
          size="big"
          title="Long Text"
          onClick={() => this.showModal(9)}
        />
        <Button
          type="normal"
          size="big"
          title="Success"
          onClick={() => this.showModal(3)}
        />
        <Button
          type="normal"
          size="big"
          title="Fail"
          onClick={() => this.showModal(6)}
        />
        <Button
          type="normal"
          size="big"
          title="Warn"
          onClick={() => this.showModal(7)}
        />
        <Button
          type="normal"
          size="big"
          title="Warn Custom Text"
          onClick={() => this.showModal(8)}
        />
      </Page>
    );
  }
}
