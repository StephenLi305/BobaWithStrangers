import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
 } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'


import SignUpFormContainer from './session_form/sign_UP_container';
import SignInFormContainer from './session_form/sign_IN_container';
import SplashContainer from './splash_page/splash';
import HeaderContainer from './header/header';
import BobaTimesContainer from './boba_times/boba_times';
import BobaTimesEventContainer from './boba_times_event/boba_times_event';
import ProfileContainer from './profile/profile';
import CreateContainer from './create/create_event';
import FooterContainer from './footer/footer';
//
// componentDidMount() {
//   window.location.hash = window.decodeURIComponent(window.location.hash);
//   const scrollToAnchor = () => {
//     const hashParts = window.location.hash.split('#');
//     if (hashParts.length > 2) {
//       const hash = hashParts.slice(-1)[0];
//       document.querySelector(`#${hash}`).scrollIntoView();
//     }
//   };
//   scrollToAnchor();
//   window.onhashchange = scrollToAnchor;
// }

const App = () => (
  <div className="app-container">
    <HeaderContainer />
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/signin" component={SignInFormContainer} />
      <ProtectedRoute exact path="/boba_times" component={BobaTimesContainer} />
      <ProtectedRoute exact path="/boba_times/:eventId" component={BobaTimesEventContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/create" component={CreateContainer} />
      <Redirect to="/" />
    </Switch>
    <FooterContainer />
  </div>
)

export default App
