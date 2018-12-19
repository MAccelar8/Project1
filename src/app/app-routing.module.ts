import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomecomponentComponent} from './homecomponent/homecomponent.component';
import {AcademicsComponent} from './academics/academics.component';
import {AdmissionComponent} from './admission/admission.component';
import {StudentsComponent} from './students/students.component';
import {FacultyComponent} from './faculty/faculty.component';
import {ServicesComponent} from './services/services.component';
import {StudentPortalComponent} from './student-portal/student-portal.component';
import {LoginComponent} from './login/login.component';
import {ResultComponent} from './result/result.component';
import {DownloadsComponent} from "./downloads/downloads.component";
import {DisplayresultComponent} from "./displayresult/displayresult.component";
import {AddMarksComponent} from "./add-marks/add-marks.component";
import{NewsComponent} from "./news/news.component";
import{EventsComponent} from "./events/events.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomecomponentComponent },
  { path: 'academics', component: AcademicsComponent  },
  { path: 'admission', component: AdmissionComponent },
  { path: 'student', component: StudentsComponent },
  { path: 'faculty-staff', component: FacultyComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'studentportal', component: StudentPortalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'result', component: ResultComponent },
  { path: 'download', component: DownloadsComponent},
  { path: 'disres', component: DisplayresultComponent},
  { path: 'addmark', component: AddMarksComponent},
  {path:'news',component:NewsComponent},
  {path:'events',component:EventsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
