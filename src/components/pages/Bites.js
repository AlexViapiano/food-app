import React, {Component} from 'react';
import api from '../../api';
import BiteCard from '../elements/BiteCard';
import Search from '../elements/Search';
import auth from '../../auth';
import MapContainer from '../elements/map';
import { Link } from 'react-router';
import './Bites.css';


export default class Bites extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      bites: []
    };
  }


  componentWillMount() {

    // console.log(this.props.params.address) 

    api.postAddress(this.props.params.address)
    .then(res => {
          // console.log(res.body, "res.body inside api call");
          this.setState({ 
               bites: res.body
          })
    })
  }
   
  render() {
    // let { bites } = this.state
    let bites = this.state.bites 
    console.log(bites, "bites")
    // console.log(this.props, "this.props")
    return (
      <div className="bitesPage">
        <Link to={`/`}>Change Location</Link>
        <br></br>
        <div className="test">  
          <div className="map-container">
            {bites !== [] ? <MapContainer bitesInfo={bites}/> : null}  
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
                  key={b.place_id}
                  id={b.id}
                  name={b.name}
                  open_now={b.opening_hours}
                  address={b.vicinity}
                />
              )}
        </div>
      </div>
      
    ); 
  } 

}
