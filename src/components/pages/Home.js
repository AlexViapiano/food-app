import React, {Component} from 'react';
// import api from '../../api';
import HomeSearchButton from '../elements/HomeSearchButton';
import './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
   };
  }
 
  render() {

    
    return (
      <div className="home">

        <div className="inner">
          <div className="content">
            <HomeSearchButton />
          </div>
        </div>
      </div>
    );
  }

}
