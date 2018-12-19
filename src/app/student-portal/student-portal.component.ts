import { Component, OnInit } from '@angular/core';
import{AuthenticationserviceService, TokenPayload} from "../authenticationservice.service";

@Component({
  selector: 'app-student-portal',
  templateUrl: './student-portal.component.html',
  styleUrls: ['./student-portal.component.css']
})
export class StudentPortalComponent implements OnInit {

  constructor(private auth:AuthenticationserviceService) { }
  private uid:String;
  ngOnInit() {
    this.uid =  this.auth.userid;
  }

}
