import {Injectable} from '@angular/core';


@Injectable()
export class UserServiceClient {

  login = (user) => fetch('http://localhost:8080/api/login', {
    method : 'post',
    body: JSON.stringify(user),
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json());

}



