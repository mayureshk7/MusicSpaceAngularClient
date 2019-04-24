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
      if(this.user.type === 'fan') {
        this.service.signup(this.user)
          .then(user => {
            console.log("user", user);
            if (user.id !== undefined && user.id !== 0) {
              this.cookieService.set("isLoggedIn", 'true');
              this.cookieService.set("type", 'user');
              this.router.navigate(["/home"])
            }
            else {
              alert("Username in use, try a different one")
            }

          });
      }
      else if(this.user.type === 'artist') {
        this.service.signUpArtist(this.user)
          .then(artist => {
            console.log("artist", artist);
            if (artist.id !== undefined && artist.id !== 0) {
              this.cookieService.set("isLoggedIn", 'true');
              this.cookieService.set("type", 'artist');
              this.router.navigate(['/profile', 'artist'])
            }
            else {
              alert("Username in use, try a different one")
            }

          });
      }

    }
  }

  ngOnInit() {
  }

}
