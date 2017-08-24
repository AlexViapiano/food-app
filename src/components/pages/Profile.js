import React, {Component} from 'react';
import api from '../../api';
import auth from '../../auth';
import './Profile.css';

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      defaultAddressState: ""
    };
}

_handleLocation = () => {
    let { defaultAddress: {value:defaultAddress}  } = this.refs;
    let token = auth.getToken();
    if (defaultAddress) {
      api.updateDefaultAddress(defaultAddress, token)
      .then(res => {
        let address = res.body.defaultAddress;
        this.setState({
          defaultAddressState: address
        })
        let defAddress = this.state.defaultAddressState
        alert(`New default address: ${defAddress}`)
      })
    }
}


  render() {
    const isLoggedIn = auth.isLoggedIn();
    let avatarUrl = (isLoggedIn && auth.getUser()) ? auth.getUser().avatarUrl : "";
    let firstName = (isLoggedIn && auth.getUser()) ? auth.getUser().firstName : "";
    let lastName = (isLoggedIn && auth.getUser()) ? auth.getUser().lastName : "";
    let email = (isLoggedIn && auth.getUser()) ? auth.getUser().email : "";
    let createdAt = (isLoggedIn && auth.getUser()) ? auth.getUser().users_createdAt : "";
    let defaultAddress = (isLoggedIn && auth.getUser()) ? auth.getUser().users_defaultAddress : "";

    return (
      <div className="profilePage">

            <h1 className="profile-head-text">Your Profile</h1>
            <br></br>

            <div className="menu__header">
                {(isLoggedIn) ?
                    <img src={avatarUrl} alt="profile-pic" className="menu__avatar"/>
                :  <img src="" alt="" className="menu__avatar"/>}
                {(isLoggedIn) ?        
                    <p className="loggedInGreeting">{firstName} {lastName} </p> 
                : null}     
            </div>

            <br></br>
        <div className="gravatar-info">
            <p>Edit your profile picture</p>
            <a href="https://en.gravatar.com/">here!</a>
        </div>
            <br></br>
        <div className="profile-info">
            <h1>Profile Info</h1>
            <div className="email-createdAt">
                <h3><span>eMail</span> {email}</h3>
                <h3><span>Created At</span> {createdAt}</h3>
            </div>
        </div>

        <h3 className="enter-address-title">Enter a default address below</h3>
            <input type="text" 
            ref="defaultAddress"
            value={defaultAddress}
            className="user-address-input"
            />
            <button onClick={this._handleLocation} className="set-location-button">Set Location</button>
      </div>
    );
  }

}