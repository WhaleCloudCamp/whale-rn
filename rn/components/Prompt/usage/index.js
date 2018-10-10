import React, { Component } from 'react';
import Prompt from '../index';
import Page from '../../Page';
import Button from '../../Button';

export default class PromptExample extends Component {
  showModal(text, content) {
    const defaultBtns = [
      {
        text: '取消',
        onPress: e => {
          console.log(e);
        },
      },
      {
        text: '确定',
        onPress: e => {
          console.log(e);
        },
      },
    ];
    Prompt(text, content, defaultBtns, 'defaultValue', 'placeholders');
  }

  render() {
    return (
      <Page>
        <Button
          type="normal"
          size="big"
          title="输入"
          onClick={() => this.showModal('标题', '详细说明')}
        />
      </Page>
    );
  }
}
