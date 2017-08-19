import React, { Component } from 'react';
//import {browserHistory as history} from 'react-router';
import { Link } from 'react-router';
import Menu from './modals/Menu';
// import Search from './elements/Search';
import auth from '../auth.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      isMenuOpen: false,
      user: {}
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
  
  closeMenu = () => this.setState({ isMenuOpen: false });
  
  render() {
    let {isMenuOpen} = this.state
    return (
      <div className="App">
        <div className="inner">  
          <div className="title-wrapper">
            <Link to="/" className="App-navbar__title">NiteBite</Link>
          </div>
          <div className="App-navbar">
            
            <i className="fa fa-cutlery fa-2x menu-icon"
              onClick={()=>this.setState({ isMenuOpen: !isMenuOpen })}
            />
          </div>

          <Menu show={isMenuOpen} closeMenu={this.closeMenu} user={this.state.user}/>
          <div className="App-children-wrapper">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;