import { Component, OnInit } from '@angular/core';
import {ArtistServiceClient} from '../../services/artist.service.client';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artistpage',
  templateUrl: './artistpage.component.html',
  styleUrls: ['./artistpage.component.css']
})

export class ArtistpageComponent implements OnInit {

  artist : any;
  idOrMbId: string;
  constructor(private artistService: ArtistServiceClient,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.idOrMbId = params['artistId'];
    });

    this.artistService.getArtist(this.idOrMbId)
      .then(artist => {
        console.log("artists", artist)
        this.artist=artist
        console.log(this.artist.name)
      })
  }

}
