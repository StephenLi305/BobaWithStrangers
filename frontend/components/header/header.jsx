import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';


const mapStateToProps = ({session, entities: { users }}) => {
  return {
    logged_in: session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signin: (user) => dispatch(signin(user)),
  };
};


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showDropDown: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


handleSubmit(){
  const user = Object.assign({}, this.state);
  this.props.signin(user);
  debugger
}

rightNav() {
  if(this.state.logged_in) {
    debugger
    return (
      <nav className="right-nav">
        <ul className="dropdown-signed-out" >

          <Link to="/signin">
            <li>SIGN OUT</li>
          </Link>

        </ul>
      </nav>
    )
  } else {
    debugger
    return (
    <nav className="right-nav">
      <ul className="dropdown-signed-out" >

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
          <Link to="/" >
            <img scr="https://drive.google.com/open?id=1AvOhLHQb8XFaiZ_GdHLyX0UHcwjvcMG7" />
          </Link>
        </nav>

        {this.rightNav()}
      </header>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
// export default Header
