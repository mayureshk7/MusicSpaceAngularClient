import { Component, OnInit } from '@angular/core';
import {ChartsServiceClient} from '../../services/charts.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs: any;
  constructor(private chartsService: ChartsServiceClient, private router: Router) { }

  ngOnInit() {
    this.chartsService.getTopTracks()
      .then(songs => {
        console.log("songs", songs)
        this.songs=songs
      })
  }

  getTrack(trackName: string, artistName: string) {
    if(trackName === undefined || trackName === "" || artistName === undefined || artistName === "") {
      this.router.navigate(['fallback'])
    }
    else {
      this.router.navigate(['artists', artistName, 'tracks',trackName])
    }

  }
}
