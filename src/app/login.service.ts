import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  loginUrl = "http://localhost:8081/loginUser";
  status_url: string;
  public checkLogin(credentials: any) {

    return this.httpClient.post(`${this.loginUrl}`, credentials, { responseType: 'text' });

  }


  public updateStatus(email: string) {

    this.status_url = "http://localhost:8081/updateStatus?email=" + email;
    return this.httpClient.post(`${this.status_url}`, { responseType: 'text' });

  }
}
