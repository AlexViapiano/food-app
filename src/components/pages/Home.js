import React, {Component} from 'react';
import Search from '../elements/Search';
// import Geolocation from '../elements/geolocation';
//import { Link } from 'react-router';
import {browserHistory as history} from 'react-router'
import api from '../../api';
//import HomeSearchButton from '../elements/HomeSearchButton';
//import api from '../../api';
import './Home.css';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
}


  render() {

    return (
      <div className="home">
        <div className="inner">
          <div className="content">
            <Search _handleSearch={this._handleSearch}/>
          </div>
        </div>
      </div>
    );
  }
}