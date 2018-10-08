import React from 'react';
import ActivityIndication from '..';
import Button from '../../Button';
import Label from '../../Label';
import Page from '../../Page';
import { ModalBasics } from '../..';

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
        <Label type="default" size="md" text="Without text" style={{ marginStart: 20, marginBottom: 10 }} />
        <ActivityIndication />
        <Label type="default" size="md" text="With text" style={{ marginStart: 20, marginTop: 10, marginBottom: 10 }} />
        <ActivityIndication text="正在加载" />
        <Label type="default" size="md" text="With large size" style={{ marginStart: 20, marginTop: 10, marginBottom: 10 }} />
        <ActivityIndication size="large" />
        <Label type="default" size="md" text="With large size and custom side and text" style={{ marginStart: 20, marginTop: 10, marginBottom: 10 }} />
        <ActivityIndication text="正在加载" size="large" side="column" />
        <Label type="default" size="md" text="With toast" style={{ marginStart: 20, marginTop: 10, marginBottom: 10 }} />
        <Button
          type="normal"
          size="big"
          title="Loading Toast"
          onClick={() => this.showModal(1)}
        />
        <Button
          style={{ marginTop: 10 }}
          type="normal"
          size="big"
          title="Loading Toast Text"
          onClick={() => this.showModal(2)}
        />
      </Page>
    );
  }
}
