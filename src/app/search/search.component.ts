import { Component, OnInit } from '@angular/core';
import {ChartsServiceClient} from '../../services/charts.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query = {type: 'artists', search: ''}
  searchResults: any
  searchString: string
  searchType: string
  constructor(private router: Router, private chartsService: ChartsServiceClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        /*alert(params.aName)*/
        this.searchString = params.query,
          this.searchType = params.type
      });
    this.chartsService.getSearchResults(this.searchType, this.searchString)
      .then(searchResults => this.searchResults = searchResults)
  }

  search(){
    this.router.navigate(['home'])
      .then( resp => this.router.navigate(['search' , this.query.type, this.query.search]));
  }

}
