import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {EmployeeListComponent} from '../routingDemo/employee-list/employee-list.component';
import {DepartmentListComponent} from '../routingDemo/department-list/department-list.component';
import {DepartmentDetailsComponent} from '../routingDemo/department-details/department-details.component';
import {DepartmentContactComponent} from '../routingDemo/department-contact/department-contact.component';
import {PageNotFoundCompComponent} from "../routingDemo/page-not-found-comp/page-not-found-comp.component";
import {DepartmentOverviewCompComponent} from '../routingDemo/department-overview-comp/department-overview-comp.component';


const routes: Routes = [
  {path: 'departments', component: DepartmentListComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'departments/:id',component: DepartmentDetailsComponent},
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
                                  PageNotFoundCompComponent];
