import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginPageComponent } from './components/dynamic/login-page/login-page.component';
import { HomePageComponent } from './components/static/home-page/home-page.component';

import { LeaderboardPageComponent } from './components/dynamic/leaderboard-page/leaderboard-page.component';
import { ChatPageComponent } from './components/dynamic/chat-page/chat-page.component';
import { NearbyResourcesPageComponent } from './components/static/nearby-resources-page/nearby-resources-page.component';
import { CalendarPageComponent } from './components/dynamic/calendar-page/calendar-page.component';
import { FacultyPageComponent } from './components/dynamic/faculty-page/faculty-page.component';
import { FacilitiesPageComponent } from './components/dynamic/facilities-page/facilities-page.component';
import { DormPageComponent } from './components/dynamic/dorm-page/dorm-page.component';
import { HamPageComponent } from './components/dynamic/ham-page/ham-page.component';
import { ProfilePageComponent } from './components/dynamic/profile-page/profile-page.component';
import { MemePageComponent } from './components/dynamic/meme-page/meme-page.component';
import { PostsComponent } from './components/dynamic/posts/posts.component';

import { NavbarComponent } from './components/static/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatAutocompleteModule}from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { DoodlePageComponent } from './components/dynamic/pictures/doodle-page.component';
import { GuidePageComponent } from './components/static/guide-page/guide-page.component';
import { StudentOrgPageComponent } from './components/static/student-org-page/student-org-page.component';
import { ContactNovosComponent } from './components/dynamic/contact-novos/contact-novos.component';
import { CalendarCompComponent } from './components/dynamic/calendar-comp/calendar-comp.component';
import { SignUpComponent } from './components/dynamic/sign-up/sign-up.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { CatalystComponent } from './components/static/catalyst/catalyst.component';
import { EasterEggComponent } from './components/static/easter-egg/easter-egg.component';

import { AuthInterceptorService } from './components/services/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    LeaderboardPageComponent,
    ChatPageComponent,
    NearbyResourcesPageComponent,
    CalendarPageComponent,
    FacultyPageComponent,
    FacilitiesPageComponent,
    DormPageComponent,
    HamPageComponent,
    NavbarComponent,
    ProfilePageComponent,
    MemePageComponent,
    DoodlePageComponent,
    GuidePageComponent,
    StudentOrgPageComponent,
    CalendarCompComponent,
    ContactNovosComponent,
    SignUpComponent,
    PostsComponent,
    CatalystComponent,
    EasterEggComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide:DateAdapter,
      useFactory:adapterFactory,
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
