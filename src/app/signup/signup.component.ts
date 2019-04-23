import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private service: UserServiceClient,
              private router: Router,
              private cookieService: CookieService) { }
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
    if(this.user.password!== null && this.user.password === this.user.confirmPassword &&
      this.user.userName !== null &&  this.user.userName !== "") {
      this.service.signup(this.user)
        .then(user => {
          console.log("user", user);
          if (user.id !== undefined) {
            this.cookieService.set("isLoggedIn", 'true');
            this.router.navigate(["/home"])
          }
          else {
            alert("Username in use, try a different one")
          }

        });
    }
  }

  ngOnInit() {
  }

}
