import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 
export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    
    // binding this to event-handler functions 
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }


  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
 

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }


  render() {
    if(this.props.bitesInfo === undefined || this.props.bitesInfo.length === 0) {
       return null;
    } 
    else {
      return (
          <Map className="map"
            google={this.props.google} 
            style={{width: '90%', height: '50%', position: 'relative'}}
            initialCenter={this.props.bitesInfo[0].geometry.location}
            zoom={15}>

            <Marker onClick={this.onMarkerClick}
              name={'Current location'} />

            { this.props.bitesInfo.map(b =>
              <Marker onClick={this.onMarkerClick}
                key={b.id}
                name={b.name}
                position={b.geometry.location}
              /> 
            )}
     
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>

          </Map>
        );
    } 

  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCGHLFTTV-WaZ81ZXgOA2p9VOPuttiesWg'
})(MapContainer)