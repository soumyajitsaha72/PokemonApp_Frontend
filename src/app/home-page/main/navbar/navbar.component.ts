import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../search.service';
import { XpService } from '../../xp.service';
import { FetchuserService } from 'src/app/fetchuser.service';
import { GlobalvarService } from 'src/app/globalvar.service';
import { Users } from './Users';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  xp = this.xpServ.xp;
  searchField = "";
  users: Users;
  user = [];
  emailid: string;
  res: string;
  //current_xP: number;
  onInput() {
    this.search.searchKeyword.emit(this.searchField);
  }

  constructor(private search: SearchService, private router: Router, private xpServ: XpService,
    private fetchUser: FetchuserService, private globalvar: GlobalvarService,
    private login: LoginService) { }

  ngOnInit(): void {
    console.log(this.xpServ.xp);
    this.emailid = this.globalvar.receivedEmail;
    this.users = this.globalvar.users;

    this.fetchUser.getUserList(this.emailid).subscribe(
      (response: any) => {
        this.user = response;
        //console.log(this.user);
        this.setUser(this.user);
        this.globalvar.users = this.users;
        this.xpServ.xp = this.users.xP;
        // console.log(this.globalvar.users);
        // console.log(this.xpServ.xp);
      });
  }
  //console.log(this.emailid);
  //console.log("After call");

  setUser(data: any) {
    this.users = new Users(data.xP, data.score, data.status, data.username, data.email);

    //console.log(this.xpServ.xp);
  }

  onLogout() {

    this.login.updateStatus(this.emailid).subscribe(
      (response: any) => {
        this.res = response;
      }
    );

  }
  navigateToTeams() {
    // this.router.navigate(['teams']);
    this.router.navigateByUrl('/teams');
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  navigateToLeaderboard() {
    this.router.navigateByUrl('/leaderboard');
  }


}
