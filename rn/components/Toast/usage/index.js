import React, { Component } from 'react';
import Toast from '..';
import Button from '../../Button';
import Label from '../../Label';
import Page from '../../Page';

export default class ToastExample extends Component {
  showModal(check, side) {
    if (check === 1) {
      Toast.toastText('这是一个纯文本Toast', 'short', side);
    } else if (check === 3) {
      Toast.toastSucess('成功', 'short');
    } else if (check === 6) {
      Toast.toastFail('失败', 'short');
    } else if (check === 7) {
      Toast.toastWarn('警告', 'short');
    } else if (check === 8) {
      Toast.toastWarn('这是一个超过一行最大长度字符数量的警告', 'short');
    } else if (check === 9) {
      Toast.toastText('这是一个超过一行最大长度字符数量的文本', 'short', side);
    }
  }

  render() {
    return (
      <Page>
        <Label type="default" size="xl" text="基本" style={{ margin: 20 }} />
        <Button
          type="normal"
          size="big"
          title="Text Only"
          onClick={() => this.showModal(1)}
        />
        <Button
          style={{ marginTop: 10 }}
          type="normal"
          size="big"
          title="Long Text"
          onClick={() => this.showModal(9)}
        />
        <Button
          style={{ marginTop: 10 }}
          type="normal"
          size="big"
          title="Success"
          onClick={() => this.showModal(3)}
        />
        <Button
          style={{ marginTop: 10 }}
          type="normal"
          size="big"
          title="Fail"
          onClick={() => this.showModal(6)}
        />
        <Button
          style={{ marginTop: 10 }}
          type="normal"
          size="big"
          title="Warn"
          onClick={() => this.showModal(7)}
        />
        <Button
          style={{ marginTop: 10 }}
          type="normal"
          size="big"
          title="Warn Custom Text"
          onClick={() => this.showModal(8)}
        />
      </Page>
    );
  }
}
