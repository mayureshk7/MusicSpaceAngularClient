import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../../services/user.service.client";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.css']
})
export class ArtistProfileComponent implements OnInit {

  user: any

  constructor(private userService: UserServiceClient, private cookieService: CookieService, private router: Router) {
  }

  updateUser = () => {
    this.userService
      .updateUserProfile(this.user)
      .then(user => {
        if (typeof user === "string") {
          this.user = JSON.parse(user)
          console.log(this.user)
        }
      });
  }


  ngOnInit() {
    if (this.cookieService.check('isLoggedIn') && this.cookieService.get('isLoggedIn') === 'true') {
      this.userService.profile()
        .then(user => {
          this.user = user
          alert(JSON.stringify(this.user))
        })
    }
    else {
      alert("Please Sign In first");
      this.router.navigate([''])
    }
  }

}
