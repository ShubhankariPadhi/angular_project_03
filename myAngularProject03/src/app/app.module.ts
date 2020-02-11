import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
/*import {DepartmentListComponent} from '../routingDemo/department-list/department-list.component';
import {EmployeeListComponent} from '../routingDemo/employee-list/employee-list.component';*/

@NgModule({
  declarations: [
    AppComponent,
   /* DepartmentListComponent,
    EmployeeListComponent,*/
    routingComponents,

      ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
