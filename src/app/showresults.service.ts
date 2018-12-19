import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import {ISem5_results} from './interfaces/sem5_results';
@Injectable({
  providedIn: 'root'
})
export class ShowresultsService {
  public x:15;
  constructor(private http:HttpClient) { }
  getresult(user){
    return this.http.get<ISem5_results>('http://localhost:3000/huzaifa?user='+user);
  }
  addmarks(marks){
    console.log(marks);

    return this.http.put('http://localhost:3000/huzaifa',marks);
  }
  getstudents(){
    return this.http.get('http://localhost:3000/getstudents');
  }

}
