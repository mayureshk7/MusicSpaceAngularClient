import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  /*user: any;*/

  user = {
    userName: 'MickyMouse',
    firstName: 'Micky',
    email: 'mick@minnie.com',
    lastName: 'Mouse',
    address: 'Disney',
    city: 'Cartoon',
    country: 'Animation',
    bio: 'Hi I am Micky Mouse. I am the cutest.'
  }

  constructor(private userService: UserServiceClient) {  }

  ngOnInit() {
    this.userService.profile()
      .then(user => {
        console.log("User Profile",user);
        this.user = user
      })
  }

}
