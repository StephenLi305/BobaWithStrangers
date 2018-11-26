import React from 'react';
import ReactDOM from 'react-dom';

import * as Sessions from './util/session_api_util'
import configureStore from './store/store'
import Root from './components/root';
import { logout } from './actions/session_actions';

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser){
    const preloadedState = {
      session: {id: window.currentUser.id},
      entities: {
        users: { [window.currentUser.id]:window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  window.Sessions = Sessions
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logout = logout;


  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});
