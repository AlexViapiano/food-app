import React, {Component} from 'react';
// import api from '../../api.js';
import './NoResultsMessage.css';

// const ENTER = 13;

export default class NoResultsMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {} 
  }
   
  render() {
    return (
      <div className="NoResultsDiv">
        <div className="innerModalDiv">
          <p>There's not much open near you. <br />Try searching another location.</p>
        </div>      
      </div>
    )
  } 
}