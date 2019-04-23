import {Injectable} from '@angular/core';

const baseUrl = 'http://localhost:8080'
@Injectable()
export class TrackServiceClient {



  // findTrackByMId = () => fetch(baseUrl+'/api/artists/')

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
