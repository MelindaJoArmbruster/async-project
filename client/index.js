import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import TopComponent from './components/TopComponent';

ReactDOM.render(
  <Provider store={store}>
    <TopComponent />
  </Provider>,
  document.getElementById('app')
);
