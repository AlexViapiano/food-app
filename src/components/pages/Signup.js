import React, {Component} from 'react';
import './Signup.css';
import auth from '../../auth';

const ENTER = 13;


export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: []
    }
  }

  _handleSignup = () => {
    let { email: {value: email}, password: {value: password}, firstName: {value: firstName}, lastName: {value: lastName}  } = this.refs;
    
    if (email && password && password.length >= 8) {
      auth.signup(email, password, firstName, lastName)
      .then(res => {
        this.props.router.push('/login')
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
      this._handleSignup()
    }
  }

  render() {
    // console.log(this.state.email, this.state.password)
    return (
      <div className="signup">
        <h2 className="signup_h2">Signup to Nite Bite</h2>

        <input type="text" 
        ref="firstName"
        placeholder="First name"
        className="signup_firstName signup-input"
          onKeyUp={this._handleTyping}
        />

        <input type="text" 
        ref="lastName"
        placeholder="Last name"
        className="signup_lastName signup-input"
          onKeyUp={this._handleTyping}
        />
        
        <input type="email" 
        ref="email" 
        placeholder="email"
        className="signup_email signup-input"
          onKeyUp={this._handleTyping}
        />

        <input type="password" 
        ref="password"
        placeholder="password"
        className="signup_password signup-input"
          onKeyUp={this._handleTyping}
        />
        <button onClick={this._handleSignup} className="signup_button">signup!</button>

        <div className="errorMsg">
          {this.state.error.map( (error,idx) => <div key={idx}>{error}</div>)}
        </div>

      </div>
    );
  }

}