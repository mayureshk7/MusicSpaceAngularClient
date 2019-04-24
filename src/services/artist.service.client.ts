import {Injectable} from '@angular/core';

@Injectable()
export class ArtistServiceClient {

  baseUrl = "http://localhost:8080";

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
}
