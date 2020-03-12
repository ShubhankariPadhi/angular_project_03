import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
public employees=[];
public errMessage;
  constructor(private employeeservice:EmployeeService) { }

  ngOnInit() {
    this.employeeservice.getEmployees()
    .subscribe(data => this.employees= data,error =>this.errMessage = error);
  }

}
