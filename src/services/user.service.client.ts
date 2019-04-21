import {Injectable} from '@angular/core';


@Injectable()
export class UserServiceClient {

  googlelogin = (user) => fetch('https://sp19-s1-project-server-java.herokuapp.com/api/googleLogin', {
    method : 'post',
    body: JSON.stringify(user),
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json());

  profile = () => {
    console.log("Client service called")
    return fetch('https://sp19-s1-project-server-java.herokuapp.com/api/profile', {
      method : 'get',
      credentials: "include",
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

}



