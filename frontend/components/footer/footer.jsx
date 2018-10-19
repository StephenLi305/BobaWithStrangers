import React from 'react';
import { Link, Redirect } from 'react-router-dom'


class Footer extends React.Component{


  render(){
    return(
      <div className="footer">
        <a href="https://github.com/StephenLi305">GitHub</a>
        <br/>
        <a href="https://www.linkedin.com/in/stephenli305/"><i className="fab fa-linkedin-in"></i></a>
      </div>
    )
  }
}
export default Footer;
// <i className={fa fa-cloud} ></i>
