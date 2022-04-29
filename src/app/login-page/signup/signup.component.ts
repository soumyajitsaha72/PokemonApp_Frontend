import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() toggle = new EventEmitter<boolean>();

  creds = {

    username: '',
    email: '',
    password: ''
  };

  message: string;

  result: String;
  onSignUp() {

    if ((this.creds.email != '' && this.creds.password != '' && this.creds.username != '') &&
      (this.creds.email != null && this.creds.password != null && this.creds.username != null)) {
      this.signUpservice.signUp(this.creds).subscribe(
        (response: any) => {
          this.result = response;
          if (this.result == "Account Created") {
            console.log(this.result);
            this.message = "New Account Created";
          }
          else if (this.result == "Email Already Exists") {
            alert("Email Exists");
          }
          else {
            alert(this.message);
          }
        }

      )
    }
    else
      alert("Fields Cannot be Null");
  }

  onClick() {
    this.toggle.emit(false);
  }

  constructor(private signUpservice: SignupService, private router: Router) { }

  ngOnInit(): void {
  }

}
