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
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';


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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    AngularFontAwesomeModule,
    SocialLoginModule,
    FormsModule
  ],
  providers: [
    UserServiceClient,
    ChartsServiceClient,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
