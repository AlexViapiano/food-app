import React, {Component} from 'react';
import './Search.css';
import api from '../../api';
// import PlacesAutocomplete from 'react-places-autocomplete';
// import auth from '../../auth';


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
 }


  componentWillMount() {

      var onPositionReceived = (position) => {
      var latlng = position.coords.latitude+","+position.coords.longitude;

      api.getAddressFromLatLng(latlng)
      .then(res => {
          this.setState({
            search: res.text
          })
      })
      }

      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onPositionReceived);
      }

  } 


  currentAddressSearch = (e) => {
    e.preventDefault();
    this.props._handleSearch(this.refs.key.value)
  }


  search = (e) => {
    e.preventDefault();
    this.props._handleSearch(this.refs.keyword.value)
  }

  _handleChange = (e) => {

    console.log(e.target.value)

    this.setState({
      search: e.target.value
    })
  }

  render() {

    var currentAddress = this.props.currentAddress;

  	return(
          <div>
            <h3>Search using my current location!</h3>
            <form className="searchForm">
                <input type="text" 
                  ref="key" 
                  placeholder="your current address" 
                  className="search-box-input"
                  value={this.state.search}
                  onChange={this._handleChange}
                />
                <button className="search-box-button"
                onClick={this.currentAddressSearch}>&#x1f50d; Feed me!</button>
            </form>
          </div>
    		)
  }
}



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