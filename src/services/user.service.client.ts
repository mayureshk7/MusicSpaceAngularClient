import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {

  baseUrl = "http://localhost:8080"

  googlelogin = (user) => fetch(this.baseUrl+'/api/googleLogin', {
    method : 'post',
    body: JSON.stringify(user),
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  profile = () => {
    console.log('Client service called');
    return fetch(this.baseUrl+'/api/profile', {
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

  followArtist = (artistId) => fetch(`https://sp19-s1-project-server-java.herokuapp.com/api/user/artists/${artistId}/follow`,{
      method : 'get',
    body: JSON.stringify(artistId),
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  unfollowArtist = (artistId) => fetch(`https://sp19-s1-project-server-java.herokuapp.com/api/user/artists/${artistId}/unfollow`,{
    method : 'get',
    body: JSON.stringify(artistId),
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())




}
