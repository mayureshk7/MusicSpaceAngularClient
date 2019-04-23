import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private service: UserServiceClient) { }
  user = {
    userName: '',
    email: '',
    familyName: '',
    givenName: '',
    password: '',
    confirmPassword: '',
    type: ''
  };
  createUser = () => {
    //var c = document.getElementById("tnc").checked
    if(this.user.password!== null && this.user.password === this.user.confirmPassword /*&& c === true*/) {
      this.service
        .signup(this.user)
        .then(user => {
          if (typeof user === "string") {
            this.user = JSON.parse(user)
          }
        });
    }
  }

  ngOnInit() {
  }

}
