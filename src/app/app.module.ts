import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {SocialLoginModule, AuthServiceConfig, GoogleLoginProvider} from 'angular-6-social-login';
import {UserServiceClient} from '../services/user.service.client';
import { ProfileComponent } from './profile/profile.component';
import { ChartsComponent } from './charts/charts.component';
import {ChartsServiceClient} from '../services/charts.service.client';
import { SongsComponent } from './songs/songs.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ArtistpageComponent } from './artistpage/artistpage.component';
import {SafePipe} from './safe.pipe';
import {SignupComponent} from './signup/signup.component';
import {ArtistServiceClient} from '../services/artist.service.client';
import { FallbackComponent } from './fallback/fallback.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {RouterModule} from '@angular/router';
import { TrackComponent } from './track/track.component';
import {TrackServiceClient} from "../services/track.service.client";
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';


export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('177528931826-q16bsh4liic96ds36rhhc07ai4vemd8i.apps.googleusercontent.com')
      }
    ]);
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    ChartsComponent,
    SongsComponent,
    HomeComponent,
    SearchComponent,
    HeaderComponent,
    ArtistpageComponent,
    SafePipe,
    ChartsComponent,
    SignupComponent,
    FallbackComponent,
    SearchBarComponent,
    TrackComponent,
    ArtistProfileComponent,
    ExplorePageComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    AngularFontAwesomeModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserServiceClient,
    ChartsServiceClient,
    ArtistServiceClient,
    TrackServiceClient,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
