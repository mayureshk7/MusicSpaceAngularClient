import {Injectable} from '@angular/core';


@Injectable()
export class TrackServiceClient {

  baseUrl = "http://localhost:8080"
  // baseUrl = "https://sp19-s1-project-server-java.herokuapp.com";

  findTrackByDetails = (artist, track) => fetch(this.baseUrl + `/api/artists/${artist}/tracks/${track}` , {
    method : 'get',
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  // getTopArtists = () => fetch('http://localhost:8080/api/artists/top', {
  //   method : 'get',
  //   credentials: "include",
  //   headers: {
  //     'content-type': 'application/json'
  //   }
  // }).then(response => response.json())
  //
  // getTopTracks =  () => fetch('http://localhost:8080/api/tracks/top', {
  //   method : 'get',
  //   credentials: "include",
  //   headers: {
  //     'content-type': 'application/json'
  //   }
  // }).then(response => response.json())
  likeTrack = (trackId) => fetch(this.baseUrl + `/api/user/tracks/${trackId}/like`, {
    method: 'get',
    credentials: 'include'
  }).then(response => response.json())

  dislikeTrack = (trackId) => fetch(this.baseUrl + `/api/user/tracks/${trackId}/dislike`, {
    method: 'get',
    credentials: 'include'
  }).then(response => response.json())

  getTrackById = (trackId) => fetch(this.baseUrl + `/api/track/${trackId}`, {
    method: 'get',
    credentials: 'include'
  }).then(response => response.json())

  uploadTrack = (artistId, track) => fetch(this.baseUrl + `/api/artists/${artistId}/track/upload`, {
    method: 'post',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(track)
  }).then(response => response.json())

  getMyTracks = (artistId) => fetch(this.baseUrl + `/api/artists/${artistId}/my/tracks`, {
    method: 'get',
    credentials: 'include'
  }).then(response => response.json())

  getMyTrackById = (trackId) => fetch(this.baseUrl + `/api/my/tracks/${trackId}`, {
    method: 'get',
    credentials: 'include'
  }).then(response => response.json())
}



