import React, { Component } from 'react';
//import {browserHistory as history} from 'react-router';
import { Link } from 'react-router';
import Menu from './modals/Menu';
// import Search from './elements/Search';
//import api from '../api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      isMenuOpen: false
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
            
            <i className="fa fa-bars fa-2x menu-icon"
              onClick={()=>this.setState({ isMenuOpen: !isMenuOpen })}
            />
          </div>

          <Menu show={isMenuOpen} closeMenu={this.closeMenu}/>
          <div className="App-children-wrapper">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
