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
            
            <div className="pic-address-email-phone">
              <h1>{place.name}</h1>
              <img src={photoUrl} alt={photoUrl}></img>
              <br></br>
              <p>{place.formatted_address}</p>
            <div className="site-phone">
              <a href={place.website}>Website</a>
              <p></p>
              <a href="tel:{place.formatted_phone_number}">{place.formatted_phone_number}</a>
            <p> </p>
            </div>
          </div>
          <div className="restaurant-info">
            <div className="rating-stars">
              <h2 className="info-title">Rating</h2>
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
                <h2 className="info-title">Price level</h2>
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
          {place.opening_hours ? <h2 className="info-title">Store hours</h2> : null }
            {place.opening_hours ? 
              place.opening_hours.weekday_text.map((hours, idx) => 
                <div key={idx}>{hours}</div>
              )
              : null }
            </div>
          </div>
          <br></br>
        </div>

      	</div>
    )
  }



}


