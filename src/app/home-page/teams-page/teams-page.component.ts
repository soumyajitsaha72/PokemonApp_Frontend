import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { XpService } from '../xp.service';
import { ScoreService } from 'src/app/score.service';
import { GlobalvarService } from 'src/app/globalvar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.css']
})
export class TeamsPageComponent implements OnInit {
  pokemons = this.teamServ.pokeArray;

  teamsArr = this.teamServ.getTeam();
  score = this.teamServ.getScore(); //Added the score in team service.

  onClick(pokemonId: number) {
    this.teamServ.removeFromTeam(pokemonId);
    this.teamServ.removeScore(this.pokemons[pokemonId].base_experience);
  }

  constructor(private teamServ: TeamsService,
    private update: ScoreService,
    private global: GlobalvarService,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.teamServ.pokeArray);
    console.log(this.teamServ.getTeam());
  }

  result: string;
  email = this.global.receivedEmail;
  onDone() {

    console.log(this.email, this.score);
    this.update.updateScore(this.email, this.score).subscribe(
      (response: any) => {
        this.result = response;
      }
    );
    this.teamServ.score = 0;
    this.teamServ.team = [];
    this.router.navigate(['home']);

  }

}
