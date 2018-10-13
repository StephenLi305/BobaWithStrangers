import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { signin, logout } from '../../actions/session_actions';


const mapStateToProps = ({session }) => {

  return {
    logged_in: session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signin: (user) => dispatch(signin(user)),
    logout: () => dispatch(logout())
  };
};


class Header extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }


handleSubmit(){
  const user = Object.assign({}, this.state);
  this.props.signin(user);
}

handleLogout(){
  this.props.logout().then(() => (<Link to="/signup"></Link>))
}

rightNav() {
  if(this.props.logged_in) {
    return (
      <nav className="right-nav">
        <ul className="header-signed-in" >
          <li> </li>

          <Link to="/boba_times">
            <li>BOBA TIMES</li>
          </Link>

          <Link to="/signup">
            <li onClick={this.handleLogout}>SIGN OUT</li>
          </Link>
        </ul>
      </nav>
    )
  } else {
    return (
    <nav className="right-nav">
      <nav className="right-nav-signed-out">
        <ul className="right-nav-signed-out-list" >

          <Link to="/signin">
            <li>SIGN IN</li>
          </Link>

          <Link to="/signup">
            <li>SIGN UP</li>
          </Link>

          <li onClick ={ () => {
            (this.setState (
              {email: "Stephen1",
              password: "password"},
              () => {
                this.handleSubmit()
              }
            ))}
          }>
          DEMO</li>
        </ul>
      </nav>
    </nav>
  )
  }
}





// <i className="fa fa-coffee">
// Boba With Strangers
// </i>

  render(){
    return(

      <header className="main-nav">

        <nav className="left-nav" >
          <Link to="/signup"
          className="boba-times-logo">
          <img src="/app/assets/images/BobaWithStrangersLogo.png" />
          </Link>
        </nav>

        {this.rightNav()}

        
      </header>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
// export default Header
