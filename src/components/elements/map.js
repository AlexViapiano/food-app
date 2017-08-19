import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import api from '../../api';
 
export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
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
    // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    if(this.props.bitesInfo === undefined || this.props.bitesInfo.length === 0) {
      return (
        <p>Oops! There's not much open near you. Try searching a less specific location</p>
        );
    } 
    else {

      var showMarker = true;

      var initialCenter = api.getLocation();

      if (!initialCenter) {
        initialCenter = this.props.bitesInfo[0].geometry.location;
        showMarker = false;
      }

      return (
        <div className="map-wrapper"
          style={{width: '90%', height: '50%', position: 'absolute'}}>
          <Map className="map"
            google={this.props.google} 
            initialCenter={initialCenter}
            clickableIcons={false}
            zoom={15}
            styles={[
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]}
          >


          {showMarker ?
           <Marker className="markerMan" onClick={this.onMarkerClick}
              name={'Current location'}
              icon='https://cdn4.iconfinder.com/data/icons/little-boy/128/Little_Boy_Grey.png' />
            : null}

           

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
          </div>

        );
    } 
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCGHLFTTV-WaZ81ZXgOA2p9VOPuttiesWg'
})(MapContainer)