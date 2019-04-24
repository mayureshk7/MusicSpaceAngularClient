import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TrackServiceClient} from '../../services/track.service.client';

@Component({
  selector: 'app-my-tracks',
  templateUrl: './my-tracks.component.html',
  styleUrls: ['./my-tracks.component.css']
})
export class MyTracksComponent implements OnInit {

  artistId;
  tracks: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private trackService: TrackServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.artistId = params['artistId']
    })

    this.trackService.getMyTracks(this.artistId)
      .then(tracks => {
        console.log(tracks)
        this.tracks = tracks
      })
  }

}
