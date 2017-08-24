import React, {Component} from 'react';
import api from '../../api';
import auth from '../../auth';
import './Profile.css';

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
}


componentWillMount() {
    api.getProfile()
    .then(res => {
          this.setState({ 
               profile: res.body
          })
    })
}


  render() {
    const isLoggedIn = auth.isLoggedIn();
    let avatarUrl = (isLoggedIn && auth.getUser()) ? auth.getUser().avatarUrl : "";
    let userProfile = this.state.profile;
    console.log(userProfile);

    return (
      <div className="profilePage">

            <h1>Under Construction!</h1>
            <br></br>
            <h1>Profile Page</h1>
            <br></br>
            <div className="menu__header">
                {(isLoggedIn) ? <img src={avatarUrl} alt="profile-pic" className="menu__avatar"/>
                    : <img src="" alt="" className="menu__avatar"/>}
            </div>
            <br></br>
            <p>Edit your Gravatar (profile pic) at:</p>
            <a href="https://en.gravatar.com/">https://en.gravatar.com/</a>
            <br></br>
            
            <h1>User Info</h1>
            <h3>Name: {userProfile.firstName} {userProfile.lastName}</h3>
            <h3>eMail: {userProfile.email}</h3>
            <h3>Created At: {userProfile.createdAt}</h3>

      </div>
    );
  }

}