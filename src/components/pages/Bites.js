import React, {Component} from 'react';
import api from '../../api';
import BiteCard from '../elements/BiteCard';
import auth from '../../auth';
import './Bites.css';


export default class Bites extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    };
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
    return (
      <div className="bitesPage">
        <div className="bitesMap">
          <p>this will be the map</p>
        </div>
        <div className="bites">
          {/* need to render bite cards here */}
       
        </div>
 
      </div>
      
    ); 
  } 

}
