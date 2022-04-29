import { Injectable } from '@angular/core';
import { Users } from './home-page/main/navbar/Users';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalvarService {



  public receivedEmail: string;
  public global_xP: number;
  public users: Users;
  constructor() { }
}
