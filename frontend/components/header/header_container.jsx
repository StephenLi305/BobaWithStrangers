import React from 'react';
import { connect } from 'react-redux';




class Header extends React.Component {

  render(){
    return(
      <header className="main-nav">

        <nav className="left-nav">
        <img scr="/app/assets/images/logo.png" className="boba-logo"/>
        </nav>

        <nav className="right-nav">
        <i className="fa fa-bars"
        ></i>
        </nav>
      </header>

    )

  }
}







export default Header
