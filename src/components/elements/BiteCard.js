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
          Rating:
          <Rating
            initialRate={rating}
          />
        </p>
        <div>
          {price_level !== undefined ? <p>Price Level: {price_level} / 4</p> : null}
        </div>
        <br></br>
      </div>
    );
  }

}