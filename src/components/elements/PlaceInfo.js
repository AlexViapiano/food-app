import React, {Component} from 'react';
// import api from '../../api';

var Rating = require('react-rating');

export default class PlaceInfo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
 
    };
  }


  render() {

    let place = this.props.place;
    let photoUrl = this.props.photoUrl;

    return (
        <div>

          <h1>{place.name}</h1>
          <img src={photoUrl} alt={photoUrl}></img>
          <br></br>
          <p>Address: {place.formatted_address}</p>
          <a href={place.website}>{place.website}</a>
          <p></p>
          <a href="tel:{place.formatted_phone_number}">{place.formatted_phone_number}</a>
          <p> </p>

          <div>
            <Rating
              empty="fa fa-star-o fa-2x"
              full="fa fa-star fa-2x"
              initialRate={place.rating}
              readonly
              stop={5}
            />
          </div>


           <div>
            {place.price_level !== undefined ?
              <div>
                <p>Price Level:</p>
                <Rating
                    empty="fa fa-credit-card fa-2x"
                    full="fa fa-credit-card-alt fa-2x"
                    initialRate={place.price_level}
                    readonly
                    stop={4}
                  />
              </div>
            : null }
          </div>

          <p>Store hours:</p>
          <div>
            {place.opening_hours ? 
              place.opening_hours.weekday_text.map((hours, idx) => 
                <div key={idx}>{hours}</div>
              )
              : null }
          </div>
          <br></br>

          <div>
            <h2>Comments:</h2>
            {place.reviews ?
              place.reviews.map((review, idx) => {
              return(
                <div key={idx}>
                  <p>-----------------------------------------------------------</p>
                  <h2>{review.author_name} (Google account)</h2>
                  <p>Comment: {review.text}</p>
                </div>
                )}
              )
              : null }
          </div>

      	</div>

    )
  }



}


