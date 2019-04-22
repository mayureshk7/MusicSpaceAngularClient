import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {SocialLoginModule, AuthServiceConfig, GoogleLoginProvider} from 'angular-6-social-login';
import {UserServiceClient} from '../services/user.service.client';
import { ProfileComponent } from './profile/profile.component';
import { ChartsComponent } from './charts/charts.component';
import {ChartsServiceClient} from '../services/charts.service.client';
import { SignupComponent } from './signup/signup.component';



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
    SignupComponent
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
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
