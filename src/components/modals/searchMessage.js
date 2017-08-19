import React, {Component} from 'react';
import api from '../../api.js';
import './searchMessage.css';

const ENTER = 13;

export default class SearchMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {} 
  }
   
  render() {
    return (
      <div className="SearchMessageDiv">
          <p>please enter a place!</p>
      </div>
    )
  } 
}