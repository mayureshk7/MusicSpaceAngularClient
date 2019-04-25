import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TrackServiceClient} from '../../services/track.service.client';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-upload-track',
  templateUrl: './upload-track.component.html',
  styleUrls: ['./upload-track.component.css']
})
export class UploadTrackComponent implements OnInit {

  artistId: number;
  trackName: string;
  audioUrl: string;
  imageUrl: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private trackService: TrackServiceClient, private cookieService: CookieService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.artistId = params['artistId'];
    });

    if (this.cookieService.check("type") && this.cookieService.get("type") !== 'artist') {
      alert("Page restricted to artists")
      this.router.navigate(['/'])
    }
  }

  uploadTrack() {
    if(this.trackName === undefined || this.trackName === "") {
      alert("Give your track a name")
    }
    else {
      let track = {trackName: this.trackName, audioUrl: this.audioUrl, imageUrl: this.imageUrl}
      this.trackService.uploadTrack(this.artistId, track)
        .then(track =>
          this.router.navigate(['/profile', 'artist', 'edit']))
    }
  }

}
