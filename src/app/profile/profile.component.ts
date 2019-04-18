import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  constructor(private userService: UserServiceClient) { }

  ngOnInit() {
    console.log("onInit called")
    this.userService.profile()
      .then(user => {
        console.log("User Profile",user);
        this.user = user
      })
  }

}
