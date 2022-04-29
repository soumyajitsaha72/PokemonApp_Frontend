import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './home-page/main/footer/footer.component';
import { NavbarComponent } from './home-page/main/navbar/navbar.component';
import { BodyComponent } from './home-page/body/body.component';
import { CardComponent } from './home-page/body/card/card.component';
import { LoginComponent } from './login-page/login/login.component';
import { SignupComponent } from './login-page/signup/signup.component';
import { PokemonApiService } from './pokemon-api.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { TeamsPageComponent } from './home-page/teams-page/teams-page.component';
import { MainComponent } from './home-page/main/main.component';
import { LeaderboardComponent } from './home-page/leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    CardComponent,
    LoginPageComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent,
    TeamsPageComponent,
    MainComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [PokemonApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
