import React, {Component} from 'react';
import api from '../../api';
import auth from '../../auth';
import MapContainer from '../elements/map';
// import Bites from './Bites';
//import { Link } from 'react-router';
//import './Place.css';
import CreateComment from '../elements/CreateComment'

var Rating = require('react-rating');

export default class Place extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      place: {},
      photoUrl: "",
      initialCenter: {},
      bite: [],
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
    .then(
      api.getComments(this.props.params.id)
      .then(res => {
        this.setState({
          comments: res.body
        })
      })
    )
    })

  }



 _handlePostComment = (comment) => {
    
    var placeId = this.props.params.id;

    api.postComment(comment, placeId, auth.getToken())
    .then(res => {

      let comments = this.state.comments.concat(res.body)

      this.setState({
        comments
      })

    })

  }


   
  render() {

    let bite = this.state.bite
    let place = this.state.place
    let photoUrl = this.state.photoUrl
    let initialCenter = this.state.initialCenter
    let comments = this.state.comments

    return (
      <div className="placePage">
          <h1>{place.name}</h1>
          <img src={photoUrl} alt={photoUrl}></img>
          <br></br>
          <p>Address: {place.formatted_address}</p>
          <a href="tel:{place.formatted_phone_number}">{place.formatted_phone_number}</a>
          <p className="rating">
            <Rating
              empty="fa fa-star-o fa-2x"
              full="fa fa-star fa-2x"
              initialRate={place.rating}
              readonly
              stop={5}
            />
          </p>
          <a href={place.website}>{place.website}</a>
          <br></br>
          <p>Store hours:</p>
          <div>
            {place.opening_hours ? 
              place.opening_hours.weekday_text.map((hours, idx) => 
                <div key={idx}>{hours}</div>
              )
              : null }

          </div>
          <br></br>
          <img src={place.icon} alt={place.icon}></img>
          <h2>NiteBite comments</h2>
          <div>
            {comments ? comments.map(comment => {
              return(
                <div>
                  <p>-----------------------------------------------------------</p>
                  <p>Author: {comment.userId}</p>
                  <p>Review: {comment.comment}</p>
                </div>
                )}
              )
              : null }
          </div>

          {auth.isLoggedIn ? <CreateComment onPostComment={this._handlePostComment} /> : null}

          <h2>Google comments</h2>
          <div>
            {place.reviews ? 
              place.reviews.map((review, idx) => {
              return(
                <div key={idx}>
                  <p>-----------------------------------------------------------</p>
                  <h3>{review.author_name}</h3>

                  <p>
                    <Rating
                      empty="fa fa-star-o fa-2x"
                      full="fa fa-star fa-2x"
                      initialRate={place.rating}
                      readonly
                      stop={5}
                    />
                  </p>
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

