import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {EmployeeListComponent} from '../routingDemo/employee-list/employee-list.component';
import {DepartmentListComponent} from '../routingDemo/department-list/department-list.component';
import {DepartmentDetailsComponent} from '../routingDemo/department-details/department-details.component';
import {DepartmentContactComponent} from '../routingDemo/department-contact/department-contact.component';
import {PageNotFoundCompComponent} from "../routingDemo/page-not-found-comp/page-not-found-comp.component";
import {DepartmentOverviewCompComponent} from '../routingDemo/department-overview-comp/department-overview-comp.component';
import {StudentDetailsComponent} from '../studentRouting/student-details/student-details.component';
import {StudentOverviewComponent} from "../studentRouting/student-overview/student-overview.component";
import {StudentListComponent} from "../studentRouting/student-list/student-list.component";
import {StudentContactComponent} from "../studentRouting/student-contact/student-contact.component";
import {StudentmarkMarksComponent} from "../studentRouting/student-marks/student-marks.component";


const routes: Routes = [
  { path: '', redirectTo: 'departments', pathMatch: 'full' },
  {path: 'departments', component: DepartmentListComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'departments/:id',component: DepartmentDetailsComponent},
  {path: 'students',component: StudentListComponent},
  {path: 'students/:id',component: StudentListComponent,
  children:[
    { path: 'studentmarks', component: StudentmarkMarksComponent}
  ]
  },

  /*{path: 'students/:id',component: StudentDetailsComponent,
    children: [
      { path: 'studentcon', component: StudentContactComponent},
      { path: 'studentoverview', component: StudentOverviewComponent},

    ]
  },*/
  {
    path: 'departments/:id',
    component: DepartmentDetailsComponent,
    children: [
      { path: 'contact', component: DepartmentContactComponent},
      { path: 'overview', component: DepartmentOverviewCompComponent}
    ]
  },
  { path: '**', component: PageNotFoundCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routingComponents = [DepartmentListComponent,
                                 EmployeeListComponent,
                                 DepartmentDetailsComponent,
                                 DepartmentContactComponent,
                                  EmployeeListComponent ,
                                  DepartmentOverviewCompComponent,
                                  PageNotFoundCompComponent,
  StudentDetailsComponent,
  StudentListComponent,
  StudentOverviewComponent,StudentContactComponent,StudentmarkMarksComponent
];
