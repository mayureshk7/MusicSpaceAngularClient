import {Injectable} from '@angular/core';


@Injectable()
export class UserServiceClient {

  googlelogin = (user) => fetch('http://localhost:8080/api/googleLogin', {
    method : 'post',
    body: JSON.stringify(user),
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json());

  profile = () => {
    console.log("Client service called")
    return fetch('http://localhost:8080/api/profile', {
      method : 'get',
      credentials: "include",
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => console.log(response.json()));
  }

}



