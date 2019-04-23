import {Injectable} from '@angular/core';

@Injectable()
export class ChartsServiceClient {

  baseUrl = "http://localhost:8080"

  getTopArtists = () => fetch(this.baseUrl +'/api/artists/top', {
    method : 'get',
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  getTopTracks =  () => fetch(this.baseUrl + '/api/tracks/top', {
    method : 'get',
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())


  getSearchResults = (type, query) => {
    if(type == "artists"){
       return fetch(this.baseUrl +'/api/artists/search?query='+ query, {
        method : 'get',
        credentials: "include",
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => response.json())
    }else if(type == "tracks"){
      return fetch(this.baseUrl +'/api/tracks/search?query=' + query, {
        method : 'get',
        credentials: "include",
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => response.json())
    }
  }
}
