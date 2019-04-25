import {Injectable} from '@angular/core';

@Injectable()
export class ArtistServiceClient {

  baseUrl = "http://localhost:8080"
  // baseUrl = "https://sp19-s1-project-server-java.herokuapp.com";

  getArtist =  (idOrMbid) => fetch(this.baseUrl+`/api/artists/${idOrMbid}`, {
    method : 'get',
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  getTopAlbums =  (idOrMbid) => fetch(this.baseUrl+`/api/artists/${idOrMbid}/albums`, {
    method : 'get',
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  getSimilar =  (idOrMbid) => fetch(this.baseUrl+`/api/artists/${idOrMbid}/similar`, {
    method : 'get',
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  getYoutubeResults = (query) => fetch(this.baseUrl + `/api/artists/${query}/videos`, {
    method: 'get',
    credentials: 'include'
  }).then(response => response.json());

  updateArtist = (artistId, artist) => fetch(this.baseUrl + `/api/artists/${artistId}`, {
    method: 'put',
    credentials: 'include',
    body: JSON.stringify(artist),
    headers: {
      'content-type':'application/json'
    }
  }).then(response => response.json())

  getEvents = (artistName) => fetch(this.baseUrl + `/api/artists/${artistName}/events`, {
    method: 'get',
    credentials: 'include',
  }).then(response => response.json())
}
