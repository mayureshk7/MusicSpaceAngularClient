import { Component, OnInit } from '@angular/core';
import {ArtistServiceClient} from '../../services/artist.service.client';
import {Router, ActivatedRoute} from '@angular/router';
import {UserServiceClient} from '../../services/user.service.client';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-artistpage',
  templateUrl: './artistpage.component.html',
  styleUrls: ['./artistpage.component.css']
})

export class ArtistpageComponent implements OnInit {

/*  textChange : String = 'follow';*/
  followUnfollow = true;
  artist: any;
  albums: any;
  similarArtist: any;
  idOrMbId: string;
  isLoggedIn: boolean;
  constructor(private artistService: ArtistServiceClient,
              private activatedRoute: ActivatedRoute,
              private userService: UserServiceClient,
              private cookieService: CookieService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.idOrMbId = params['artistId'];

      if (this.cookieService.check("isLoggedIn") && this.cookieService.get("isLoggedIn") === 'true' &&
        this.cookieService.check("type") && this.cookieService.get("type") === "user") {
        this.isLoggedIn = true;
      }
      else this.isLoggedIn = false;


      this.artistService.getArtist(this.idOrMbId)
        .then(artist => {
          console.log("artists", artist)
          this.artist=artist
          console.log("follow unfollow", artist.is_followed)
          this.followUnfollow = !(artist.is_followed !== undefined && artist.is_followed === true);
          console.log(this.followUnfollow)
        });

      this.artistService.getTopAlbums(this.idOrMbId)
        .then(albums => {
          console.log("albums", albums)
          this.albums = albums
        });

      this.artistService.getSimilar(this.idOrMbId)
        .then(similarArtist => {
          console.log("Similar", similarArtist)
          this.similarArtist = similarArtist
        });
    });



  }

  getArtist(id: any, mbid: any) {

    if(id !== undefined && id !== "" && id !== 0) {
      this.router.navigate(['artist', id])
    }
    else if(mbid === undefined || mbid === "") {
      this.router.navigate(['fallback'])
    }
    else {
      this.router.navigate(['artist', mbid]);
    }

  }

  followArtist = () => {
    if (this.followUnfollow === true) {
      this.userService.followArtist(this.artist.id)
        .then(response => this.followUnfollow = !this.followUnfollow);
    } else {
      this.userService.unfollowArtist(this.artist.id)
        .then(response => this.followUnfollow = !this.followUnfollow);
    }
  }

}
