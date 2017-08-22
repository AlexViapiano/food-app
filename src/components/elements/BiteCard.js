import React, {Component} from 'react';
import { Link } from 'react-router';
//import auth from '../../auth';

import './BiteCard.css';
var Rating = require('react-rating');

export default class BiteCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { name, address, place_id, price_level, rating} = this.props



    return (
      <div>
        <Link to={`/place/${place_id}`} className="biteCardLink">
          <div className="biteCardDiv">

            <div className="bite-card">
              <h2>{ name }</h2>
            </div>
            <p>{address}</p>

            <div className="bite-icon">
                {rating !== undefined ?
                      <Rating
                        className="biteInfo"
                        empty="fa fa-star-o fa-2x"
                        full="fa fa-star fa-2x"
                        initialRate={rating}
                        readonly
                        stop={5}
                      />
                : null } 
            </div> 
            <div>
              {price_level !== undefined ?
                <div>
                    <Rating
                        className="bitePrice"
                        empty="fa fa-barcode"
                        full="fa fa fa-usd fa-2x"
                        initialRate={price_level}
                        readonly
                        stop={4}
                    />
                </div>
              : null }
             </div> 
          </div>
        </Link>
      </div>
    );
  }

}



