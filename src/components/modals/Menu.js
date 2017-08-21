import React, { Component } from 'react';
import { Link } from 'react-router';
//import onClickOutside from 'react-onclickoutside';
import auth from '../../auth';
import './Menu.css';
import {browserHistory as history} from 'react-router';
// import api from '../../api.js';
// import Login from '../pages/Login';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarUrl: ""
      // isMenuOpen: false
    };
    this._handleLogout = this._handleLogout.bind(this);
  }

  // handleClickOutside = () => {
  //    this.props.closeMenu();
  //}

  _handleLogout (e) {
    e.preventDefault();
    auth.logout();
    this.props.closeMenu();
    history.push('/');
  }

  render() {
    let { closeMenu, show } = this.props;
    const isLoggedIn = auth.isLoggedIn();

    let avatarUrl = (isLoggedIn && auth.getUser()) ? auth.getUser().avatarUrl : "";

    return (
      <div className={`menu ${show?"show":""}`} onClick={closeMenu}>
        <div className="menu__header">
            {(isLoggedIn) ?
                <img src={avatarUrl} alt="profile-pic" className="menu__avatar"/>
                    :  <img src="" alt="" className="menu__avatar"/>}
        </div>

          <div className="menu__list">
            
            <Link to="/" className="menu__item home-link" onClick={closeMenu}> 
              Home  
            </Link>

            {!isLoggedIn ?
            <Link to="/login" className="menu__item login-link" onClick={closeMenu}> 
              Login  
            </Link>
            : null}

            {!isLoggedIn ?
            <Link to="/signup" className="menu__item signup-link" onClick={closeMenu}>
              Signup    
            </Link>
            : null}

            {isLoggedIn ?
            <button className="logout-button" onClick={this._handleLogout}>logout</button> 
            : null}

            {/*After user logouts it should take you back to homepage and search option*/}
          </div>   
      </div>
    );
  }

   // {!isLoggedIn ?
   //          <Link to="/bites" className="menu__item bites-link" onClick={closeMenu}>
   //            Bites    {/*Should be directed to bites page after user searches*/}
   //          </Link>
   //          : null}

}

//export default onClickOutside(Menu);

export default Menu;