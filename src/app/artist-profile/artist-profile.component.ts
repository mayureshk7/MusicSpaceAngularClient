import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../../services/user.service.client";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {ArtistServiceClient} from '../../services/artist.service.client';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.css']
})
export class ArtistProfileComponent implements OnInit {

  artist: any
  followingUsers: any;

  constructor(private userService: UserServiceClient,
              private cookieService: CookieService,
              private router: Router,
              private artistService: ArtistServiceClient) {
  }

  // updateUser = () => {
  //   this.userService
  //     .updateUserProfile(this.artist)
  //     .then(artist => {
  //       if (typeof artist === "string") {
  //         this.artist = JSON.parse(artist)
  //         console.log(this.artist)
  //       }
  //     });
  // }


  ngOnInit() {
    if (this.cookieService.check('isLoggedIn') && this.cookieService.get('isLoggedIn') === 'true' &&
    this.cookieService.check('type') && this.cookieService.get('type') === 'artist') {
      this.userService.getArtistProfile()
        .then(artist => {
          this.artist = artist
          // alert(JSON.stringify(this.artist))
        })

      this.userService.getFollowingUsers()
        .then(users => {
          console.log(users)
          this.followingUsers = users
        })
    }
    else {
      alert("Please Sign In as an Artist to access this page");
      this.router.navigate([''])
    }
  }

  updateArtist() {
    this.artistService.updateArtist(this.artist.id, this.artist)
      .then(artist => {
        alert("Profile updated")
        this.artist = artist
      })
  }
}
