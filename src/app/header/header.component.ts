import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {UserServiceClient} from '../../services/user.service.client';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // artist: any;
  isLoggedIn
  type
  constructor(private router: Router, private cookieService: CookieService, private userService: UserServiceClient) { }

  ngOnInit() {
    this.isLoggedIn = this.cookieService.get("isLoggedIn")
    this.type = this.cookieService.get("type")
  }

  goHome() {
    this.router.navigate(['home'])
  }

  logoutUser() {
    this.userService.logout()
      .then(res => {
        this.cookieService.delete("isLoggedIn")
        this.router.navigate([''])
      })
  }

  navigateToProfile() {
    this.router.navigate(['profile'])
  }
}
