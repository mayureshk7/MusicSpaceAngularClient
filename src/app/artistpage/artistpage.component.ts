import { Component, OnInit } from '@angular/core';
import {ChartsServiceClient} from '../../services/charts.service.client';

@Component({
  selector: 'app-artistpage',
  templateUrl: './artistpage.component.html',
  styleUrls: ['./artistpage.component.css']
})

export class ArtistpageComponent implements OnInit {

  artist : any;
  constructor(private chartsService: ChartsServiceClient) { }

  ngOnInit() {
    this.chartsService.getArtist()
      .then(artist => {
        console.log("artists", artist)
        this.artist=artist
      })
  }

}
