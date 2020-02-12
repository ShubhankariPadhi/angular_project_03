import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentListComponent} from "../studentRouting/student-list/student-list.component";
import {ParentCompComponent} from "../parent-comp/parent-comp.component";
import {ChildcompComponent} from "../parent-comp/childcomp/childcomp.component";
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
    ChildcompComponent

      ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [/*StudentServiceService*/],// old version follow this for service inclusion
  bootstrap: [AppComponent]
})
export class AppModule { }
