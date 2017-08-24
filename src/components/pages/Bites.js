import React, {Component} from 'react';
import api from '../../api';
import BiteCard from '../elements/BiteCard';
import MapContainer from '../elements/map';
import LoadingModal from '../modals/LoadingModal';
import NoResultsMessage from '../modals/NoResultsMessage';
import { Link } from 'react-router';
import './Bites.css';

export default class Bites extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      bites: [], 
      initialCenter: {}, 
      loaded: false, 
      next_page_token: undefined
    };
    this.handleClick = this.handleClick.bind(this);
  }


  componentWillMount() {

    api.postAddress(this.props.params.address)
    .then(res => {
          this.setState({ 
               bites: res.body.results, 
               initialCenter: res.body.initialLocation, 
               loaded: true, 
               next_page_token: res.body.next_page_token
          })
    })
  }

  handleClick = (next_page_token) => {

    api.postPageToken(this.state.next_page_token)
    .then(res => {
      let newResults = this.state.bites.concat(res.body.results)
      this.setState({
        bites: newResults, 
        next_page_token: res.body.next_page_token
      })
    })


  }
   
  render() {
    let bites = this.state.bites 
    let initialCenter = this.state.initialCenter
    let next_page_token = this.state.next_page_token
   
      if(bites.length === 0 && this.state.loaded === false) {
        return (
          <LoadingModal />
        );
      } else if(bites.length === 0 && this.state.loaded === true) {
        return (
          <NoResultsMessage />
        );
      } else if(bites.length !== 0 && this.state.loaded === true) {
          return (
          <div className="bitesPage">
            <Link to={`/`} className="searchHomeLink">Change Location</Link>

              <div className="map-container">
                {initialCenter !== {} ? <MapContainer bitesInfo={bites} initialCenter={initialCenter} /> : null}  
              </div>

              <div className="bites-wrapper">

                <div className="searchResults">
                      <h4>Results for: {this.props.params.address}</h4>
                </div>  

                { bites.map(b =>
                  <BiteCard
                    key={b.id}
                    name={b.name}
                    address={b.vicinity}
                    place_id={b.place_id}
                    price_level={b.price_level}
                    rating={b.rating}
                  />
                )} 

                {next_page_token !== undefined ? <button className="loadMoreButton" onClick={this.handleClick} >load more</button> : null}
              
              </div>
        
          </div>
        ); 
      } 
  }
}