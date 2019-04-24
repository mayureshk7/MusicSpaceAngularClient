import {Component, Input, OnInit} from '@angular/core';
import {ArtistServiceClient} from '../../services/artist.service.client';

@Component({
  selector: 'app-ytresults',
  templateUrl: './ytresults.component.html',
  styleUrls: ['./ytresults.component.css']
})
export class YTResultsComponent implements OnInit {

  @Input()
  query: string;
  results: any;
  constructor(private artistService: ArtistServiceClient) { }

  ngOnInit() {
    this.artistService.getYoutubeResults(this.query)
      .then(result => {
        console.log("result", result)
        this.results=result.items;
        console.log("this.results",this.results)
      })
  }

}
