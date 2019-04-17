import {Component, OnInit} from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';
import {UserServiceClient} from '../../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  ngOnInit(): void {  }

  constructor( private socialAuthService: AuthService,
               private userService: UserServiceClient) {}

  public socialSignIn() {
    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log("Google" + ' sign in data : ' , userData);
        this.userService.login({idToken: userData.idToken})
      }
    );
  }
}
