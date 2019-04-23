import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  user: any;

  /*  user = {
      userName: 'MickyMouse',
      firstName: 'Micky',
      email: 'mick@minnie.com',
      lastName: 'Mouse',
      address: 'Disney',
      city: 'Cartoon',
      country: 'Animation',
      bio: 'Hi I am Micky Mouse. I am the cutest.'
    }*/

  userName: string;

  constructor(private userService: UserServiceClient, private activatedRoute: ActivatedRoute) {
  }

  updateUser = () => {
    this.userService
      .updateUserProfile(this.user)
      .then(user => {
        if (typeof user === "string") {
          this.user = JSON.parse(user)
          console.log(this.user)
        }
      });
  }


  ngOnInit() {
/*    console.log("onInit called")
    this.activatedRoute.params
      .subscribe(params => {
        this.userName = params.userName;
      })*/

    this.userService.profile()
      .then(user => {
        //console.log("User Profile",user);
        this.user = user
      })

/*    this.userService.findUserProfileByUserName(this.userName)
      .then(user => this.user = user)*/
  }

}
