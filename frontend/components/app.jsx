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

  <Route path="/signup" component={SignUpFormContainer} />
  <Route exact path="/signin" component={SignInFormContainer} />

    <h1>Tiffani is my GIRLFRIENDDDD</h1>
    <h1>i got a higher score than Tim</h1>
    <h1>BobaWithStrangers</h1>
    <h1>App Page under Roots: this is where I'll put all the Apps</h1>
  </div>
)

export default App
