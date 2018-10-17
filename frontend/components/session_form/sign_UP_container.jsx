import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    header: "Join for tea time",
    headertext: "1000s of strangers across the world have sat together for conversations. Create an account and you'll be on your way to join the community.",
    errors: errors.session,
    formType: "LET'S GET BOBA",
    navLink: <Link to="/signin"> If you've already done this before, click here to sign in</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
