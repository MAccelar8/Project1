import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { MynavComponent } from './mynav/mynav.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { LoginComponent } from './login/login.component';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { ResultComponent } from './result/result.component';
import { FooterComponent } from './footer/footer.component';
import { SpnavbarComponent } from './spnavbar/spnavbar.component';
import { InvertedFooterComponent } from './inverted-footer/inverted-footer.component';
import { AcademicsComponent } from './academics/academics.component';
import { StudentsComponent } from './students/students.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ServicesComponent } from './services/services.component';
import { AdmissionComponent } from './admission/admission.component';
import { AppRoutingModule } from './/app-routing.module';
import { DownloadsComponent } from './downloads/downloads.component';
import { DisplayresultComponent } from './displayresult/displayresult.component';
import {ShowresultsService} from "./showresults.service";
import {HttpClientModule} from "@angular/common/http";
import { AddMarksComponent } from './add-marks/add-marks.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
@NgModule({
  declarations: [
    AppComponent,
    MynavComponent,
    HomecomponentComponent,
    LoginComponent,
    StudentPortalComponent,
    ResultComponent,
    FooterComponent,
    SpnavbarComponent,
    InvertedFooterComponent,
    AcademicsComponent,
    StudentsComponent,
    FacultyComponent,
    ServicesComponent,
    AdmissionComponent,
    DownloadsComponent,
    DisplayresultComponent,
    AddMarksComponent,
    NewsComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShowresultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
