import { Component, OnInit } from '@angular/core';
import{AuthenticationserviceService, TokenPayload} from "../authenticationservice.service";

@Component({
  selector: 'app-spnavbar',
  templateUrl: './spnavbar.component.html',
  styleUrls: ['./spnavbar.component.css']
})
export class SpnavbarComponent implements OnInit {

  constructor(private result:AuthenticationserviceService) { }
  private uid:String;
  private subj:String;
  private faculty:boolean;
  ngOnInit() {
    this.uid =  this.result.userid;
    this.subj=this.result.subj;
    if(this.subj=="student")
    {
      this.faculty=false;
    }
    else{
      this.faculty=true;
    }
  }
}
