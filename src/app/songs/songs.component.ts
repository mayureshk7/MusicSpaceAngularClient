import { Component, OnInit } from '@angular/core';
import {ChartsServiceClient} from '../../services/charts.service.client';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs: any;
  constructor(private chartsService: ChartsServiceClient) { }

  ngOnInit() {
    this.chartsService.getTopTracks()
      .then(songs => {
        console.log("songs", songs)
        this.songs=songs
      })
  }

}
