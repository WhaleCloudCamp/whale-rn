import React from 'react';
import ActivityIndication from '..';
import Button from '../../Button';
import Label from '../../Label';
import Page from '../../Page';
import { ModalBasics } from '../../index';

export default class ActiveDemo extends React.Component {
  showModal(check) {
    let modalKey;
    switch (check) {
      case 1:
        modalKey = ModalBasics.show(<ActivityIndication color="white" />);
        break;
      case 2:
        modalKey = ModalBasics.show(<ActivityIndication size="large" />);
        break;
      case 3:
        modalKey = ModalBasics.show(<ActivityIndication text="正在加载" />);
        break;
      case 4:
        modalKey = ModalBasics.show(<ActivityIndication toast />);
        break;
      case 5:
        modalKey = ModalBasics.show(
          <ActivityIndication toast text="正在加载" />
        );
        break;
      case 6:
        modalKey = ModalBasics.show(
          <ActivityIndication text="正在加载" size="large" side="column" />
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
        <Button
          type="normal"
          size="big"
          title="Small Loading（White）"
          onClick={() => this.showModal(1)}
        />
        <Button
          style={{ marginTop: 10 }}
          type="normal"
          size="big"
          title="Large Loading"
          onClick={() => this.showModal(2)}
        />
        <Button
          style={{ marginTop: 10 }}
          type="normal"
          size="big"
          title="Loading Text"
          onClick={() => this.showModal(3)}
        />
        <Button
          style={{ marginTop: 10 }}
          type="normal"
          size="big"
          title="Loading Text2"
          onClick={() => this.showModal(6)}
        />
        <Button
          style={{ marginTop: 10 }}
          type="normal"
          size="big"
          title="Loading Toast"
          onClick={() => this.showModal(4)}
        />
        <Button
          style={{ marginTop: 10 }}
          type="normal"
          size="big"
          title="Loading Toast Text"
          onClick={() => this.showModal(5)}
        />
      </Page>
    );
  }
}
