import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../../services/user.service.client";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {TrackServiceClient} from '../../services/track.service.client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any
  followedArtists: any;
  likedSongs: any;

  constructor(private userService: UserServiceClient, private cookieService: CookieService,
              private router: Router, private trackService: TrackServiceClient) {
  }

  ngOnInit() {
    if (this.cookieService.check('isLoggedIn') && this.cookieService.get('isLoggedIn') === 'true' &&
    this.cookieService.check('type') && this.cookieService.get('type') === 'user') {

      this.userService.profile()
        .then(user => {
          this.user = user
        })

      this.userService.getFollowingArtists()
        .then(artists => {
          console.log("artists: follow : ", artists)
          this.followedArtists = artists
        })

      this.userService.getLikedSongs()
        .then(tracks => {
          console.log("tracks", tracks)
          this.likedSongs = tracks
        })

    }
    else {
      alert("Please sign in as a user");
      this.router.navigate([''])
    }

  }

  getArtist(mbId: any) {

    if(mbId === undefined || mbId === "") {
      this.router.navigate(['fallback'])
    }
    else {
       this.router.navigate(['artist', mbId]);
    }

  }


  // Call this method when a song is clicked
  getTrack(trackId) {
    this.trackService.getTrackById(trackId)
      .then(response => {
        console.log(response)
        let trackName = response.trackName;
        let artistName = response.artistName;
        console.log("trackName", trackName)
        console.log("artistName", artistName)
        this.router.navigate(['/artists', artistName, 'tracks', trackName])
      })
  }

}
