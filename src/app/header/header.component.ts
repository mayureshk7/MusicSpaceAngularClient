import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // user: any;
  isLoggedIn
  constructor(private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.isLoggedIn = this.cookieService.get("isLoggedIn")
  }

  goHome() {
    this.router.navigate(['home'])
  }
}
