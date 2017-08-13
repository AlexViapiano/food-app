import React, { Component } from 'react';
import { Link } from 'react-router';
import onClickOutside from 'react-onclickoutside';
// import auth from '../../auth';
import './Menu.css';
// import {browserHistory as history} from 'react-router';
// import api from '../../api.js';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

   handleClickOutside = () => {
    this.props.closeMenu();
  }

  render() {
    let { closeMenu, show } = this.props
    // console.log(this.state)
    return (
      <div className={`menu ${show?"show":""}`}>

        <div className="menu__header">

        <div className="menu__list">

          <Link to="/" className="menu__item" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/" className="menu__item" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/" className="menu__item" onClick={closeMenu}>
            Home
          </Link>
        </div>
      </div>    
        
      </div>
    );
  }

}

export default onClickOutside(Menu);