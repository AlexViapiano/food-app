import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import { Link } from 'react-router';
import Bites from '../pages/Bites';
import Home from '../pages/Home';
import './HomeSearchButton.css';


export default class HomeSearchButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
    	<div>
		  <div className="home-search-button">
        <Link to={`/bites`}>
		    <button className="GetBites" type="button">Find Food Near You!</button>
        </Link>
		  </div>

	  </div>
	);		
	}
}
