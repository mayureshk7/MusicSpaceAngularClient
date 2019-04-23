import { Component, OnInit } from '@angular/core';
import {ChartsServiceClient} from '../../services/charts.service.client';

import {Router} from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  artists: any;

  constructor(private chartsService: ChartsServiceClient,
              private router: Router) { }

  ngOnInit() {
    this.chartsService.getTopArtists()
      .then(artists => {
        console.log("artists", artists)
        this.artists=artists
      })
  }

  getArtist(id: any, mbid: any) {

    if(id !== undefined && id !== "" && id !== 0) {
      this.router.navigate(['artist', id]);
    }
    else if(mbid === undefined || mbid === "") {
      this.router.navigate(['fallback'])
    }
    else {
      this.router.navigate(['artist', mbid]);
    }

  }
}
