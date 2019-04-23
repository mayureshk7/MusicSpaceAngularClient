import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css']
})
export class ExplorePageComponent implements OnInit {

  query: string;
  type: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.type = 'artists';
  }

  search() {
    this.router.navigate(['home'])
      .then(res => this.router.navigate(['search' , this.type], {queryParams: {query: this.query}}));
  }
}
