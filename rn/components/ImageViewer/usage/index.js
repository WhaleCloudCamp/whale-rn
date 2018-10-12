import React, { Component } from 'react';
import { View } from 'react-native';
import Page from '../../Page';
import ImageViewer from '..';

let images = [
  {
    url:
      'http://imgsrc.baidu.com/imgad/pic/item/f3d3572c11dfa9ec6c4e5b2d69d0f703918fc1ac.jpg',
  },
  {
    url:
      'http://www.wallcoo.com/cartoon/Space_image_space_and_satellite/wallpapers/1280x1024/Space%20Satellite%20CG%20art%20images%20EF07_SI0261.jpg',
  },
  {
    url:
      'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=4b5c420730292df583cea456d4583615/e1fe9925bc315c60eb1aecc787b1cb134954770f.jpg',
  },
  {
    url:
      'http://g.hiphotos.baidu.com/image/h%3D300/sign=2fa615826181800a71e58f0e813433d6/d50735fae6cd7b8960afd68e022442a7d8330ef8.jpg',
  },
  {
    url:
      'http://f.hiphotos.baidu.com/image/pic/item/d62a6059252dd42add0d64a60e3b5bb5c9eab8b3.jpg',
  },
];

export default class ImageViewerDemo extends Component {
  render() {
    return (
      <Page>
        <ImageViewer imageUrls={images} />
      </Page>
    );
  }
}
