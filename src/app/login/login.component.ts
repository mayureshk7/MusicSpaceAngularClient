import {Component, OnInit} from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  ngOnInit(): void {  }

  constructor( private socialAuthService: AuthService ) {}

  public socialSignIn() {
    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log("Google" + ' sign in data : ' , userData);
        // Now sign-in with userData
        // ...

      }
    );
  }
}
