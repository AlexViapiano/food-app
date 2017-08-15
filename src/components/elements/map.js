import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapInitialCenter: {}
    };
  }
  componentWillMount() {
    this.setState({
      mapInitialCenter: {lat: "45", lng: "-73"}
    })
  }

  componentDidUpdate(prevProps, prevState) {
    var firstBite = this.props.bitesInfo[0]
    var prevBite = prevProps.bitesInfo[0]
    console.log(prevBite, "prevBite")
    console.log(firstBite, "firstBite")

    if(firstBite && (firstBite.geometry === prevBite.geometry)) {
      return false
    } else {
      this.setState({
        mapInitialCenter: firstBite.geometry.location
      })
    }
    

    /*let temp = (this.state.bitesInfo)?this.props.bitesInfo:{lat:25, lng:-43};
    if(this.state.mapInitialCenter){
      console.log('attempt', this.props.bitesInfo)
      this.setState({
          mapInitialCenter: temp
      })
  }*/
    
    //console.log(prevState, "prevState")
    //console.log(prevProps, "prevProps")
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
        style={{width: '40%', height: '50%', position: 'relative'}}
        initialCenter={this.state.mapInitialCenter}
        zoom={15}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    );
  } 
  console.log(this, "map")
  console.log(lng, lat, "long and lat")
    // return (
    //   <Map className="map"
    //   	google={this.props.google} 
    //   	style={{width: '40%', height: '50%', position: 'relative'}}
    //   	initialCenter={{
    //         lat: lat,
    //         lng: lng
    //     }} 
    //     zoom={15}>
 
    //     <Marker onClick={this.onMarkerClick}
    //             name={'Current location'} />
    //   </Map>
    // );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCGHLFTTV-WaZ81ZXgOA2p9VOPuttiesWg'
})(MapContainer)