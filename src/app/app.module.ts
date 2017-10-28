import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StudentService } from './student.service';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { StudentDetailComponent } from './student-details/student-details.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const ROUTES = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentComponent },
  { path: 'student-details/:id', component: StudentDetailComponent },
  { path: 'student-create', component: StudentCreateComponent },
  { path: 'student-edit/:id', component: StudentEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentDetailComponent,
    StudentCreateComponent,
    StudentEditComponent
  ],
  imports: [
   BrowserModule,
   FormsModule,
   HttpModule,
   RouterModule.forRoot(ROUTES)
  ],
  providers: [
    StudentService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}  
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
