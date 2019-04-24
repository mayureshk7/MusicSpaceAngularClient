import {Injectable} from '@angular/core';

@Injectable()
export class ChartsServiceClient {

  baseUrl = "http://localhost:8080"
  // baseUrl = "https://sp19-s1-project-server-java.herokuapp.com";

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
    console.log(type)
    console.log(query)
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
