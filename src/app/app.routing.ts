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
import {TrackComponent} from './track/track.component';
import {ExplorePageComponent} from './explore-page/explore-page.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {ArtistProfileComponent} from './artist-profile/artist-profile.component';
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'user', component: ProfileComponent},
  {path: 'songs', component: SongsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'search/:type', component: SearchComponent},
  {path: 'explore', component: ExplorePageComponent},
  {path: 'artist/:artistId', component: ArtistpageComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile/artist', component: ArtistProfileComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'fallback', component: FallbackComponent},
  {path: 'artists/:artist/tracks/:track', component: TrackComponent}
];

export const AppRouting = RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'});
