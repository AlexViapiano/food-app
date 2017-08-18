import React, {Component} from 'react';
import api from '../../api';
//import auth from '../../auth';
import MapContainer from '../elements/map';
// import Bites from './Bites';
//import { Link } from 'react-router';
//import './Place.css';


export default class Place extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      place: {},
      photoUrl: "",
      initialCenter: {},
      bite: []
    };
  }


  componentWillMount() {

    api.getPlaceInfo(this.props.params.id)
    .then(res => {

          this.setState({ 
               place: res.body.result,
               bite: [res.body.result],
               initialCenter: res.body.result.geometry.location
          })
          return res.body.result.photos[0].photo_reference
    })
    .then(reference => {
      api.getPhoto(reference)
      .then(res => {
        this.setState({ 
          photoUrl: res.body.url
      })

    })
  })
  }
   
  render() {

    let bite = this.state.bite
    let place = this.state.place
    let photoUrl = this.state.photoUrl
    let initialCenter = this.state.initialCenter

    return (
      <div className="placePage">
          <h1>{place.name}</h1>
          <img src={photoUrl} alt={photoUrl}></img>
          <br></br>
          <p>Address: {place.formatted_address}</p>
          <a href="tel:{place.formatted_phone_number}">{place.formatted_phone_number}</a>
          <p>Rating:  {place.rating}</p>
          <a href={place.website}>{place.website}</a>
          <p>Price level:  {place.price_level} / 4 ($)</p>
          <br></br>
          <p>Store hours:</p>
          <div>
            {place.opening_hours ? 
              place.opening_hours.weekday_text.map(hours =>
                <div>{hours}</div>
              )
              : null }
          </div>
          <br></br>
          <img src={place.icon} alt={place.icon}></img>
          <h2>Google Reviews</h2>
          <div>
            {place.reviews ? 
              place.reviews.map(review => {
              return(
                <div>
                  <p>-----------------------------------------------------------</p>
                  <p>Author: {review.author_name}</p>
                  <p>Rating: {review.rating} / 5</p>
                  <p>Review: {review.text}</p>
                </div>
                )}
              )
              : null }
          </div>
          <br></br>

          <div className="test">  
            <div className="map-container">
              {initialCenter !== {} ? <MapContainer bitesInfo={bite} initialCenter={initialCenter} /> : null}  
            </div>
          </div>

      </div>
      
    ); 
  } 

}

