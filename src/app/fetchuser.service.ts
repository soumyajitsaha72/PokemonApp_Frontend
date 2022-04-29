import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchuserService {

  constructor(private httpClient: HttpClient) { }

  userLink = "http://localhost:8081/getUserByEmail";
  fetchuser: string;

  public getUserList(email: string) {

    this.fetchuser = this.userLink + "?email=" + email;
    return this.httpClient.get(this.fetchuser);

  }
}
