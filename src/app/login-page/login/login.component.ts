import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { GlobalvarService } from 'src/app/globalvar.service';
import { FetchuserService } from 'src/app/fetchuser.service';
import { Users } from 'src/app/home-page/main/navbar/Users';
import { XpService } from 'src/app/home-page/xp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() toggle = new EventEmitter<boolean>();

  credentials = {
    email: '',
    password: ''
  };

  flag: boolean;

  check: Text;

  result: string;
  users: Users;
  user = [];
  onSubmit() {


    if ((this.credentials.email != '' && this.credentials.password != '') &&
      (this.credentials.email != null && this.credentials.password != null)) {
      this.loginservice.checkLogin(this.credentials).subscribe(
        (response: any) => {

          this.result = response;
          if (this.result === 'Login Success') {
            //console.log(this.result);
            this.globalvar.receivedEmail = this.credentials.email;
            //console.log(this.globalvar.receivedEmail);

            this.router.navigate(['home']);
            console.log("here");
          }
          else
            alert("Login Failed");

        }
      );
    }
    else
      alert("Fields cannot be null");

  }

  // setUser(data: any) {
  //   this.users = new Users(data.xP, data.score, data.status, data.username, data.email);

  //   //console.log(this.xpServ.xp);
  // }

  onClick() {
    this.toggle.emit(true);
  }

  constructor(private loginservice: LoginService,
    private appcomponent: AppComponent,
    private router: Router,
    private globalvar: GlobalvarService,
    private fetchuser: FetchuserService,
    private xpService: XpService) { }

  ngOnInit(): void {
  }

}
