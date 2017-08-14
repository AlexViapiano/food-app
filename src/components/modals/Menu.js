import React, { Component } from 'react';
import { Link } from 'react-router';
import onClickOutside from 'react-onclickoutside';
//import auth from '../../auth';
import './Menu.css';
import {browserHistory as history} from 'react-router';
//import api from '../../api.js';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this._handleLogout = this._handleLogout.bind(this);
  }

   handleClickOutside = () => {
    this.props.closeMenu();
  }

  _handleLogout (e) {
    e.preventDefault();
    //auth.logout();
    this.props.closeMenu();
    history.push('/');
  }

  render() {
    let { closeMenu, show } = this.props
    // console.log(this.state)
    return (
      <div className={`menu ${show?"show":""}`}>

        <div className="menu__header">

          <div className="menu__list">

            
            <Link to="/" className="menu__item" onClick={closeMenu}> 
              Home    {/*Initial homepage should only show signup or login options and a search bar*/}
            </Link>

            
            <Link to="/login" className="menu__item" onClick={closeMenu}> 
              Login  {/*Enter a username and password input field*/}
            </Link>

            
            <Link to="/signup" className="menu__item" onClick={closeMenu}>
              Signup   {/*Enter a username and password input field and get directed to Login page after signing up*/}
            </Link>

            
            <Link to="/bites" className="menu__item" onClick={closeMenu}>
              Bites    {/*Should be directed to bites page after user searches*/}
            </Link>

            
            <button onClick={this._handleLogout}>logout</button> 
            {/*After user logouts it should take you back to homepage and search option*/}
          </div>
        </div>    
      </div>
    );
  }

}

export default onClickOutside(Menu);