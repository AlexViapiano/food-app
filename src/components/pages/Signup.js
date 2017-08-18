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
    let { email: {value: email}, password: {value: password} } = this.refs;
    
    if (email && password && password.length >= 8) {
      auth.signup(email, password)
      .then(res => {
        // if (res.errors) {
        //   let arrErr = [];
        //   console.log(res.errors, "arrErr errors")
        //   for (var key in res.errors) {
        //     if (res.errors.hasOwnProperty(key)) {
        //       console.log(key + " -> " + res.errors[key]);
        //       arrErr.push(`${key}: ${res.errors[key]}`)
        //     }
        //   }
        //   this.setState({
        //     error: arrErr
        //   });
        // } else {
          this.props.router.push('/login')
        // }
        
      })
      .catch(console.error)
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
        <h1 className="signup_h1">Signup to Nite Bite</h1>
        
        <input type="email" 
        ref="email" 
        placeholder="email"
        className="signup_email"
          onKeyUp={this._handleTyping}
        />

        <input type="password" 
        ref="password"
        placeholder="password"
        className="signup_password"
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