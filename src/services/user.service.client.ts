import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {

  baseUrl = "https://sp19-s1-project-server-java.herokuapp.com"

  googlelogin = (user) => fetch(this.baseUrl+'/api/googleLogin', {
    method : 'post',
    body: JSON.stringify(user),
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  findAllUsers = () => {
    return fetch(this.baseUrl + '/api/admin/users', {
      method : 'get',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  profile = () => {
    console.log('Client service called');
    return fetch(this.baseUrl + '/api/profile', {
      method : 'get',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  signup = (user) => fetch(this.baseUrl+'/api/signup', {
    method: 'post',
    body: JSON.stringify(user),
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => {
    console.log(response.json());
    return response.json()
  })
  .then(response => JSON.stringify(response))
    .catch(error => console.log(error))

/*  findUserProfileByUserName = (uname) => fetch
  (`https://sp19-s1-project-server-java.herokuapp.com/api/user/${uname}/profile`)
    .then(response => response.json())*/

  updateUserProfile = (usr) => {
    console.log(usr)
    return fetch(this.baseUrl+'/api/profile', {
      method: 'put',
      body: JSON.stringify(usr),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
  }

  followArtist = (artistId) => fetch(this.baseUrl+`/api/user/artists/${artistId}/follow`,{
    method : 'get',
    credentials: 'include'
  }).then(response => console.log(response.json()))

  unfollowArtist = (artistId) => fetch(this.baseUrl + `/api/user/artists/${artistId}/unfollow`,{
    method : 'get',
    credentials: 'include'
  }).then(response => response.json())

  logout = () => fetch(this.baseUrl + `/api/users/logout`)
    .then(response => response.json())

}
