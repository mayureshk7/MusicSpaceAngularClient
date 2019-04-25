import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  user: any;

  isOwn: boolean;
  userId: number;

  /*  artist = {
      userName: 'MickyMouse',
      firstName: 'Micky',
      email: 'mick@minnie.com',
      lastName: 'Mouse',
      address: 'Disney',
      city: 'Cartoon',
      country: 'Animation',
      bio: 'Hi I am Micky Mouse. I am the cutest.'
    }*/


  constructor(private userService: UserServiceClient,
              private cookieService: CookieService,
              private router: Router, private activatedRoute: ActivatedRoute) {
  }

  updateUser = () => {
    this.user.pictureUrl = "https://www.cmcautomobiles.co.tz/cmc/wp-content/uploads/2017/06/index.png";
    this.userService
      .updateUserProfile(this.user)
      .then(user => {
          console.log(this.user)
            alert("User Profile Updated")
      });
  }


  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.userId = params['userId']
      // console.log(this.userId)
      if(this.cookieService.check('isLoggedIn') && this.cookieService.get('isLoggedIn') === 'true' &&
        this.cookieService.check('type') && this.cookieService.get('type') === 'user') {
        this.userService.profile()
          .then(user => {
            this.user = user
            this.isOwn = true;
          })
      }
      else if(this.cookieService.check('isLoggedIn') && this.cookieService.get('isLoggedIn') === 'true' &&
        this.cookieService.check('type') && this.cookieService.get('type') === 'artist') {
        this.isOwn = false;
        this.userService.getProfileById(this.userId)
          .then(user => this.user = user)
      }
      else {
        alert("Please Sign In first");
        this.router.navigate([''])
      }
    })

  }

  deleteUser(userId) {
    this.userService.deleteUser(userId)
      .then(response => this.router.navigate(['/'], {}));
  }


}
