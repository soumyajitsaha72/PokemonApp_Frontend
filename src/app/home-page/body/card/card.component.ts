import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TeamsService } from '../../teams.service';
import { XpService } from '../../xp.service';
import { Pokemon } from '../Pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // Binding Card component to Parent
  @Input() element: { id: number, name: string, base_experience: number }

  onAddButtonClick(pokemonId: number, xp: number) {
    this.teamServ.addToTeam(pokemonId);
    // console.log(this.teamServ);
    this.xpServ.removeXp(xp);
    this.teamServ.addScore(xp);
  }

  isInTeam(pokemonId: number) {
    if (this.teamServ.getTeam().includes(pokemonId)) {
      return true
    }
    return false
  }

  constructor(private teamServ: TeamsService, private xpServ: XpService) { }

  ngOnInit(): void {

  }

}
