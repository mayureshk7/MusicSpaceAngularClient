// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {ChartsComponent} from './charts/charts.component';
import {SignupComponent} from './signup/signup.component';
import {SongsComponent} from './songs/songs.component';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {ArtistpageComponent} from './artistpage/artistpage.component';
import {FallbackComponent} from './fallback/fallback.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'user', component: ProfileComponent},
  {path: 'songs', component: SongsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'search/:type/:query', component: SearchComponent},
  {path: 'artist/:artistId', component: ArtistpageComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'fallback', component: FallbackComponent}
];

export const AppRouting = RouterModule.forRoot(routes);
