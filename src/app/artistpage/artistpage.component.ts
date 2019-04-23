import { Component, OnInit } from '@angular/core';
import {ChartsServiceClient} from '../../services/charts.service.client';
import {UserServiceClient} from "../../services/user.service.client";

@Component({
  selector: 'app-artistpage',
  templateUrl: './artistpage.component.html',
  styleUrls: ['./artistpage.component.css']
})

export class ArtistpageComponent implements OnInit {

/*  textChange : String = 'follow';*/
  followUnfollow = true;
  artist : any;
/*  devanshi: String;*/


  constructor(private chartsService: ChartsServiceClient, private userService: UserServiceClient) {
 /*   this.textChange = "follow";
    this.devanshi = 'devanshi';*/
  }

  ngOnInit() {
    /*this.textChange = "follow";*/
    this.chartsService.getArtist()
      .then(artist => {
        console.log("artists", artist)
        this.artist=artist
      })
  }


  followArtist = () => {
/*    if (this.textChange === 'follow') {
      this.textChange = 'unfollow'
      console.log("inside follow")
      this.userService
        .followArtist(this.artist.id)
        .then(response => this.textChange = 'unfollow')
    }else{
      console.log('inside unfollow');
      this.textChange = 'follow'
      this.userService
        .unfollowArtist(this.artist.id)
        .then(response => this.textChange = 'follow')

    }*/
    this.followUnfollow = !this.followUnfollow;
    if (this.followUnfollow === true) {
      this.userService.followArtist(this.artist.id);
    } else {
      this.userService.unfollowArtist(this.artist.id);
    }
  }

}
