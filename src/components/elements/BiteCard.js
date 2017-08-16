import React, {Component} from 'react';
import { Link } from 'react-router';
//import auth from '../../auth';
import './BiteCard.css';

export default class BiteCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { name, address, place_id } = this.props

    return (
      <div className="biteCardDiv">
        <Link to={`/place/${place_id}`}>
          <div className="bite-card">
            <h2>{ name }</h2>
          </div>
        </Link>  
        <p>{address}</p>
        <br></br>
      </div>
    );
  }

}
