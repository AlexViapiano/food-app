import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from './modals/Menu';
import auth from '../auth.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      user: {},
      isMenuOpen: false
      }
  }

  componentWillMount() {
        this._fetchUserInfo();
    }


  _fetchUserInfo = () => {
    if (auth.isLoggedIn()) {
      this.setState({ user: auth.getUser() });
    } 
  }

  
  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  }

  
  render() {
    let {isMenuOpen} = this.state

    return (
      <div className="App">
        <div className="inner">  
          <div className="title-wrapper">
            <Link to="/" className="App-navbar__title">NiteBites</Link>
          </div>
          <div className="App-navbar">
            <i className="fa fa-cutlery fa-2x menu-icon"
              onClick={()=>this.setState({ isMenuOpen: !isMenuOpen })}
            />
          </div>
          <Menu show={this.state.isMenuOpen} closeMenu={this.closeMenu} user={this.state.user}/>
          {!this.state.isMenuOpen ?
          <div className="App-children-wrapper">
            {this.props.children}
          </div>
          : null}
        </div>
      </div>
    );
  }
  
}

export default App;
