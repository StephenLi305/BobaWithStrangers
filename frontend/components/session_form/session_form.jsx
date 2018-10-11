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
  }

  update(field){
    return e => this.setState({
        [field]:e.target.value
    });
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
          placeholder="Name"
          onChange={this.update('name')}
          className="session-form"
          />
        </label>

      )
    }
  }



  render(){
    return(
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box" >
          {this.renderErrors()}
          <h2 className="login-header">{this.props.header}</h2>
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

            </div>
            <p className="alternate">{this.props.navLink}</p>
        </form>
      </div>

    )
  }
}

export default withRouter(SessionForm)
