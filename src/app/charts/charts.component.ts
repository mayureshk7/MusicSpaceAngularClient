import { Component, OnInit } from '@angular/core';
import {ChartsServiceClient} from '../../services/charts.service.client';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  tracks: any;
  artists: any;

  constructor(private chartsService: ChartsServiceClient) { }

  ngOnInit() {
    this.chartsService.getTopArtists()
      .then(artists => {
        console.log("artists", artists)
        this.artists=artists
      })
  }

}
