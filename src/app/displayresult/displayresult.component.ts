import { Component, OnInit } from '@angular/core';
import {ShowresultsService} from "../showresults.service";
import{AuthenticationserviceService, TokenPayload} from "../authenticationservice.service";
import {ISem5_results} from "../interfaces/sem5_results";
@Component({
  selector: 'app-displayresult',
  templateUrl: './displayresult.component.html',
  styleUrls: ['./displayresult.component.css']
})
export class DisplayresultComponent implements OnInit {

  constructor( private result:ShowresultsService,private auth:AuthenticationserviceService) { }
  public s5results:ISem5_results;
  private uid:String;
  async ngOnInit() {
    this.uid =  this.auth.userid;
    await this.result.getresult(this.uid).subscribe(data => this.s5results=data);
    console.log(this.s5results);
  }

}
