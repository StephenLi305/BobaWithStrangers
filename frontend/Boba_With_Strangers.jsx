import React from 'react';
import ReactDOM from 'react-dom';

import * as Sessions from './util/session_api_util'
import configureStore from './store/store'
import Root from './components/root';

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  window.Sessions = Sessions
  window.getState = store.getState;
  window.dispatch = store.dispatch

  ReactDOM.render(<Root store={store} />, root);
});
