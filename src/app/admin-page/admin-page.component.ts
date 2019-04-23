import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  user: any;
  generalUsers: any;

  constructor(private userService: UserServiceClient, private cookieService: CookieService, private router: Router) {
  }

  ngOnInit() {
    if (this.cookieService.check('isLoggedIn') && this.cookieService.get('isLoggedIn') === 'true') {
      this.userService.profile()
        .then(user => {
          this.user = user;
          alert(JSON.stringify(this.user));
        });
    } else {
      alert('Please Sign In first');
      this.router.navigate(['']);
    }

    this.userService.findAllUsers()
      .then(users => {
        this.generalUsers = users
        console.log(this.generalUsers)
      })
  }

}
