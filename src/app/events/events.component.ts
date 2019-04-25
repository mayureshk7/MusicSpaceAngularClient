import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArtistServiceClient} from '../../services/artist.service.client';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  artistName
  events: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private artistService: ArtistServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>
      this.artistName = params['artistName']
    )
    this.artistService.getEvents(this.artistName)
      .then(events => {
        console.log(events)
        this.events = events
      })

  }

}
