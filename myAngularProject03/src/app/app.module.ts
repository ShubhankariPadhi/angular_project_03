import { EmployeeTitlePipe } from './../HttpAndObservable/employee-title.pipe';
import { IndiaComponent } from './../customObservable/india/india.component';
import { EmployeeListComponent } from './../routingDemo/employee-list/employee-list.component';
import { HighlightDirective } from './../observablesExamples/highlight.directive';
import { UnlessDirective } from './../observablesExamples/unless.directive';
import { StructuraldirectivesComponent } from './../observablesExamples/structuraldirectives/structuraldirectives.component';
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
import {HttpClientModule} from "@angular/common/http";
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
    DatabindingCompComponent,
    StructuraldirectivesComponent,
    UnlessDirective,
    HighlightDirective,
    EmployeeListComponent,
    IndiaComponent ,
    EmployeeTitlePipe

      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [/*StudentServiceService*/],// old version follow this for service inclusion
  bootstrap: [AppComponent]
})
export class AppModule { }
