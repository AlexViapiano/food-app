import React, {Component} from 'react';
import api from '../../api';
//import auth from '../../auth';
//import MapContainer from '../elements/map';
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
          console.log(res.body.result, "res in place")
          this.setState({ 
               place: res.body.result
          })
    })
  }
   
  render() {
    let place = this.state.place 
    var str = '';

    try{
      for(var i=0; i <= 7; i++){
        str += place.opening_hours.weekday_text[i];
      }

      console.log(str)

    }
    catch(e){
      str='No work time';
    }

    return (
      <div className="placePage">
          <Link to={`/`}>Home</Link>
          <br></br>
          <h1>{place.name}</h1>
          <p>Address: {place.formatted_address}</p>
          <p>Phone Number: {place.formatted_phone_number}</p>
          <p>Rating: {place.rating}</p>
          <p>Open: {str}</p>
          <p>Website: {place.website}</p>
      </div>
      
    ); 
  } 

}
