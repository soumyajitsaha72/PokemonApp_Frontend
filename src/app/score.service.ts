import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private httpClient: HttpClient) { }

  userLink = "http://localhost:8081/updateScorebyEmail";
  update: string;

  public updateScore(email: string, score: number) {

    this.update = this.userLink + "?email=" + email + "&score=" + score;
    return this.httpClient.post(`${this.update}`, { responseType: 'text' });

  }
}
