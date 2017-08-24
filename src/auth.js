import api from './api';


module.exports = {

  login(email, password) {
    if (localStorage.token) {
      throw new Error('Already logged in')
    }
    else {
      return api.requestLogin(email, password)
      .then(res => localStorage.token = res.body.token)
      .then(res => api.getUser(localStorage.token))
      .then(res => localStorage.user = JSON.stringify(res.body))
    }
  },

  signup(email, password, firstName, lastName) {
    if (localStorage.token) {
      throw new Error('Already logged in')
    }
    else {
      return api.requestSignup(email, password, firstName, lastName)
    }
  },

  getToken() {
    return localStorage.token
  },

  getUser() {
    if(localStorage.user){
      return JSON.parse(localStorage.user)
    }
  },

  logout() {
    return api.requestLogout(localStorage.token)
    .then(res => delete localStorage.token)
    .then(res => delete localStorage.user)
    .catch(res => delete localStorage.token)
  },

  isLoggedIn() {
    return !!localStorage.token
  },
  
}