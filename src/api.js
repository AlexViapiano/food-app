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

  requestSignup = (email, password) => (
    superagent
    .post(`${API_HOST}/auth/users`)
    .send({ email, password })
  )
 

  postAddress = (address) => (
    superagent
    .post(`${API_HOST}/places/search`)
    .send({address})
    )

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


}



export default new Api();