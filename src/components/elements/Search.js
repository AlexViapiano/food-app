import React, {Component} from 'react';
import {browserHistory as history} from 'react-router';
import SearchMessage from '../modals/searchMessage';

import './Search.css';
import api from '../../api';
// import PlacesAutocomplete from 'react-places-autocomplete';
// import auth from '../../auth';


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "", 
      isSearchEmpty: false
    }
 }


  componentDidMount() {

      var onPositionReceived = (position) => {
      var latlng = position.coords.latitude+","+position.coords.longitude;

      api.getAddressFromLatLng(latlng)
      .then(res => {
          this.setState({
            search: res.text, 
            isSearchEmpty: false
          })
      })
      }

      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onPositionReceived);
      }
  } 


  search = (e) => {
    e.preventDefault();
    this._handleSearch(this.state.search)
  }

 

   _handleSearch = (address) => {
    address.length === 0 ? this.setState({
      isSearchEmpty: true
    }) : history.push(`/bites/${address}`) 
  }
  



  _handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }


  render() {
    // console.log(this.state.isSearchEmpty, "search empty state in search.js")
  	return(
          <div className="searchDiv">
            <h3>Find food near:</h3>
            <form className="searchForm">
                <input type="text" 
                  placeholder="your current address" 
                  className="search-box-input"
                  value={this.state.search}
                  onChange={this._handleChange}
                />
                <button className="search-box-button"
                onClick={this.search}>Feed Me!</button>
            </form>
            {this.state.isSearchEmpty ? 
            <SearchMessage /> 
            : null }
          </div>
    		)
  }
}


//THE BELOW CODE IS FOR AUTOCOMPLETE IF WE DECIDE TO RE-IMPLEMENT 
//this._handleSearch = this.props._handleSearch.bind(this);

// _handleTyping = (e) => {
//    if (this.state && this.state.error) {
//      this.setState({ 
//        error: null 
//    })
//    }
//  }
      
// const inputProps = {
//   value: this.state.address || "",
//   onChange: this.onChange,
// }

//onKeyUp={this._handleTyping}
