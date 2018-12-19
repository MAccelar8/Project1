import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ShowresultsService} from "../showresults.service";
import {ISem5_results} from "../interfaces/sem5_results";
import{AuthenticationserviceService, TokenPayload} from "../authenticationservice.service";

@Component({
  selector: 'app-add-marks',
  templateUrl: './add-marks.component.html',
  styleUrls: ['./add-marks.component.css']
})
export class AddMarksComponent implements OnInit {
  public m:Number[]=new Array();
  constructor( private result:ShowresultsService,private auth:AuthenticationserviceService) { }
  public stds:any;
  private uid:String;
  private subj:String;
  async ngOnInit() {
    this.subj=this.auth.subj;
    this.uid =  this.auth.userid;
    await this.result.getstudents().subscribe(data=>this.stds=data);
  }
  async addMarks(form: NgForm){


    console.log(this.subj);
    //private s:ISem5_results;
    console.log(form.value);
    for(var s in form.value ){
      if(!isNaN(parseInt(form.value[s])))
      {
        this.m.push(parseInt(form.value[s]));
      }
    }
    // this.m.push(parseInt(form.value.text1));
    // this.m.push(parseInt(form.value.text2));
    // this.m.push(parseInt(form.value.text3));
     console.log(this.m);
    const marks = {
      sub:this.subj,
      exam:form.value.exampleRadios,
      sm:this.m
    }
    console.log(marks);
    await this.result.addmarks(marks).subscribe();
  }
}
