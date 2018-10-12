import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom'




class Header extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showDropDown: false,
    }

    this.showDropDown = this.showDropDown.bind(this)
    this.closeDropDown = this.closeDropDown.bind(this)

  }


showDropDown(event){
  event.preventDefault();
  this.setState({ showDropDown: true}, () => {
    document.addEventListener('click', this.closeDropDown);
  });
}

closeDropDown(){

  if (!this.dropdownMenu.contains(event.target)){

    this.setState({ showDropDown: false }, () => {
      document.removeEventListener('click', this.closeDropDown);

    });
  }
}




  render(){
    return(

      <header className="main-nav">


        <nav className="left-nav" >
          <Link to="/" >
            <i className="fa fa-coffee">
              Boba With Strangers
            </i>
          </Link>
        </nav>

        <nav className="right-nav">
          <i className="fa fa-bars" onClick={this.showDropDown}>
          </i>

          {
            this.state.showDropDown ? (

              <ul
              className="dropdown-signed-out"
              ref={(element) => {
                this.dropdownMenu = element;
              }}
              >
                <li>HOME</li>
                <li>BOBA TIMES</li>
                <li>SIGN IN</li>
                <li>SIGN UP</li>
              </ul>
            ) : (
              null
            )
          }



          </nav>
      </header>

    )

  }
}







export default Header
