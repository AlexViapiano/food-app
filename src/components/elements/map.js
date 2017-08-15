import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
// ... 
 
export class MapContainer extends Component {
render() {
    return (
      <Map className="map"
      	google={this.props.google} 
      	style={{width: '40%', height: '50%', position: 'relative'}}
      	initialCenter={{
            lat: 45.5017,
            lng: -73.5673
        }} 
        zoom={15}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCGHLFTTV-WaZ81ZXgOA2p9VOPuttiesWg'
})(MapContainer)