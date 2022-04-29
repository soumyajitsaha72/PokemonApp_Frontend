import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TeamsService {
    pokeArray = [];

    team = [];
    teamLength = 0;
    score = 0;

    getScore() {
        return this.score;
    }

    addScore(pokeScore: number) {
        this.score = this.score + pokeScore;
    }

    removeScore(pokeScore: number) {
        this.score = this.score - pokeScore;
    }

    getTeam() {
        return this.team;
    }

    getTeamLength() {
        return this.teamLength;
    }

    addToTeam(pokeId: number) {
        this.team.push(pokeId);
        this.teamLength++;
    }

    removeFromTeam(pokeId: number) {
        for (var i = 0; i < this.team.length; i++) {
            if (this.team[i] === pokeId) {
                this.team.splice(i, 1);
            }
        }

        this.teamLength--;
    }
}

