import React from 'react';
import { Link, Redirect } from 'react-router-dom'


class Footer extends React.Component{


  render(){
    return(
      <div className="footer">
        <a href="https://github.com/StephenLi305"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/stephenli305/"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://stephenli.fun/"><i class="fas fa-portrait"></i></a>
      </div>
    )
  }
}
export default Footer;
