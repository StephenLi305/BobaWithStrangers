import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';


const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <App>
        </App>
        <br/>
        <br/>
        <h1>Frontend Root component: This here from the store connected to backend</h1>
        <h1>down there</h1>

      </div>
    </HashRouter>
  </Provider>
);


export default Root;
