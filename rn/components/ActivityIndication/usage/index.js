import React from 'react';
import ActivityIndication from '..';
import Button from '../../Button';
import Label from '../../Label';
import Page from '../../Page';
import ModalBasics from '../../ModalBasics';

export default class ActiveDemo extends React.Component {
  showModal(check) {
    let modalKey;
    switch (check) {
      case 1:
        modalKey = ModalBasics.show(<ActivityIndication toast />);
        break;
      case 2:
        modalKey = ModalBasics.show(
          <ActivityIndication toast text="正在加载" />
        );
        break;
      default:
        break;
    }
    // 持有modalKay变量可手动决定何时消失
    setTimeout(() => ModalBasics.remove(modalKey), 5000);
  }

  render() {
    return (
      <Page>
        <Label type="default" size="xl" text="基本" style={{ margin: 20 }} />
        <Label
          type="default"
          size="md"
          text="无文本"
          style={{ marginStart: 20, marginBottom: 10 }}
        />
        <ActivityIndication />
        <Label
          type="default"
          size="md"
          text="带有文本"
          style={{ marginStart: 20, marginTop: 10, marginBottom: 10 }}
        />
        <ActivityIndication text="正在加载" />
        <Label
          type="default"
          size="md"
          text="大尺寸"
          style={{ marginStart: 20, marginTop: 10, marginBottom: 10 }}
        />
        <ActivityIndication size="large" />
        <Label
          type="default"
          size="md"
          text="大尺寸并且带有文本"
          style={{ marginStart: 20, marginTop: 10, marginBottom: 10 }}
        />
        <ActivityIndication text="正在加载" size="large" side="column" />
        <Label
          type="default"
          size="md"
          text="轻消息样式"
          style={{ marginStart: 20, marginTop: 10, marginBottom: 10 }}
        />
        <Button
          type="normal"
          size="big"
          title="仅加载条"
          onClick={() => this.showModal(1)}
        />
        <Button
          style={{ marginTop: 10 }}
          type="normal"
          size="big"
          title="带有文本"
          onClick={() => this.showModal(2)}
        />
      </Page>
    );
  }
}
