import superagent from 'superagent'
//import { API_HOST } from './config'

class Api {
  
  requestLogin = (email, password) => (
    superagent
  {/* Need to .post their session token*/}
    .send({ email, password })
  )
  
  requestLogout = (token) => (
    superagent
  {/* Need to .delete their session token*/}
    .set('Authorization', `token ${token}`)
  )

  requestSignup = (email, password) => (
    superagent
  {/* Need to .post their user info*/}
    .send({ email, password })
  )
 
  getSearch = (keyword) => (
    superagent
  {/* Need to .post their search terms*/}
    .send({keyword})
    .then(console.log(keyword, "keyword in api call"))
    )
  
}

export default new Api();