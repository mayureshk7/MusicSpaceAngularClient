import { Component, OnInit } from '@angular/core';
import {TrackServiceClient} from '../../services/track.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  track: any
  artist: string;
  trackName: string;
  constructor(private trackService: TrackServiceClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.artist = params['artist'];
      this.trackName = params['track'];
    });

    this.trackService.findTrackByDetails(this.artist, this.trackName)
      .then(track => {
      console.log('track', track)
      this.track = track;
    });
  }

}
