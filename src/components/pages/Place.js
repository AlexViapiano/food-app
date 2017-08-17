import React, {Component} from 'react';
import api from '../../api';
//import auth from '../../auth';
import MapContainer from '../elements/map';
// import Bites from './Bites';
import { Link } from 'react-router';
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
          console.log(res.body, "= place res")
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
    
    console.log(this.props)

    let bite = this.state.bite
    let place = this.state.place
    let photoUrl = this.state.photoUrl
    let initialCenter = this.state.initialCenter

    console.log(initialCenter)

    return (
      <div className="placePage">
          <Link to={`/`}>Home</Link>
          <br></br>
          <img src={photoUrl} alt={photoUrl}></img>

          <br></br>
          <h1>{place.name}</h1>
          <p>Address: {place.formatted_address}</p>
          <a href="tel:{place.formatted_phone_number}">{place.formatted_phone_number}</a>
          <p>Rating: {place.rating}</p>
          <a href={place.website}>{place.website}</a>
          <div>
            {place.opening_hours ? 
              place.opening_hours.weekday_text.map(hours =>
                <div>{hours}</div>
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

