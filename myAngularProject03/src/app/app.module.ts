import { BrowserModule } from '@angular/platform-browser';
import {NgModule, TemplateRef} from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentListComponent} from "../studentRouting/student-list/student-list.component";
import {ParentCompComponent} from "../parent-comp/parent-comp.component";
import {ChildcompComponent} from "../parent-comp/childcomp/childcomp.component";
import {StudentListCompComponent} from "../taskDir/student-list-comp/student-list-comp.component";
import {ParentStudentComponent} from "../taskUsingParentChildDS/parent-student/parent-student.component";
import {StudentMarkChildComponent} from "../taskUsingParentChildDS/student-mark-child/student-mark-child.component";
import {StudentEditChildComponent} from "../taskUsingParentChildDS/student-edit-child/student-edit-child.component";
import {ViewChildParentCompComponent} from "../viewChildEx/view-child-parent-comp/view-child-parent-comp.component";
import {ViewChildChildCompComponent} from "../viewChildEx/view-child-child-comp/view-child-child-comp.component";
import {DatabindingCompComponent} from "../viewChildEx/databinding-comp/databinding-comp.component";
import {FormsModule} from "@angular/forms";
/*import {StudentServiceService} from "../studentRouting/student-service.service";*/
/*import {DepartmentListComponent} from '../routingDemo/department-list/department-list.component';
import {EmployeeListComponent} from '../routingDemo/employee-list/employee-list.component';*/

@NgModule({
  declarations: [
    AppComponent,
   /* DepartmentListComponent,
    EmployeeListComponent,*/
    routingComponents,
    StudentListComponent,
    ParentCompComponent,
    ChildcompComponent,
    StudentListCompComponent,
    ParentStudentComponent,
    StudentMarkChildComponent,
    StudentEditChildComponent,
    ViewChildParentCompComponent,
    ViewChildChildCompComponent,
    DatabindingCompComponent

      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [/*StudentServiceService*/],// old version follow this for service inclusion
  bootstrap: [AppComponent]
})
export class AppModule { }
