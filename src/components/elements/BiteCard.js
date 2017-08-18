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
        <div>
           {price_level === 1 ? <p>Price Level: $</p> : 
            price_level === 2 ? <p>Price Level: $$</p> :
            price_level === 3 ? <p>Price Level: $$$</p> :
            price_level === 4 ? <p>Price Level: $$$$</p> 
           : null}
        </div>
        <p>Rating:</p>
        <p>
          <Rating
            initialRate={rating}
          />
        </p>
        <br></br>
      </div>
    );
  }

}