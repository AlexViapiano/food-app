import React, {Component} from 'react';
// import api from '../../api';
import './PlaceInfo.css';

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
          <div className="place-info">
            <h1>{place.name}</h1>
            <img src={photoUrl} alt={photoUrl}></img>
            <br></br>
            <p>{place.formatted_address}</p>
            <a href={place.website}>Website</a>
            <p></p>
            <a href="tel:{place.formatted_phone_number}">{place.formatted_phone_number}</a>
            <p> </p>
          <div className="restaurant-info">
            <div className="rating-stars">
              {place.rating !== undefined ?
                    <Rating
  
                      empty="fa fa-star-o fa-2x"
                      full="fa fa-star fa-2x"
                      initialRate={place.rating}
                      readonly
                      stop={5}
                    />
              : null }
            </div> 


           <div>
            {place.price_level !== undefined ?
              <div className="price-level">
                <Rating
                    empty="fa fa-barcode"
                    full="fa fa fa-usd fa-2x"
                    initialRate={place.price_level}
                    readonly
                    stop={4}
                  />
              </div>
              : null }
            </div>


          <div className="store-hours">
          {place.opening_hours ? <p className="store-hours-title">Store hours:</p> : null }
            {place.opening_hours ? 
              place.opening_hours.weekday_text.map((hours, idx) => 
                <div key={idx}>{hours}</div>
              )
              : null }
            </div>
          </div>
          <br></br>
        </div>

          <div className="comments-text">
            <h2 className="comments-title">Comments</h2>
            {place.reviews ?
              place.reviews.map((review, idx) => {
              return(
                <div className="reviews" key={idx}>
                  <div className="separate-reviews">
                    <h2 className="user-name-title">{review.author_name} </h2>
                    <p>{review.text}</p>
                  </div>
                </div>
                )}
              )
              : null }
          </div>

      	</div>
    )
  }



}


