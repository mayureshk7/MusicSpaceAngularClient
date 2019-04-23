import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  query:string;
  type:string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }


  search() {
    this.router.navigate(['search' , this.type], {queryParams:{query: this.query}});
  }
}
