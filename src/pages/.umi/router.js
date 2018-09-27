import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "redirect": "/modal",
    "exact": true
  },
  {
    "path": "/",
    "component": require('../../layouts').default,
    "routes": [
      {
        "path": "/modal",
        "component": require('../../../rn/components/Modal/usage').default,
        "exact": true
      },
      {
        "component": () => React.createElement(require('/Users/xiaohuoni/Documents/GitHub/whale-rn/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Users/xiaohuoni/Documents/GitHub/whale-rn/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
