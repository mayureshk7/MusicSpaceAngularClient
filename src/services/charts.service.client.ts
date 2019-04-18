import {Injectable} from '@angular/core';


@Injectable()
export class ChartsServiceClient {

  getTopArtists = () => fetch('http://localhost:8080/api/artists/top', {
    method : 'get',
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}