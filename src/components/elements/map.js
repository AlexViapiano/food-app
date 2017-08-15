import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// var BitesInfo = 
 
// ... 
 
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapInitialCenter: {}
    };
  }
  componentWillMount() {
    this.setState({
      mapInitialCenter: {lat: "43", lng: "-73"}
    })
  }

  componentDidUpdate(prevProps, prevState) {
/*
    if(this.state.bitesInfo && (this.state.bitesInfo[0] === prevState.bitesInfo[0]) {
      return false
    } else {
      this.setState({
        mapInitialCenter: this.state.bitesInfo[0].geometry.location
      })
    }
    */

    let temp = (this.state.bitesInfo)?this.props.bitesInfo:{lat:25, lng:-43};
    if(this.state.mapInitialCenter){
      console.log('attempt', this.props.bitesInfo)
      // this.setState({
      //     mapInitialCenter: temp
      // })
  }   
}

render() {
  if(this.props.bitesInfo === undefined || this.props.bitesInfo.length === 0) {
     return null;
    
   } else {
  var lat = this.props.bitesInfo[0].geometry.location.lat
  var lng = this.props.bitesInfo[0].geometry.location.lng
  return (
      <Map className="map"
        google={this.props.google} 
        style={{width: '90%', height: '50%', position: 'relative'}}
        initialCenter={this.props.bitesInfo[0].geometry.location}
        zoom={15}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    );
  } 
  console.log(this, "map")
  console.log(lng, lat, "long and lat")
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCGHLFTTV-WaZ81ZXgOA2p9VOPuttiesWg'
})(MapContainer)