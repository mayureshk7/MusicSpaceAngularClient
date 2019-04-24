import {Injectable} from '@angular/core';


@Injectable()
export class TrackServiceClient {
  baseUrl = "https://sp19-s1-project-server-java.herokuapp.com";
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
}
