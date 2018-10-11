import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
 } from 'react-router-dom'

import SignUpFormContainer from './session_form/sign_UP_container'
import SignInFormContainer from './session_form/sign_IN_container'

const App = () => (
  <div>
    <Switch>
      <Route path="/signup" component={SignUpFormContainer} />
      <Route exact path="/signin" component={SignInFormContainer} />
    </Switch>
  </div>
)

export default App
