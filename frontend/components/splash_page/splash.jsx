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
        <h3>Everyone is interesting</h3>
        <p>But you don’t discover that when you’re staring at a screen.</p>
        <Link to="/boba_times" className="splash-title-button">BOBA TIMEE!!!</Link>
      </div>
    </div>
  )
}

whatIsBobaTime(){
  return(
    <div className="what-is-container">
      <div>
        <h1>Show up for boba time</h1>
        <p>You and a few others join a host at a boba shop.</p>
      </div>
      <div>
        <h1>Have a real conversation</h1>
        <p>You talk for two hours about anything.</p>
      </div>
      <div>
        <h1>See what happens</h1>
        <p>That's it. No strings attached.</p>
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
        {this.whatIsBobaTime()}

        <br />
          <Link to="/boba_times">BOBA TIMEE!!!</Link>
        <br />
        <br />
          <Link to="/boba_times/1">BOBA TIMEE!!! SPECIFIC EVENT</Link>
        <br />
        <br />
          <Link to="/profile">Your Profile</Link>
        <br />
        <br />
          <Link to="/create">Host Event</Link>
        <br />
        <button onClick={this.handleSubmit}>Logout</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}

// <Link to="/signup">Sign Up</Link>
// <br />
// <br />
// <Link to="/signin">Sign In</Link>
// <br />

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
