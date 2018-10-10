import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "redirect": "/ActionSheet",
    "exact": true
  },
  {
    "path": "/",
    "component": require('../../layouts').default,
    "routes": [
      {
        "path": "/ActionSheet",
        "component": require('../../../rn/components/ActionSheet/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/ActivityIndication",
        "component": require('../../../rn/components/ActivityIndication/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/Alert",
        "component": require('../../../rn/components/Alert/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/AreaSelect",
        "component": require('../../../rn/components/AreaSelect/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/Badge",
        "component": require('../../../rn/components/Badge/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/Button",
        "component": require('../../../rn/components/Button/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/CheckBox",
        "component": require('../../../rn/components/CheckBox/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/ImagePicker",
        "component": require('../../../rn/components/ImagePicker/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/Input",
        "component": require('../../../rn/components/Input/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/InputItem",
        "component": require('../../../rn/components/InputItem/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/Item",
        "component": require('../../../rn/components/Item/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/ItemAvatar",
        "component": require('../../../rn/components/ItemAvatar/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/ItemDivider",
        "component": require('../../../rn/components/ItemDivider/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/Label",
        "component": require('../../../rn/components/Label/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/List",
        "component": require('../../../rn/components/List/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/MenuPicker",
        "component": require('../../../rn/components/MenuPicker/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/Modal",
        "component": require('../../../rn/components/Modal/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/ModalView",
        "component": require('../../../rn/components/ModalView/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/NavBar",
        "component": require('../../../rn/components/NavBar/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/NoticeBar",
        "component": require('../../../rn/components/NoticeBar/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/Pagination",
        "component": require('../../../rn/components/Pagination/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/Progress",
        "component": require('../../../rn/components/Progress/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/Prompt",
        "component": require('../../../rn/components/Prompt/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/Radio",
        "component": require('../../../rn/components/Radio/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/SearchBar",
        "component": require('../../../rn/components/SearchBar/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/Slider",
        "component": require('../../../rn/components/Slider/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/Stepper",
        "component": require('../../../rn/components/Stepper/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/Switch",
        "component": require('../../../rn/components/Switch/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/TabBar",
        "component": require('../../../rn/components/TabBar/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/Tabs",
        "component": require('../../../rn/components/Tabs/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/Tag",
        "component": require('../../../rn/components/Tag/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/TextareaItem",
        "component": require('../../../rn/components/TextareaItem/usage/index.js').default,
        "exact": true
      },
      {
        "path": "/Toast",
        "component": require('../../../rn/components/Toast/usage/index.js').default,
        "exact": true
      },
      {
        "component": () => React.createElement(require('/Users/xiaohuoni/Documents/GitHub/whale/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Users/xiaohuoni/Documents/GitHub/whale/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
