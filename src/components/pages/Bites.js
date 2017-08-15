import React, {Component} from 'react';
import api from '../../api';
import BiteCard from '../elements/BiteCard';
import Search from '../elements/Search';
import auth from '../../auth';
import MapContainer from '../elements/map';
import './Bites.css';


export default class Bites extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      bites: []
    };
  }

   _handleSearch = (address) => {
    api.postAddress(address)
    .then(res => {
          console.log(res.body, "res.body inside api call");
          this.setState({ 
               bites: res.body
          })
    })
  }
  

  // componentWillMount() {

  // }

  // componentDidMount() {
  //   this.fetchBitesData()
  // }
  
  // fetchBitesData = () => {
  //     Promise.all([
  //       api.call(),
  //       api.call()
  //     ])
  //     .then(res => {
  //       this.setState({
          
  //       })
  //     })
  //     .catch(console.error)

  // }

  //    _fetchBite = () => {
  //   api.get()
  //   .then(res => {
  //     this.setState({  })
  //   })
  //   .catch(console.error)
  // }

   
  render() {
    // let { bites } = this.state
    let bites = this.state.bites 
    // let bites = "hi, I'm bites"
    console.log(this, "bites")
    return (
      <div className="bitesPage">
        <Search _handleSearch={this._handleSearch}/>
        <div className="test">  
          <div className="map-container">
            <MapContainer bitesInfo={bites}/>
          </div>
        </div>
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
