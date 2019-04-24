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

  /*  user = {
      userName: 'MickyMouse',
      firstName: 'Micky',
      email: 'mick@minnie.com',
      lastName: 'Mouse',
      address: 'Disney',
      city: 'Cartoon',
      country: 'Animation',
      bio: 'Hi I am Micky Mouse. I am the cutest.'
    }*/

  userName: string;

  constructor(private userService: UserServiceClient, private cookieService: CookieService, private router: Router) {
  }

  updateUser = () => {
    this.userService
      .updateUserProfile(this.user)
      .then(user => {
          console.log(this.user)
      });
  }


  ngOnInit() {
    if(this.cookieService.check('isLoggedIn') && this.cookieService.get('isLoggedIn') === 'true' &&
    this.cookieService.check('type') && this.cookieService.get('type') === 'user') {
      this.userService.profile()
        .then(user => {
          this.user = user
        })
    }
    else {
      alert("Please Sign In first");
      this.router.navigate([''])
    }

  }

}
