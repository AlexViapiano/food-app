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
      place: {}
    };
  }


  componentWillMount() {

    console.log(this.props.params.id, "this.props");

    api.getPlaceInfo(this.props.params.id)
    .then(res => {
          console.log(res.body, "res in place")
          this.setState({ 
               place: res.body.result
          })
    })
  }
   
  render() {
    let place = this.state.place 


    return (
      <div className="placePage">
          <Link to={`/`}>Home</Link>
          <div className="place-map-container">
            {place !== {} ? <MapContainer /> : null}  
          </div>
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
      </div>
      
    ); 
  } 

}

