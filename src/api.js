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
 
 /*this is a keyword search */
  /*postSearch = (keyword) => (
    superagent
   Need to .post their search terms
    .get(`${API_HOST}/bites`)
    .send({keyword})
    .then(console.log(keyword, "keyword in api call"))
    ) */

  postAddress = (address) => (
    superagent
  /* Need to .post their search terms*/
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