import React, {Component} from 'react';
import { Link } from 'react-router';
import auth from '../../auth';
import './BiteCard.css';

export default class BiteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {

    let { name, description, id } = this.props
    // console.log(this.state)
    return (
      <div className="biteCardDiv">
      <Link to={`/bites/${id}`}>
        <div className="bite-card">
          <h2>{ name }</h2>
          <p>{ description }</p>
        </div>
        </Link>  
        </div>
    );
  }

}
