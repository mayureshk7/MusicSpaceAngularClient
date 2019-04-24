import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../../services/user.service.client";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any;
  followedArtists: any;


  constructor(private userService: UserServiceClient, private cookieService: CookieService, private router: Router) {
  }



  ngOnInit() {
    if(this.cookieService.check('isLoggedIn') && this.cookieService.get('isLoggedIn') === 'true' &&
    this.cookieService.check('type') && this.cookieService.get('type') === 'user') {
      this.userService.getFollowingArtists()
        .then(artists => {
          console.log("artists: follow : ", artists)
          this.followedArtists = artists
        })
    }
    else {
      alert("Please sign in as a user");
      this.router.navigate([''])
    }

  }

}
