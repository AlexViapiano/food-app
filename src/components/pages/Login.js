import React, {Component} from 'react';
import auth from '../../auth';
import './Login.css';

const ENTER = 13;

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: []
    };
  }
  
  _handleLogin = () => {
    let { email: {value: email}, password: {value: password} } = this.refs;
  if (email && password) {
    auth.login(email, password)
    .then(res => {
      this.props.router.push('/')
    })
    .catch(err => {
      let res = err.response.body;
      if (res.errors) {
        let arrErr = [];
        for (var key in res.errors) {
          if (res.errors.hasOwnProperty(key)) {
            console.log(key + " -> " + res.errors[key]);
            arrErr.push(`${key}: ${res.errors[key]}`)
          }
        }
        this.setState({
          error: arrErr
        });
      } else {
        // this.props.router.push('/login')
      }
    })
    
  }
  else {
   this.setState({ error: ["Please enter a valid email and password"]})
  }
}
  _handleTyping = (e) => {
    if (this.state && this.state.error) {
      this.setState({ error: [] })
    }
    if (e.keyCode===ENTER) {
      this._handleLogin();
    }
  }

  render() {
    return (
      <div className="login">
        <input type="text" ref="email" placeholder="Email" className="name_input login-input"
          onKeyUp={this._handleTyping}
        />
        <input type="password" ref="password" placeholder="Password" className="password_input login-input"
          onKeyUp={this._handleTyping}
        />

        <button onClick={this._handleLogin} className="login_button">login</button> 

        <div className="errorMsg">
          {this.state.error.map( (error,idx) => <div key={idx}>{error}</div>)}
        </div>
      </div>
    );
  }

}