import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {

  // baseUrl = "http://localhost:8080"
  baseUrl = "https://sp19-s1-project-server-java.herokuapp.com";

  googlelogin = (user) => fetch(this.baseUrl + '/api/googleLogin', {
    method: 'post',
    body: JSON.stringify(user),
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  findAllUsers = () => {
    return fetch(this.baseUrl + '/api/admin/users', {
      method: 'get',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  findAllArtist = () => {
    return fetch(this.baseUrl + '/api/admin/artists', {
      method: 'get',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  getFollowingArtists = () => {
    return fetch(this.baseUrl + '/api/users/artists', {
      method: 'get',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  profile = () => {
    console.log('Client service called');
    return fetch(this.baseUrl + '/api/profile', {
      method: 'get',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  signup = (user) => fetch(this.baseUrl + '/api/signup/artist', {
    method: 'post',
    body: JSON.stringify(user),
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  /*  findUserProfileByUserName = (uname) => fetch
    (`https://sp19-s1-project-server-java.herokuapp.com/api/user/${uname}/profile`)
      .then(response => response.json())*/

  signUpArtist = (artist) => fetch(this.baseUrl + '/api/signup/artist', {
    method: 'post',
    body: JSON.stringify(artist),
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  updateUserProfile = (usr) => {
    console.log(usr)
    return fetch(this.baseUrl + '/api/profile', {
      method: 'put',
      body: JSON.stringify(usr),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
  }

  followArtist = (artistId) => fetch(this.baseUrl + `/api/user/artists/${artistId}/follow`, {
    method: 'get',
    credentials: 'include'
  }).then(response => console.log(response.json()))

  unfollowArtist = (artistId) => fetch(this.baseUrl + `/api/user/artists/${artistId}/unfollow`, {
    method: 'get',
    credentials: 'include'
  }).then(response => response.json())

  logout = () => fetch(this.baseUrl + `/api/logout`)
    .then(response => response.json())

  signInUser = (credentials) => fetch(this.baseUrl + `/api/users/login`, {
    method: 'post',
    credentials: 'include',
    body: JSON.stringify(credentials),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  signInArtist = (credentials) => fetch(this.baseUrl + `/api/artists/login`, {
    method: 'post',
    credentials: 'include',
    body: JSON.stringify(credentials),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  signInAdmin = (credentials) => fetch(this.baseUrl + `/api/admin/login`, {
    method: 'post',
    credentials: 'include',
    body: JSON.stringify(credentials),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  getArtistProfile = () => fetch(this.baseUrl + `/api/profile/artist`, {
    method: 'get',
    credentials: 'include'
  }).then(response => response.json())

  getLikedSongs = () => fetch(this.baseUrl + `/api/users/songs`, {
    method: 'get',
    credentials: 'include'
  }).then(response => response.json())

  deleteUser = (userId) => fetch(this.baseUrl + `/api/user/${userId}`, {
    method: 'delete',
    credentials: 'include'
  }).then(response => response.json())

  deleteArtist = (artistId) => fetch(this.baseUrl + `/api/artists/${artistId}`, {
    method: 'delete',
    credentials: 'include'
  }).then(response => response.json())

  getFollowingUsers = () => fetch(this.baseUrl + `/api/artist/following/users`, {
    method: 'get',
    credentials: 'include'
  }).then(response => response.json())

  getProfileById = (userId) => fetch(this.baseUrl + `/api/profile/${userId}`, {
    method: 'get',
    credentials: 'include'
  }).then(response => response.json())
}

