import React, {Component} from 'react';
import Search from '../elements/Search';
// import Geolocation from '../elements/geolocation';
//import { Link } from 'react-router';
import {browserHistory as history} from 'react-router'
import api from '../../api';
//import HomeSearchButton from '../elements/HomeSearchButton';
//import api from '../../api';
import './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    position: {}, 
    address: ""
   };
  }
 
  componentWillMount() {
    console.log(this.state, "this.state at top of componentwillmount")
    var onPositionReceived = (position) => {
      var latlng = position.coords.latitude+","+position.coords.longitude;
      api.getAddressFromLatLng(latlng)
      .then(res => {
        this.setState({
          address: res.text
        })
      })
      .then(console.log(this.state)) 
    }
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onPositionReceived);
    }
  } 

   _handleSearch = (address) => {
    history.push(`/bites/${address}`)
  }


  render() {
    let address = this.state.address;
    if(this.state.address !== "") {
    console.log(this.state, "this")
    console.log(this.state.address, "address in home.js")
  }
    return (
      <div className="home">

        <div className="inner">
          <div className="content">
            <Search _handleSearch={this._handleSearch} currentAddress={address}/>
          </div>
        </div>
      </div>
    );
  }

}
