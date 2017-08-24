import React, {Component} from 'react';
import {browserHistory as history} from 'react-router';
import SearchMessage from '../modals/searchMessage';
import './Search.css';
import api from '../../api';

const ENTER = 13;


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


  _search() {
    // e.preventDefault();
    console.log(this.state.search, 'search')
    this._handleSearch(this.state.search)
  }
 

   _handleSearch = (address) => {
    address.length === 0 ? this.setState({
      isSearchEmpty: true
    }) : history.push(`/bites/${address}`)
  }

  clear = (e) => {
    e.preventDefault();
    // console.log(this.state.search)
    this.setState({
      search: ""
    })
  }

  _handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
    console.log(this.state.search, "handleChange")
  }

  _handleTyping = (e) => {
    // this.setState({
    //   isSearchEmpty: false,
    //   search: e.target.value
    // });
    console.log(e.keyCode, e.target.value, "search in handletyping")
     if (e.keyCode===ENTER) {

      this._search()
    }
  }



  render() {
    
  	return(
          <div className="searchDiv">
            <h3>Find food nearby:</h3>
              <form className="searchForm">
                <div className="search-and-clear">
                  <input type="text" 
                    placeholder="your current address" 
                    className="search-box-input"
                    value={this.state.search}
                    onChange={this._handleChange}
                    onKeyUp={this._handleTyping}

                  />
                  <button id="clear-search-box"
                  onClick={this.clear}>x</button>
                </div>    
                <button className="search-box-button"
                onClick={this._search}>Feed Me!</button>
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
