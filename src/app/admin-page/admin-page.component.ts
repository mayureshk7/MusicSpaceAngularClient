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
  generalArtists: any;

  constructor(private userService: UserServiceClient, private cookieService: CookieService, private router: Router) {
  }

  ngOnInit() {
    if (this.cookieService.check('isLoggedIn') && this.cookieService.get('isLoggedIn') === 'true' &&
    this.cookieService.check('type') && this.cookieService.get('type') === 'admin') {
      this.userService.findAllUsers()
        .then(users => {
          this.generalUsers = users
          console.log('user', users)
        });
      this.userService.findAllArtist()
        .then(artists => {
          this.generalArtists=artists;
          console.log(this.generalArtists)
        })
    } else {
      alert('Page restricted to admin');
      this.router.navigate(['']);
    }
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId)
      .then(response => this.router.navigate(['/'], {})
        .then(res => this.router.navigate(["/admin"], {})));
  }

  deleteArtist(artistId) {
    this.userService.deleteArtist(artistId)
      .then(response => this.router.navigate(['/'], {})
        .then(res => this.router.navigate(["/admin"], {})));
  }


}
