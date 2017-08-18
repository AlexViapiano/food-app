import api from './api';


module.exports = {

  login(email, password) {
    if (localStorage.token) {
      throw new Error('Already logged in')
    }
    else {
      return api.requestLogin(email, password)
      .then(res => localStorage.token = res.body.token)
      .catch( error => error.response.body)
      //.then( function(result){
       // return localStorage.token = result.body.token
      //})
    }
  },

  signup(email, password) {
    if (localStorage.token) {
      throw new Error('Already logged in')
    }
    else {
      return api.requestSignup(email, password)
      .then(res => api.requestSignup(email, password))
      .catch( error => error.response.body)
      //.then(res => localStorage.token = res.body.token)
    }
  },

  getToken() {
    return localStorage.token
  },

  logout() {
    return api.requestLogout(localStorage.token)
    .then(res => localStorage.clear())
  },

  isLoggedIn() {
    return !!localStorage.token
  },
  
}
