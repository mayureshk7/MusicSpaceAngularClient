import { Component, OnInit } from '@angular/core';
import {TrackServiceClient} from '../../services/track.service.client';
import {ActivatedRoute} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  likeDislike = true;
  track: any
  artist: string;
  trackName: string;
  isLoggedIn: boolean;
  constructor(private trackService: TrackServiceClient,
              private activatedRoute: ActivatedRoute,
              private cookieService: CookieService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.artist = params['artist'];
      this.trackName = params['track'];
    });

    if (this.cookieService.check("isLoggedIn")&&
      this.cookieService.get("isLoggedIn") === 'true' &&
      this.cookieService.check("type") &&
      this.cookieService.get("type") === 'artist') {
      this.isLoggedIn = true;
    }
    else this.isLoggedIn = false;

    this.trackService.findTrackByDetails(this.artist, this.trackName)
      .then(track => {
      console.log('track', track)
      this.track = track;

      this.likeDislike = !(track.is_liked !== undefined && track.is_liked === true);
      console.log(this.likeDislike)
    });
  }

  likeOrDislikeTrack = () => {
    if(this.likeDislike === true) {
      console.log("track id", this.track.id)
      this.trackService.likeTrack(this.track.id)
        .then(response => {
          this.likeDislike = !this.likeDislike
          console.log(this.likeDislike)
        });
    }
    else if(this.likeDislike === false) {
      console.log("false called")
      this.trackService.dislikeTrack(this.track.id)
        .then(response => {
          console.log(this.likeDislike)
          this.likeDislike = !this.likeDislike
        });
    }

  }
}
