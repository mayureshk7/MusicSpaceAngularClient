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
    usrName: '',
    email: '',
    pwd: '',
    cpwd: '',
    type: ''
  };
  createUser = () => {
    this.service
      .signup(this.user)
      .then(user => {
        if(typeof user === "string") {
          this.user = JSON.parse(user)
        }
      });
  }

  ngOnInit() {
  }

}
