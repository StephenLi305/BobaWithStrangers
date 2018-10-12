import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderName = this.renderName.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field){
    return e => this.setState({
        [field]:e.target.value
    });
  }

  componentDidMount(){
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i} >
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderName(){
    if (this.props.formType === "LET'S GET BOBA"){
      return (
        <label>
          <input type="text"
          value={this.state.name}
          placeholder="First name (or nickname)"
          onChange={this.update('name')}
          className="session-form"
          />
        </label>

      )
    }
  }



  demoLogin(){
    if (this.props.formType === "SIGN IN"){

      return(
      <input className="session-submit"
      onClick={() => {
        this.setState  ({
          email: "Stephen1",
          password: "password"})
          this.handleSubmit()
      }

        }
      type="submit"
      value="DEMO SIGN IN"
      />
    )
  }
}

  render(){
    return(
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box" >
          {this.renderErrors()}
          <h1 className="login-header">{this.props.header}</h1>
          <p className="login-text">{this.props.headertext}</p>
            <div className="login-form">

              {this.renderName()}

              <label>
                <input type="text"
                value={this.state.email}
                placeholder="Email Address"
                onChange={this.update('email')}
                className="session-form"
                required
                />
              </label><br />

              <label>
                <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-form"
                required
                />
              </label><br />

                <input className="session-submit"
                type="submit"
                value={this.props.formType}/>

                {this.demoLogin()}

            </div>
            <p className="alternate">{this.props.navLink}</p>
        </form>
      </div>

    )
  }
}

export default withRouter(SessionForm)
