import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TrackServiceClient} from '../../services/track.service.client';

@Component({
  selector: 'app-my-tracks',
  templateUrl: './my-tracks.component.html',
  styleUrls: ['./my-tracks.component.css']
})
export class MyTracksComponent implements OnInit {


  @Input()
  artistId;

  tracks: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private trackService: TrackServiceClient) { }

  ngOnInit() {

    this.trackService.getMyTracks(this.artistId)
      .then(tracks => {
        console.log(tracks)
        this.tracks = tracks
      })
  }

}
