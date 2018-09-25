import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  
});

window.g_app = app;
app.use(createLoading());



class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
