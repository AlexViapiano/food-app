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
      <div className="biteCardDiv">
        <Link to={`/place/${place_id}`}>
          <div className="bite-card">
            <h2>{ name }</h2>
          </div>
        </Link>
        <p>{address}</p>
        <p>
          <Rating
            empty="fa fa-star-o fa-2x"
            full="fa fa-star fa-2x"
            initialRate={rating}
            readonly
            stop={5}
          />
        </p>
        <div>
          {price_level !== undefined ? 
            <p>
              Price level:
              <br></br>
              <Rating
                empty="fa fa-credit-card fa-2x"
                full="fa fa-credit-card-alt fa-2x"
                initialRate={price_level}
                readonly
                stop={4}
              />
            </p> : null}
        </div>
        <br></br>
      </div>
    );
  }

}