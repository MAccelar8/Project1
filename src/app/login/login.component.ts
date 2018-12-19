import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ShowresultsService} from "../showresults.service";
import{AuthenticationserviceService, TokenPayload} from "../authenticationservice.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  credentials: TokenPayload = {
     uid: '',
     password: null
   };
  constructor(private result:AuthenticationserviceService,private router: Router) { }
  public token:string;
  ngOnInit() {
  }
  login(form:NgForm) {
    this.credentials.uid=form.value.uid;
    this.credentials.password=form.value.pwd;
    this.result.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/studentportal');
    }, (err) => {
      console.error(err);
    });
    console.log(this.result.getUserDetails());
  }

  // async login(form: NgForm){
  //   console.log(form.value);
  //
  //   await this.result.login(credentials).subscribe();
  // }

}
