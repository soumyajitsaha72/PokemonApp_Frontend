import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './home-page/main/navbar/Users';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:8081/getLeaderboard";
  public getLeaderBoard(): Observable<Users[]> {

    return this.httpClient.get<Users[]>(this.url);

  }
}
