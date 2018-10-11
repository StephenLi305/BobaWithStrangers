import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    header: "Hey stranger!",
    headertext: "It's good to have you back. Sign in here and sign up for your next boba time!",
    errors: errors.session,
    formType: "SIGN IN",
    navLink: <Link to="/signup">If you've never signed up before, click here and do that</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signin(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
