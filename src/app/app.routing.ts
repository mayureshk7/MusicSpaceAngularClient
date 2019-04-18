// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path: 'user/:userId/profile', component: ProfileComponent},
];

export const AppRouting = RouterModule.forRoot(routes);
