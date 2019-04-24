import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TrackServiceClient} from '../../services/track.service.client';

@Component({
  selector: 'app-my-track',
  templateUrl: './my-track.component.html',
  styleUrls: ['./my-track.component.css']
})
export class MyTrackComponent implements OnInit {

  trackId: number;
  track: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private trackService: TrackServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.trackId = params['trackId']
    })

    this.trackService.getTrackById(this.trackId)
      .then(track => this.track=track)
  }


}
