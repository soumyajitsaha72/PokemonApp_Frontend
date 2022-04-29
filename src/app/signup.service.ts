import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  signupUrl = "http://localhost:8081/insertUser";
  constructor(private httpClient: HttpClient) { }

  public signUp(creds: any) {

    return this.httpClient.post(`${this.signupUrl}`, creds, { responseType: 'text' });

  }
}
