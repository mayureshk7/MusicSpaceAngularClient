// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'user/:userId/profile', component: ProfileComponent},
];

export const AppRouting = RouterModule.forRoot(routes);
