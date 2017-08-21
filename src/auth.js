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
      .catch( error => error.response.body)
      // .then( function(result){
      //  return localStorage.token = result.body.token
      // })
    }
  },

  signup(email, password, firstName, lastName) {
    if (localStorage.token) {
      throw new Error('Already logged in')
    }
    else {
      return api.requestSignup(email, password, firstName, lastName)
      .catch( error => error.response.body)
      // .then(res => localStorage.token = res.body.token)
    }
  },

  getToken() {
    return localStorage.token
  },

  getUser() {
    return JSON.parse(localStorage.user) 
  },

  logout() {
    return api.requestLogout(localStorage.token)
    .then(res => delete localStorage.token)
    .then(res => delete localStorage.user)
  },

  isLoggedIn() {
    return !!localStorage.token
  },
  
}