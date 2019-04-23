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

    // this.activatedRoute.params.subscribe(params => console.log(params))
    //
    // this.activatedRoute.queryParams.subscribe(params => console.log(params))

    this.activatedRoute.params.subscribe(params => this.searchType = params['type'])
    this.activatedRoute.queryParams.subscribe(params => this.query = params['query'])

    this.chartsService.getSearchResults(this.searchType, this.query)
      .then(results => this.searchResults = results)

  //   this.readUrlParams((routeParams, queryParams) => {
  //     this.query = queryParams.query
  //     this.searchType = queryParams.searchType
  //     this.chartsService.getSearchResults(this.searchType, this.query)
  //       .then(results => this.searchResults = results)
  //   });
  // }
  //
  // readUrlParams(callback) {
  //   // Nest them together and
  //   this.activatedRoute.queryParams.subscribe(queryParams => {
  //     this.activatedRoute.params.subscribe(routeParams => {
  //       callback(routeParams, queryParams);
  //     });
  //   });

    // const urlParams = combineLatest(
    //   this.activatedRoute.params,
    //   this.activatedRoute.queryParams,
    //   (params, queryParams) => ({ ...params, ...queryParams})
    // );
    //
    // // Subscribe to the single observable, giving us both
    // urlParams.subscribe(routeParams => {
    //   // routeParams containing both the query and route params
    //   console.log("Route params", routeParams)
    //   this.query = routeParams['query']
    //   this.searchType = routeParams['searchType']
    //   // this.loadUserDetail(routeParams.id, routeParams.type);
    //   this.chartsService.getSearchResults(this.searchType, this.query)
    //     .then(searchResults => this.searchResults = searchResults)
    // });

    // console.log("search page on init called")
    // this.activatedRoute.queryParams.subscribe(queryParams => {
    //   this.activatedRoute.params.subscribe(routeParams => {
    //     this.searchType = queryParams['type'];
    //     this.query = routeParams['query'];

    //   });
    // });


  }

  // getSearchResults = (searchType, query) => {
  //   this.chartsService.getSearchResults(searchType, query)
  //     .then(results => this.searchResults = results)
  // }

}
