import { Component, OnInit } from '@angular/core';
import {ChartsServiceClient} from '../../services/charts.service.client';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;
  searchResults: any
  searchType: string
  constructor(private router: Router, private chartsService: ChartsServiceClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => this.searchType = params['type'])
    this.activatedRoute.queryParams.subscribe(params => this.query = params['query'])

    this.chartsService.getSearchResults(this.searchType, this.query)
      .then(results => this.searchResults = results)
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

  getTrack(trackName: string, artistName: string) {
    console.log(trackName)
    console.log(artistName)
    if(trackName === undefined || trackName === "" || artistName === undefined || artistName === "") {
      this.router.navigate(['fallback'])
    }
    else {
      this.router.navigate(['artists', artistName, 'tracks',trackName])
    }

  }
}
