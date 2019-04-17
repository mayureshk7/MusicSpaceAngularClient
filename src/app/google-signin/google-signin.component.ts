import {Component, ElementRef, AfterViewInit} from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
declare const gapi: any;

@Component({
  selector: 'google-signin',
  templateUrl: './google-signin.component.html'
})
export class GoogleSigninComponent implements AfterViewInit {

  constructor(private element: ElementRef, private userService: UserServiceClient) {
    console.log('ElementRef: ', this.element);
  }

  private clientId:string = '177528931826-q16bsh4liic96ds36rhhc07ai4vemd8i.apps.googleusercontent.com';

  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/youtube',
    'https://www.googleapis.com/auth/youtube.readonly'
  ].join(' ');

  public auth2: any;
  public googleInit() {
    let that = this;
    gapi.load('auth2', function () {
      that.auth2 = gapi.auth2.init({
        client_id: that.clientId,
        cookiepolicy: 'single_host_origin',
        scope: that.scope
      });
      that.attachSignin(that.element.nativeElement.firstChild);
    });
  }
  public attachSignin(element) {
    let that = this;
    this.auth2.attachClickHandler(element, {},
      function (googleUser) {

        let profile = googleUser.getBasicProfile();
        console.log(googleUser.getAuthResponse())
        let authToken = googleUser.getAuthResponse().access_token;
        let idToken = googleUser.getAuthResponse().id_token;
        console.log('Token || ' + idToken);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        that.userService.login({accessToken: authToken, idToken: idToken})
          .then(response => console.log(response))
      }, function (error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

  ngAfterViewInit() {
    this.googleInit();
  }

}
