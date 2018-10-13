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

handleSubmit(e){
  this.props.logout().then(() => this.props.history.push("/signup"));
}


  render(){
    const { logout } = this.props
    const { currentUser } = this.props
    return(
      <div>
        <h1>Splash Page</h1>
        <h1>Welcome to BobaWithStrangers</h1>
        <Link to="/signup">Sign Up</Link>
        <br />
        <Link to="/signin">Sign In</Link>
        <br />
        <Link to="/boba_times">BOBA TIMEE!!!</Link>
        <br />
        <button onClick={this.handleSubmit}>Logout</button>
      </div>
    )
  }


}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
