import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom'
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';




const mapStateToProps = ({session, entities: { users }}) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};



class Splash extends React.Component {
constructor(props){
  super(props);
  console.log(this.props);
  this.handleSubmit = this.handleSubmit.bind(this);

}

handleSubmit(){
  this.props.logout().then(() => this.props.history.push("/signup"));
}

title(){
  return(
    <div className="splash-title">
      <div className="splash-title-text">
        <h3>Everyone is interesing</h3>
        <p>But you don’t discover that when you’re staring at a screen.</p>
        <Link to="/boba_times" className="splash-title-button">BOBA TIMEE!!!</Link>
      </div>
    </div>
  )
}

  render(){
    const { logout } = this.props
    const { currentUser } = this.props
    return(
      <div className="splash-page">
        {this.title()}

        <Link to="/signup">Sign Up</Link>
        <br />
        <br />
        <Link to="/signin">Sign In</Link>
        <br />
        <br />
        <Link to="/boba_times">BOBA TIMEE!!!</Link>
        <br />
        <br />
        <Link to="/boba_times/1">BOBA TIMEE!!! SPECIFIC EVENT</Link>
        <br />
        <br />
        <Link to="/profile">Your Profile</Link>
        <br />
        <button onClick={this.handleSubmit}>Logout</button>
      </div>
    )
  }


}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
