import React, {Component} from 'react';
import './Search.css';
// import api from '../../api';

// import auth from '../../auth';


// const ENTER = 13;

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {

   }
 }

  render() {
  	return(

  			<form className="searchForm">
		        <input type="text" 
		          ref="keyword" 
		          placeholder="find something open!" 
              className="search-box-input"
		          // onKeyUp={this._handleTyping}

		        />
		        <button className="search-box-button"
		        onClick={this.search}>&#x1f50d;</button>

		    </form>


  		)
  }
}
