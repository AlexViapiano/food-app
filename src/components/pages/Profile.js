import React, {Component} from 'react';
import api from '../../api';
import auth from '../../auth';
import './Profile.css';

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // profile: {}
    };
}


componentWillMount() {
    // api.getProfile()
    // .then(res => {
    //       this.setState({ 
    //            profile: res.body
    //       })
    // })
}


  render() {
    const isLoggedIn = auth.isLoggedIn();
    let avatarUrl = (isLoggedIn && auth.getUser()) ? auth.getUser().avatarUrl : "";
    let firstName = (isLoggedIn && auth.getUser()) ? auth.getUser().firstName : "";
    let lastName = (isLoggedIn && auth.getUser()) ? auth.getUser().lastName : "";
    let email = (isLoggedIn && auth.getUser()) ? auth.getUser().email : "";
    let createdAt = (isLoggedIn && auth.getUser()) ? auth.getUser().users_createdAt : "";

    return (
      <div className="profilePage">

            <h1>Profile Page</h1>
            <h1>Under Construction!</h1>
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
            <p>Edit your Gravatar (profile pic) at:</p>
            <a href="https://en.gravatar.com/">https://en.gravatar.com/</a>
            <br></br>

            <h1>Profile Info</h1>
            <h3>eMail: {email}</h3>
            <h3>Created At: {createdAt}</h3>
      </div>
    );
  }

}