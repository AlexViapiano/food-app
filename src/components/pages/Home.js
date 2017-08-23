import React, {Component} from 'react';
import Search from '../elements/Search';
import api from '../../api';
import './Home.css';
export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
}


componentWillMount() {
  api.clearLocation()
}


  render() {

    return (
      <div className="home">
        <div className="inner">
          <div className="content">
            <Search _handleSearch={this._handleSearch}/>
          </div>
        </div>
      </div>
    );
  }

}