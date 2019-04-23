import {Injectable} from '@angular/core';

const baseUrl = 'http://localhost:8080'
@Injectable()
export class TrackServiceClient {

  findTrackByDetails = (artist, track) => fetch('https://sp19-s1-project-server-java.herokuapp.com/api/artists/' + artist + '/tracks/' + track , {
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
}
