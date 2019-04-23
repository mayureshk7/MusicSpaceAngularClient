import {Injectable} from '@angular/core';

@Injectable()
export class ChartsServiceClient {

  getTopArtists = () => fetch('https://sp19-s1-project-server-java.herokuapp.com/api/artists/top', {
    method : 'get',
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  getTopTracks =  () => fetch('https://sp19-s1-project-server-java.herokuapp.com/api/tracks/top', {
    method : 'get',
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  getArtist =  () => fetch('https://sp19-s1-project-server-java.herokuapp.com/api/artists/f4fdbb4c-e4b7-47a0-b83b-d91bbfcfa387', {
    method : 'get',
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  getSearchResults = (type, query) => {
    if(type == "artists"){
       return fetch('https://sp19-s1-project-server-java.herokuapp.com/api/artists/search?query='+ query, {
        method : 'get',
        credentials: "include",
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => response.json())
    }else if(type == "tracks"){
      return fetch('https://sp19-s1-project-server-java.herokuapp.com/api/tracks/search?query=' + query, {
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
