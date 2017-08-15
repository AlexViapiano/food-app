import React, {Component} from 'react';
import './Search.css';
import api from '../../api';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

// import auth from '../../auth';


//const ENTER = 13;

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {},
    this.onChange = (address) => this.setState({ address })
   // console.log(this, "this in search")
  this._handleSearch = this.props._handleSearch.bind(this);
 }
 _handleTyping = (e) => {
    
    if (this.state && this.state.error) {
      this.setState({ 
        error: null 
    })
    }
    // if (e.keyCode===ENTER) {
    //   this._handleSearch()
    // }
  }

  search = (e) => {
    e.preventDefault();
    this.props._handleSearch(this.refs.keyword.value)
    // this._handleSearch(this.refs.keyword.value)
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
  	return(

  			<form onSubmit={this.search}>
          <PlacesAutocomplete inputProps={inputProps} />
          <button type ="submit">Submit</button>
        </form>

  		)
  }
}
