import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './home-page/leaderboard/leaderboard.component';

import { MainComponent } from './home-page/main/main.component';
import { NavbarComponent } from './home-page/main/navbar/navbar.component';
import { TeamsPageComponent } from './home-page/teams-page/teams-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path: 'teams',
    component: TeamsPageComponent
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent
  },

  {
    path: 'login-signup',
    component: LoginPageComponent
  },

  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'nav',
    component: NavbarComponent
  },
  {
    path: '',
    redirectTo: 'login-signup',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
