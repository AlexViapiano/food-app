import React, {Component} from 'react';
import './NoResultsMessage.css';

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