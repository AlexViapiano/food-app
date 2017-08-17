import React, {Component} from 'react';
import api from '../../api';
import BiteCard from '../elements/BiteCard';
//import Search from '../elements/Search';
//import auth from '../../auth';
import MapContainer from '../elements/map';
import { Link } from 'react-router';
import './Bites.css';


export default class Bites extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      bites: [], 
      initialCenter: {}
    };
  }


  componentWillMount() {


    api.postAddress(this.props.params.address)
    .then(res => {

      console.log(res.body, "Bites res");

          this.setState({ 
               bites: res.body.results, 
               initialCenter: res.body.initialLocation
          })
    })
  }
   
  render() {
    let bites = this.state.bites 
    let initialCenter = this.state.initialCenter

    return (
      <div className="bitesPage">
        <Link to={`/`}>Change Location</Link>
        <br></br>
        <div className="test">  
          <div className="map-container">
            {initialCenter !== {} ? <MapContainer bitesInfo={bites} initialCenter={initialCenter} /> : null}  
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="bites-wrapper">
              { bites.map(b =>
                <BiteCard
                  key={b.id}
                  name={b.name}
                  address={b.vicinity}
                  place_id={b.place_id}
                />
              )}
        </div>
      </div>
      
    ); 
  } 

}
