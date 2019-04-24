import {Component, OnInit} from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';
import {UserServiceClient} from '../../services/user.service.client';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  username: string;
  password: string;
  type: string;
  ngOnInit(): void {  }

  constructor( private socialAuthService: AuthService,
               private userService: UserServiceClient,
               private router: Router,
               private cookieService: CookieService) {}
  public socialSignIn() {
    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log("Google" + ' sign in data : ' , userData);
        this.userService.googlelogin({idToken: userData.idToken})
          .then((user) => {
            console.log(user)
            if(user === {} || user === undefined) {
              alert("Login unsuccessful")
            }
            else {
              this.cookieService.set("isLoggedIn", 'true')
              this.router.navigate(['home'])
            }
          })
      }
    );
  }

  navigateToSignUp() {
    this.router.navigate(['signup'])
  }

  signIn() {

    let creds = {userName: this.username, password: this.password}
    console.log(creds)
    if(this.type === 'user') {
      this.userService.signInUser(creds)
        .then(user => {
          if(user.id !== undefined && user.id !== 0) {
            this.cookieService.set("isLoggedIn", 'true')
            this.router.navigate(["/home"])
          }
          else {
            alert("Incorrect credentials, please try again!")
          }
        })
    }

    else if(this.type === 'artist') {
      this.userService.signInArtist(creds)
        .then(artist => {
          if(artist.id !== undefined && artist.id !== 0) {
            this.cookieService.set("isLoggedIn", 'true')
            this.cookieService.set("type", 'artist')
            this.router.navigate(["/home"])
          }
          else {
            alert("Incorrect credentials, please try again!")
          }
        })

    }

    else {
      //SIgn in admin
    }


  }
}
