// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {ChartsComponent} from './charts/charts.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'charts', component: ChartsComponent},
<<<<<<< HEAD
  {path: 'user', component: ProfileComponent},
=======
  {path: 'profile', component: ProfileComponent},
>>>>>>> f13d597f132bfb63ff78e462a9999f771540b55f
];

export const AppRouting = RouterModule.forRoot(routes);
