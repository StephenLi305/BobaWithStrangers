import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Sign In",
    navLink: <Link to="/signup">If you've never signed up before, click here and do that</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signin(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
