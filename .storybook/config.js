import React from 'react';
import { setOptions } from '@storybook/addon-options';
import centered from './decorator-centered';
import { configure, addDecorator,storiesOf } from '@storybook/react';
import ModalTarget from '../rn/components/ModalTarget';

// 运行生成组件库描述文件脚本
// require('../scripts/create-components-description');

const context = require.context('../rn/components', true, /usage\/index\.js$/);

addDecorator(centered);
// configureViewport({
//   defaultViewport:'iphone6'
// });
setOptions({
  name: 'Whale-RN',
  url: 'https://github.com/WhaleCloud-mars/whale-rn',
  goFullScreen: false,
  addonPanelInRight: false,
  showSearchBox: false,
  showAddonPanel: false,
  showStoriesPanel: true
});
// let list = [];
// context.keys().forEach(context=>{
//   list.push(context)
// })

function loadStories() {
  // list.map(item=>{
  //   const key = item.split('/')[1];
  //   const ABC =require(`../rn/components/${item.slice(2)}`).default
  //   storiesOf('components', module)
  // .add(key, () => (
  //   <ModalTarget><ABC /></ModalTarget>
  // )) 
  // })
  context.keys().forEach(item=>{
    const key = item.split('/')[1];
    const ABC =require(`../rn/components/${item.slice(2)}`).default
    storiesOf('components', module)
  .add(key, () => (
    <ModalTarget><ABC /></ModalTarget>
  )) 
  })
}

configure(loadStories, module);
