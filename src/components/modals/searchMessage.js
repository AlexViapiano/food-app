import React, {Component} from 'react';
import './searchMessage.css';

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