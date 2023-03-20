import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/dynamic/login-page/login-page.component';
import { HomePageComponent } from './components/static/home-page/home-page.component';
import { NearbyResourcesPageComponent } from './components/static/nearby-resources-page/nearby-resources-page.component';

import { CalendarPageComponent } from './components/dynamic/calendar-page/calendar-page.component';
import { ChatPageComponent } from './components/dynamic/chat-page/chat-page.component';
import { LeaderboardPageComponent } from './components/dynamic/leaderboard-page/leaderboard-page.component';

import { DormPageComponent } from './components/dynamic/dorm-page/dorm-page.component';
import { FacilitiesPageComponent } from './components/dynamic/facilities-page/facilities-page.component';
import { FacultyPageComponent } from './components/dynamic/faculty-page/faculty-page.component';
import { HamPageComponent } from './components/dynamic/ham-page/ham-page.component';
import { DoodlePageComponent } from './components/dynamic/pictures/doodle-page.component';
import { GuidePageComponent } from './components/static/guide-page/guide-page.component';
import { StudentOrgPageComponent } from './components/static/student-org-page/student-org-page.component';
import { ProfilePageComponent } from './components/dynamic/profile-page/profile-page.component';
import { MemePageComponent } from './components/dynamic/meme-page/meme-page.component';
import { ContactNovosComponent } from './components/dynamic/contact-novos/contact-novos.component';
import { SignUpComponent } from './components/dynamic/sign-up/sign-up.component';
import { PostsComponent } from './components/dynamic/posts/posts.component';
import { AuthGuardService } from './components/services/auth-guard.service';
import { CatalystComponent } from './components/static/catalyst/catalyst.component';
import { EasterEggComponent } from './components/static/easter-egg/easter-egg.component';





const routes: Routes = [
  { path: "", component: LoginPageComponent },
  
  { path: "home", component: HomePageComponent },
  { path: "resources", component: NearbyResourcesPageComponent },
  { path: "calendar", component: CalendarPageComponent},
  { path: "chat", component: ChatPageComponent, canActivate:[AuthGuardService] },
  { path: "leaderboard", component: LeaderboardPageComponent,canActivate:[AuthGuardService]  },
  { path: "dorm", component: DormPageComponent },
  { path: "facilities", component: FacilitiesPageComponent },
  { path: "faculty", component: FacultyPageComponent },
  { path: "ham", component: HamPageComponent },
  { path: "guide", component: GuidePageComponent },
  { path: "stuorg", component: StudentOrgPageComponent },
  { path: "profile", component: ProfilePageComponent, canActivate:[AuthGuardService] },
  { path: "meme", component: MemePageComponent },
  {path: "connectNo", component: ContactNovosComponent},
  {path: "signup",component:SignUpComponent},
  {path: "pictures", component:DoodlePageComponent},
  {path: "posts", component: PostsComponent},
  {path: "catalyst", component: CatalystComponent},
  {path: "easter", component: EasterEggComponent},
  {path: "login", component: LoginPageComponent},

  { path: "**", redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
