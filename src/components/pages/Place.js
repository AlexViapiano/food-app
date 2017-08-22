import React, {Component} from 'react';
import api from '../../api';
import auth from '../../auth';
import MapContainer from '../elements/map';
// import Bites from './Bites';
//import { Link } from 'react-router';
import './Place.css';

import CreateComment from '../elements/CreateComment';
import PlaceInfo from '../elements/PlaceInfo'
import Comments from '../elements/Comments'


export default class Place extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      place: {},
      photoUrl: "",
      initialCenter: {},
      bite: [],
      comments: []
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
        });
      })
    })
    .then(
      api.getComments(this.props.params.id)
      .then(res => {
        //console.log("fetching comments", res.body)
        this.setState({
          comments: res.body
        })
      })
    )
  }



 _handlePostComment = (comment) => {
    
    var placeId = this.props.params.id;

    api.postComment(comment, placeId, auth.getToken())
    .then(res => {
        console.log(this.state.comments, res, "yeahhhhhhhhhhhhhh")
      let comments = this.state.comments.concat(res.body)
      this.setState({
        comments
      })

    })

  }


   
  render() {
    const isLoggedIn = auth.isLoggedIn()
    let bite = this.state.bite
    let place = this.state.place
    let photoUrl = this.state.photoUrl
    let initialCenter = this.state.initialCenter
    let comments = this.state.comments

    return (
      <div className="placePage">
          <br></br>
          <div className="map-box">  
            <div className="map-container" >
              {initialCenter !== {} ? <MapContainer bitesInfo={bite} initialCenter={initialCenter} /> : null}  
            </div>
          </div>

          <PlaceInfo place={place} photoUrl={photoUrl}/>

          <Comments comments={comments} />

          <br></br>

          {isLoggedIn ? <CreateComment onPostComment={this._handlePostComment} /> : null}

      </div>
      
    ); 
  } 

}






