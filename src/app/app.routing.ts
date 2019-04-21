// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {ChartsComponent} from './charts/charts.component';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'signup', component: SignupComponent}
];

export const AppRouting = RouterModule.forRoot(routes);
