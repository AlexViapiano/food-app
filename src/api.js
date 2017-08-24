import superagent from 'superagent'
import { API_HOST } from './config'


class Api {
  
  requestLogin = (email, password) => (
    superagent
    .post(`${API_HOST}/auth/sessions`)
    .send({ email, password })
  )
  
  requestLogout = (token) => (
    superagent
    .delete(`${API_HOST}/auth/sessions`)
    .set('Authorization', `token ${token}`)
  )

  requestSignup = (email, password, firstName, lastName) => (
    superagent
    .post(`${API_HOST}/auth/users`)
    .send({ email, password, firstName, lastName })
  )

  getUser = (token) => (
    superagent
    .get(`${API_HOST}/auth/me`)
    .set('Authorization', `token ${token}`)
  )

  getProfile = (token) => (
    superagent
    .get(`${API_HOST}/auth/profile`)
    .set('Authorization', `token ${token}`)
  )

  postAddress = (address) => (
    superagent
    .post(`${API_HOST}/places/search`)
    .send({address})
    .then(res => {
      localStorage.initialLocation = JSON.stringify(res.body.initialLocation)
      return res
    })
  )

  postPageToken = (next_page_token) => (
    superagent
    .post(`${API_HOST}/places/searchMore`)
    .send({next_page_token})
    .then(res => {
      // console.log(res, "res in api.js")
      return res
    })
  )

  getLocation() {
    if(localStorage.initialLocation) {
      return JSON.parse(localStorage.initialLocation)
    }
  }

  clearLocation() {
    delete localStorage.initialLocation
  }

  getAddressFromLatLng = (latlng) => (
    superagent
    .post(`${API_HOST}/places/location`)
    .send({latlng})
  )

  getPlaceInfo = (id) => (
    superagent
    .get(`${API_HOST}/places/${id}`)
  )

  getPhoto = (reference) => (
    superagent
    .post(`${API_HOST}/places/photo`)
    .send({reference})
  )

  getComments = (placeId) => (
    superagent
    .get(`${API_HOST}/places/comment/${placeId}`)
  )

  postComment = (comment, placeId, token) => (
    superagent
    .post(`${API_HOST}/places/comment`)
    .send({comment, placeId})
    .set('Authorization', `token ${token}`)
  )

}



export default new Api();


